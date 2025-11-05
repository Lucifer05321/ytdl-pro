/**
 * ═══════════════════════════════════════════════════════════════════
 * ytdl-pro - Modern Info Extractor
 * ═══════════════════════════════════════════════════════════════════
 * 
 * 🚀 Author: Lucifer05321
 * 🌐 Website: https://lucifer-nukers.netlify.app/
 * 💬 Discord: https://discord.gg/NwqwbyQvZZ
 * 📷 Instagram: https://www.instagram.com/mr_lucifer841
 * 💻 GitHub: https://github.com/Lucifer05321/
 * 
 * YouTube Video Information Extraction with Modern API
 * 
 * ═══════════════════════════════════════════════════════════════════
 */

const { ModernYouTubeClient } = require('./modern-client');
const formatUtils = require('./format-utils');
const urlUtils = require('./url-utils');
const sig = require('./sig');
const utils = require('./utils');
const Cache = require('./cache');

const BASE_URL = 'https://www.youtube.com/watch?v=';
exports.cache = new Cache();
exports.watchPageCache = new Cache();
exports.cookieCache = new Cache(1000 * 60 * 60 * 24);

class UnrecoverableError extends Error {}

const parseFormats = player_response => {
  let formats = [];
  if (player_response && player_response.streamingData) {
    formats = formats
      .concat(player_response.streamingData.formats || [])
      .concat(player_response.streamingData.adaptiveFormats || []);
  }
  return formats;
};

const extractPlayerUrl = (webpage) => {
  const patterns = [
    /"jsUrl":"([^"]+)"/,
    /"PLAYER_JS_URL":"([^"]+)"/,
    /ytplayer\.config\s*=\s*{.*?"js":\s*"([^"]+)"/
  ];

  for (const pattern of patterns) {
    const match = webpage.match(pattern);
    if (match) {
      let url = match[1].replace(/\\"/g, '"').replace(/\\\//g, '/');
      if (url.startsWith('//')) {
        url = 'https:' + url;
      } else if (url.startsWith('/')) {
        url = 'https://www.youtube.com' + url;
      }
      return url;
    }
  }
  return null;
};

const extractSignatureTimestamp = (playerCode) => {
  const match = playerCode.match(/signatureTimestamp[=:](\d+)/);
  return match ? parseInt(match[1]) : null;
};

exports.getInfo = async(link, options = {}) => {
  utils.checkForUpdates();
  const id = await urlUtils.getVideoID(link);
  
  const clients = ['ANDROID', 'IOS', 'WEB'];
  let lastError;
  let info;

  for (const clientType of clients) {
    try {
      console.log(`Trying ${clientType} client...`);
      const client = new ModernYouTubeClient(clientType, options.cookies);
      
      let playerResponse = await client.getPlayerResponse(id);
      
      if (!playerResponse || playerResponse.playabilityStatus?.status !== 'OK') {
        const reason = playerResponse?.playabilityStatus?.reason || 'Unknown error';
        throw new Error(`Video not playable: ${reason}`);
      }

      const videoDetails = playerResponse.videoDetails;
      const streamingData = playerResponse.streamingData;

      if (!streamingData) {
        throw new Error('No streaming data available');
      }

      let formats = parseFormats(playerResponse);
      
      const needsDecipher = formats.some(f => !f.url || f.signatureCipher || f.cipher);
      let playerUrl = null;
      let sts = null;
      
      if (formats.length && needsDecipher) {
        try {
          const webClient = new ModernYouTubeClient('WEB', options.cookies);
          const webpage = await webClient.fetchWebpage(id);
          playerUrl = extractPlayerUrl(webpage);
          
          if (playerUrl) {
            const axios = require('axios');
            const playerCode = await axios.get(playerUrl.startsWith('http') ? playerUrl : `https://www.youtube.com${playerUrl}`, { timeout: 30000 });
            sts = extractSignatureTimestamp(playerCode.data);
            
            if (sts && sts !== 0) {
              playerResponse = await client.getPlayerResponse(id, sts);
              formats = parseFormats(playerResponse);
            }
            
            const html5player = new URL(playerUrl, BASE_URL).toString();
            await sig.decipherFormats(formats, html5player, options);
          }
        } catch (decipherError) {
          console.warn('Signature deciphering failed:', decipherError.message);
        }
      }

      formats = formats.map(formatUtils.addFormatMeta);
      formats.sort(formatUtils.sortFormats);

      info = {
        videoId: id,
        title: videoDetails.title,
        lengthSeconds: videoDetails.lengthSeconds,
        keywords: videoDetails.keywords,
        channelId: videoDetails.channelId,
        shortDescription: videoDetails.shortDescription,
        thumbnail: videoDetails.thumbnail,
        averageRating: videoDetails.averageRating,
        allowRatings: videoDetails.allowRatings,
        viewCount: videoDetails.viewCount,
        author: videoDetails.author,
        isPrivate: videoDetails.isPrivate,
        isUnplisted: videoDetails.isUnplisted,
        isFamilySafe: videoDetails.isFamilySafe,
        isLiveContent: videoDetails.isLiveContent,
        formats: formats,
        related_videos: [],
        video_url: BASE_URL + id,
        age_restricted: false,
        videoDetails: videoDetails,
        player_response: playerResponse,
        html5player: playerUrl,
        full: true
      };

      return info;
      
    } catch (error) {
      console.warn(`${clientType} client failed: ${error.message}`);
      lastError = error;
      continue;
    }
  }
  
  throw new Error(`All clients failed. Last error: ${lastError.message}`);
};

exports.getBasicInfo = exports.getInfo;

exports.validateID = urlUtils.validateID;
exports.validateURL = urlUtils.validateURL;
exports.getURLVideoID = urlUtils.getURLVideoID;
exports.getVideoID = urlUtils.getVideoID;
