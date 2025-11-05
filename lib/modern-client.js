/**
 * ═══════════════════════════════════════════════════════════════════
 * ytdl-pro - Modern YouTube Client Module
 * ═══════════════════════════════════════════════════════════════════
 * 
 * 🚀 Author: Lucifer05321
 * 🌐 Website: https://lucifer-nukers.netlify.app/
 * 💬 Discord: https://discord.gg/NwqwbyQvZZ
 * 📷 Instagram: https://www.instagram.com/mr_lucifer841
 * 💻 GitHub: https://github.com/Lucifer05321/
 * 
 * Multi-Client YouTube API Integration
 * Supports ANDROID, IOS, and WEB clients
 * 
 * ═══════════════════════════════════════════════════════════════════
 */

const axios = require('axios');
const cookieUtils = require('./cookie');

const CLIENTS = {
  WEB: {
    name: 'WEB',
    version: '2.20251029.01.00',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    apiKey: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'
  },
  ANDROID: {
    name: 'ANDROID',
    version: '20.43.37',
    userAgent: 'com.google.android.youtube/20.43.37 (Linux; U; Android 14; en_US) gzip',
    apiKey: 'AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w'
  },
  IOS: {
    name: 'IOS',
    version: '20.43.5',
    userAgent: 'com.google.ios.youtube/20.43.5 (iPhone16,2; U; CPU iOS 18_2_0 like Mac OS X;)',
    apiKey: 'AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc'
  },
  ANDROID_EMBED: {
    name: 'ANDROID_EMBEDDED_PLAYER',
    version: '20.43.37',
    userAgent: 'com.google.android.youtube/20.43.37 (Linux; U; Android 14; en_US) gzip',
    apiKey: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'
  }
};

class ModernYouTubeClient {
  constructor(clientType = 'WEB', cookies = null) {
    this.client = CLIENTS[clientType] || CLIENTS.WEB;
    this.cookies = cookies;
  }

  getHeaders(includeContentType = false) {
    const headers = {
      'User-Agent': this.client.userAgent,
      'Accept-Language': 'en-US,en;q=0.9',
    };
    
    if (this.client.name === 'ANDROID' || this.client.name === 'IOS') {
      headers['X-YouTube-Client-Name'] = this.client.name === 'ANDROID' ? '3' : '5';
      headers['X-YouTube-Client-Version'] = this.client.version;
    } else {
      headers['Accept'] = '*/*';
      headers['Accept-Encoding'] = 'gzip, deflate';
      headers['Origin'] = 'https://www.youtube.com';
      headers['Referer'] = 'https://www.youtube.com/';
    }
    
    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }

    // Add cookies if provided (helps with authenticated format access)
    if (this.cookies) {
      const cookieString = cookieUtils.parseCookies(this.cookies);
      if (cookieString) {
        headers['Cookie'] = cookieString;
      }
    }
    
    return headers;
  }

  buildContext() {
    const context = {
      client: {
        clientName: this.client.name,
        clientVersion: this.client.version,
        hl: 'en',
        gl: 'US',
        utcOffsetMinutes: 0
      }
    };

    if (this.client.name === 'ANDROID') {
      context.client.androidSdkVersion = 34;
      context.client.platform = 'MOBILE';
    } else if (this.client.name === 'IOS') {
      context.client.deviceMake = 'Apple';
      context.client.deviceModel = 'iPhone16,2';
      context.client.platform = 'MOBILE';
    }

    return { context };
  }

  async getPlayerResponse(videoId, signatureTimestamp = null) {
    const url = `https://www.youtube.com/youtubei/v1/player?key=${this.client.apiKey}`;
    
    const payload = {
      ...this.buildContext(),
      videoId,
      playbackContext: {
        contentPlaybackContext: {
          html5Preference: 'HTML5_PREF_WANTS',
          signatureTimestamp: signatureTimestamp || 0
        }
      }
    };

    const headers = this.getHeaders(true);
    
    try {
      const response = await axios.post(url, payload, { 
        headers,
        timeout: 30000
      });
      
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get player response: ${error.message}`);
    }
  }

  async fetchWebpage(videoId) {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    const headers = this.getHeaders();
    
    try {
      const response = await axios.get(url, { headers, timeout: 30000 });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch webpage: ${error.message}`);
    }
  }
}

module.exports = { ModernYouTubeClient, CLIENTS };
