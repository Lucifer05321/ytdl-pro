ytdl-pro 🚀

Professional YouTube Video Downloader - The Ultimate Solution!


<img src="https://cdn.jsdelivr.net/gh/Lucifer05321/Media_host_6xml@0a824f72b6827f367383dc1a6b61cfad4a797f44/Cloud/Lucifer_web/Lucifer-ytdl-pro.gif" height="100000" />

<br>

<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Inconsolata&weight=500&size=50&duration=4000&pause=300&color=F7F7F7&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=1300&height=140&lines=Welcome+to+ytdl-pro;Professional+YouTube+Video+Downloader+%F0%9F%9A%80" width="100%" />
</div>

<br>

<div align="center">
<img src="https://img.shields.io/badge/Version-2.0_Professional-purple?style=for-the-badge&logo=azurepipelines" />
<img src="https://img.shields.io/badge/Node.js->=16.0-green?style=for-the-badge&logo=nodedotjs" />
<img src="https://img.shields.io/badge/Status-ACTIVE-brightgreen?style=for-the-badge&logo=rocket" />
<img src="https://img.shields.io/badge/Platform-Windows|Mac|Linux|Termux-orange?style=for-the-badge&logo=windows" />
</div>

<br>

<div align="center">
<img src="https://img.shields.io/github/stars/Lucifer05321/ytdl-pro?style=for-the-badge&logo=github" />
<img src="https://img.shields.io/github/forks/Lucifer05321/ytdl-pro?style=for-the-badge&logo=github" />
<img src="https://img.shields.io/github/issues/Lucifer05321/ytdl-pro?style=for-the-badge&logo=github" />
</div>

<br>

<pre>
    🎯 MODERN API - YouTube InnerTube Integration
    ⚡ MULTI-CLIENT - ANDROID, IOS, WEB Fallback
    🚀 4K SUPPORT - 144p to 4K Quality
    🎵 AUDIO EXTRACTION - High Quality Audio
    🔥 ACTIVE DEVELOPMENT - Unlike Abandoned ytdl-core
    📱 Cross-Platform Support
</pre>

<br>

<div align="center">

# ☆ Quick Navigation

[![📥 INSTALLATION](https://img.shields.io/badge/📥_INSTALLATION-4285F4?style=for-the-badge&logo=download&logoColor=white)](#-installation)
[![🚀 QUICK START](https://img.shields.io/badge/🚀_QUICK_START-FF6B6B?style=for-the-badge&logo=rocket&logoColor=white)](#-quick-start)
[![📚 API REFERENCE](https://img.shields.io/badge/📚_API_REFERENCE-34A853?style=for-the-badge&logo=book&logoColor=white)](#-api-reference)
[![💡 EXAMPLES](https://img.shields.io/badge/💡_EXAMPLES-FFA500?style=for-the-badge&logo=code&logoColor=white)](#-examples)
[![🆘 SUPPORT](https://img.shields.io/badge/🆘_SUPPORT-E4405F?style=for-the-badge&logo=help&logoColor=white)](#-support)

</div>

<br>

<div align="center">

# ☆ Connect With Me

[![Website Lucifer Domains](https://img.shields.io/badge/Website-Lucifer_Domains-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://lucifer-nukers.netlify.app/)
[![Discord Community](https://img.shields.io/badge/Discord-Community_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/uaSvNgGCWp)
[![Instagram Developer](https://img.shields.io/badge/Instagram-Developer_Profile-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](#)
[![GitHub Source Code](https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lucifer05321)

</div>

---



<br>
<div align="center">
<img src="https://raw.githubusercontent.com/innng/innng/master/assets/kyubey.gif" height="70" />

<br>

</div>

---
## 📊 Why Choose ytdl-pro? 🆚

<div align="center">

| Feature | ytdl-core (Abandoned) | ytdl-pro (Modern) |
|:--|:--:|:--:|
| **Last Update** | ❌ 2–3 Years Ago | ✅ Active Development |
| **YouTube API** | ❌ Old API | ✅ Modern InnerTube API |
| **4K Support** | ❌ Broken | ✅ Fully Working |
| **Multi-Client** | ❌ Single | ✅ ANDROID • IOS • WEB |
| **Signature** | ❌ Often Fails | ✅ Auto-Decipher Engine |
| **Performance** | 🐌 Slow | ⚡ Optimized & Fast |
| **Maintenance** | ❌ Deprecated | ✅ Actively Maintained |
| **Error Recovery** | ❌ Manual Retry | ✅ Smart Auto-Retry Logic |

</div>

---


🌟 About

ytdl-pro is a powerful, modern YouTube video downloader package built with the latest YouTube API integration. This is a completely rewritten and enhanced version that actually WORKS - unlike the abandoned ytdl-core package!

✨ Why ytdl-pro?

The original ytdl-core package was abandoned 2-3 years ago and stopped working. I've completely rebuilt it with modern technology:

<div align="left">    
<details>
<summary><kbd>🚀 Enhanced Features</kbd></summary>

· 🔥 Modern YouTube InnerTube API
· ⚡ Multi-client support (ANDROID, IOS, WEB)
· 🎯 Support for 1080p, 1440p, 4K video downloads
· 🎵 High-quality audio-only downloads
· 🚀 Lightning-fast performance
· 💪 Actively maintained and updated
· 🔒 Signature deciphering (when needed)
· 📊 Progress tracking with real-time events
· 🏗️ Smart caching for reduced API calls

</details>

---
---

📦 Installation

<details>
<summary><kbd>📥 Installation Methods</kbd></summary>

### Basic Installation
```bash
npm install ytdl-pro
```

Development Installation

```bash
git clone https://github.com/Lucifer05321/ytdl-pro.git
cd ytdl-pro
npm install
```

Global Installation

```bash
npm install -g ytdl-pro
```

Verify Installation

```javascript
const ytdl = require('ytdl-pro');
console.log('✅ ytdl-pro installed successfully!');
```

</details>

---

🚀 Quick Start

<details>
<summary><kbd>🎯 Basic Usage Examples</kbd></summary>

Download Video Information

```javascript
const ytdl = require('ytdl-pro');

const info = await ytdl.getInfo('https://www.youtube.com/watch?v=VIDEO_ID');

console.log('📹 Title:', info.videoDetails.title);
console.log('👤 Author:', info.videoDetails.author.name);
console.log('👀 Views:', info.videoDetails.viewCount);
console.log('📊 Available formats:', info.formats.length);
```

Download Highest Quality Video

```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');

// Download highest quality
ytdl('https://www.youtube.com/watch?v=VIDEO_ID', { quality: 'highest' })
  .pipe(fs.createWriteStream('video.mp4'));
```

Download 1080p Video

```javascript
const info = await ytdl.getInfo(videoUrl);
const format1080p = info.formats.find(f => f.qualityLabel === '1080p');

ytdl(videoUrl, { quality: format1080p.itag })
  .pipe(fs.createWriteStream('video_1080p.mp4'));
```

Download Audio Only

```javascript
const info = await ytdl.getInfo(videoUrl);
const audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

ytdl(videoUrl, { quality: audioFormat.itag })
  .pipe(fs.createWriteStream('audio.' + audioFormat.container));
```

</details>

---

🎯 Features

<details>
<summary><kbd>🚀 Enhanced Features</kbd></summary>
<li>✅ <strong>Modern YouTube InnerTube API</strong></li>
<li>✅ <strong>Multi-client support</strong> (ANDROID, IOS, WEB)</li>
<li>✅ <strong>Support for 1080p, 1440p, 4K video downloads</strong></li>
<li>✅ <strong>High-quality audio-only downloads</strong></li>
<li>✅ <strong>Lightning-fast performance</strong></li>
<li>✅ <strong>Actively maintained and updated</strong></li>
<li>✅ <strong>Signature deciphering</strong> (when needed)</li>
<li>✅ <strong>Progress tracking</strong> with real-time events</li>
<li>✅ <strong>Smart caching</strong> for reduced API calls</li>
</details>

<details>
<summary><kbd>✅ What Works Perfectly</kbd></summary>
<li><strong>🎥 Video Quality Support</strong></li>
<ul style="list-style: none; padding-left: 20px;">
<li>✅ <strong>4K (2160p)</strong> — Ultra HD</li>
<li>✅ <strong>1440p (2K)</strong> — Quad HD</li>
<li>✅ <strong>1080p</strong> — Full HD</li>
<li>✅ <strong>720p</strong> — HD Ready</li>
<li>✅ <strong>480p</strong> — Standard Definition</li>
<li>✅ <strong>360p</strong> — Medium Quality</li>
<li>✅ <strong>240p</strong> — Low Quality</li>
<li>✅ <strong>144p</strong> — Minimum Quality</li>
</ul>

<li><strong>🎧 Audio Quality Support</strong></li>
<ul style="list-style: none; padding-left: 20px;">
<li>✅ <strong>160kbps</strong> — High Quality</li>
<li>✅ <strong>128kbps</strong> — Standard Quality</li>
<li>✅ <strong>70kbps</strong> — Medium Quality</li>
<li>✅ <strong>50kbps</strong> — Low Quality</li>
</ul>

<li><strong>💾 Format Types</strong></li>
<ul style="list-style: none; padding-left: 20px;">
<li>✅ <strong>Video-only formats</strong> (for custom merging)</li>
<li>✅ <strong>Audio-only formats</strong> (music extraction)</li>
<li>✅ <strong>Combined formats</strong> (video + audio)</li>
<li>✅ <strong>Adaptive formats</strong> (separate streams)</li>
</ul>

</details>

<details>
<summary><kbd>🔥 Advanced Capabilities</kbd></summary>

Multi-Client Architecture

ANDROID Client:

· Version: 19.51.37
· Fast response times
· No signature needed for most videos

IOS Client:

· Version: 19.51.5
· Good compatibility
· Alternative when ANDROID fails

WEB Client:

· Version: 2.20250102.01.00
· Full browser simulation
· Used for signature deciphering

Smart Format Selection

```javascript
// Auto-select best format
const bestFormat = ytdl.chooseFormat(info.formats, { 
  quality: 'highest', 
  filter: 'audioandvideo' 
});

// Filter specific formats
const videoOnly = ytdl.filterFormats(info.formats, 'videoonly');
const audioOnly = ytdl.filterFormats(info.formats, 'audioonly');
```

Progress Tracking

```javascript
const stream = ytdl(videoUrl, { quality: 'highest' });

stream.on('progress', (chunkLength, downloaded, total) => {
  const percent = (downloaded / total * 100).toFixed(2);
  console.log(`Downloaded: ${percent}%`);
});
```

</details>

---

📚 API Reference 

<details>
<summary><kbd>🔧 Core Methods</kbd></summary>

ytdl(url, [options])

Downloads a video from YouTube.

Parameters:

· url (string): YouTube video URL
· options (object): Optional
  · quality: Format quality ('highest', 'lowest', or specific itag)
  · filter: Format filter ('audioonly', 'videoonly', 'audioandvideo')

Returns: ReadableStream

ytdl.getInfo(url, [options])

Gets video information and available formats.

Returns: Promise<VideoInfo>

ytdl.chooseFormat(formats, options)

Chooses the best format based on options.

Parameters:

· formats: Array of available formats
· options: Selection criteria
  · quality: 'highest', 'lowest', 'highestvideo', 'highestaudio'

Returns: Format object

ytdl.filterFormats(formats, filter)

Filters formats by type.

Parameters:

· formats: Array of formats
· filter: 'audioonly', 'videoonly', 'audioandvideo'

Returns: Filtered array

ytdl.validateURL(url)

Validates if URL is a valid YouTube URL.

Returns: Boolean

ytdl.getVideoID(url)

Extracts video ID from YouTube URL.

Returns: String (video ID)

</details>

---

💡 Examples

<details>
<summary><kbd>🎬 Complete Usage Examples</kbd></summary>

Basic Video Download

```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');
const path = require('path');

async function downloadVideo() {
  try {
    const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
    
    // Get video info
    const info = await ytdl.getInfo(videoUrl);
    console.log(`📹 Downloading: ${info.videoDetails.title}`);
    
    // Download highest quality
    const outputPath = path.join(__dirname, 'downloads', `${info.videoDetails.title}.mp4`);
    
    ytdl(videoUrl, { quality: 'highest' })
      .pipe(fs.createWriteStream(outputPath))
      .on('finish', () => {
        console.log('✅ Download completed!');
      });
      
  } catch (error) {
    console.error('❌ Download failed:', error);
  }
}

downloadVideo();
```

Audio Extraction

```javascript
async function extractAudio() {
  const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
  
  const info = await ytdl.getInfo(videoUrl);
  const audioFormat = ytdl.chooseFormat(info.formats, { 
    quality: 'highestaudio' 
  });
  
  console.log(`🎵 Extracting audio: ${info.videoDetails.title}`);
  console.log(`📊 Audio format: ${audioFormat.audioBitrate}kbps`);
  
  ytdl(videoUrl, { quality: audioFormat.itag })
    .pipe(fs.createWriteStream('audio.mp3'));
}
```

Batch Download with Progress

```javascript
async function downloadWithProgress(videoUrl) {
  const info = await ytdl.getInfo(videoUrl);
  const stream = ytdl(videoUrl, { quality: 'highest' });
  
  let downloaded = 0;
  const total = Number(info.videoDetails.lengthSeconds);
  
  stream.on('progress', (chunkLength, downloaded, total) => {
    const percent = (downloaded / total * 100).toFixed(2);
    const mbDownloaded = (downloaded / 1024 / 1024).toFixed(2);
    const mbTotal = (total / 1024 / 1024).toFixed(2);
    
    console.log(`⬇️ ${percent}% - ${mbDownloaded}MB / ${mbTotal}MB`);
  });
  
  stream.pipe(fs.createWriteStream('video.mp4'));
}
```

Format Selection Demo

```javascript
async function showFormats(videoUrl) {
  const info = await ytdl.getInfo(videoUrl);
  
  console.log('\n🎯 Available Formats:');
  console.log('====================');
  
  // Video formats
  const videoFormats = ytdl.filterFormats(info.formats, 'videoonly');
  console.log('\n📹 Video-only formats:');
  videoFormats.forEach(f => {
    console.log(`  ${f.qualityLabel} - ${f.container} - ${f.itag}`);
  });
  
  // Audio formats  
  const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
  console.log('\n🎵 Audio-only formats:');
  audioFormats.forEach(f => {
    console.log(`  ${f.audioBitrate}kbps - ${f.container} - ${f.itag}`);
  });
  
  // Combined formats
  const combinedFormats = info.formats.filter(f => f.hasVideo && f.hasAudio);
  console.log('\n🎬 Combined formats:');
  combinedFormats.forEach(f => {
    console.log(`  ${f.qualityLabel} - ${f.container} - ${f.itag}`);
  });
}
```

</details>

---

🏗️ Technical Architecture

<details>
<summary><kbd>🔧 Internal Structure</kbd></summary>

Package Structure

```
ytdl-pro/
├── lib/
│   ├── index.js           # Main entry point
│   ├── modern-client.js   # YouTube API clients
│   ├── modern-sig.js      # Signature decoder
│   ├── info-modern.js     # Info extraction
│   ├── format-utils.js    # Format utilities
│   └── cache.js          # Smart caching system
├── examples/
│   ├── basic-download.js
│   ├── audio-extract.js
│   └── progress-track.js
└── package.json
```

Client Fallback System

```javascript
// Automatic fallback mechanism
const clients = ['ANDROID', 'IOS', 'WEB'];

for (const client of clients) {
  try {
    const info = await getInfoWithClient(videoUrl, client);
    return info; // Success - return immediately
  } catch (error) {
    console.log(`Client ${client} failed, trying next...`);
    continue; // Try next client
  }
}
```

Signature Deciphering

```javascript
// Automatic signature handling
if (format.signatureCipher) {
  const decipher = await getSignatureDecipher();
  const decodedURL = decipher.decode(format.signatureCipher);
  format.url = decodedURL;
}
```

</details>

---

📊 Performance Metrics

<details>
<summary><kbd>⚡ Speed & Efficiency</kbd></summary>

Response Times

· Info Fetch: ~500-1000ms
· Format Analysis: ~100-200ms
· Download Speed: Depends on connection
· Client Switch: ~200ms per fallback

Resource Usage

· Memory: ~50-100MB during download
· CPU: Minimal during streaming
· Network: Optimized chunk downloading

Format Statistics

· Average Formats per Video: 20-30
· Video Qualities: 8 different levels
· Audio Qualities: 4 different bitrates
· Container Support: MP4, WEBM, 3GP

</details>

---

🐛 Troubleshooting

<details>
<summary><kbd>🔧 Common Issues & Solutions</kbd></summary>

403 Error During Download

YouTube URLs expire after some time. Always get fresh info:

```javascript
// ✅ Good - Fresh URL every time
const info = await ytdl.getInfo(videoUrl);
ytdl(videoUrl, { format: info.formats[0] })
  .pipe(fs.createWriteStream('video.mp4'));

// ❌ Bad - Using cached/stale info
// May cause 403 errors
```

No Formats Available

Some videos may be region-locked or age-restricted:

```javascript
try {
  const info = await ytdl.getInfo(videoUrl);
  if (info.formats.length === 0) {
    console.log('❌ No formats available - video may be restricted');
  }
} catch (error) {
  console.log('🔒 Video is restricted:', error.message);
}
```

Slow Downloads

Optimize download settings:

```javascript
// Use specific quality instead of 'highest'
const format = ytdl.chooseFormat(info.formats, {
  quality: '720p', // Specific quality
  filter: 'audioandvideo' // Combined format
});
```

Memory Issues

Use streaming for large files:

```javascript
const stream = ytdl(videoUrl, { quality: '720p' });
stream.pipe(fs.createWriteStream('video.mp4'));

// Handle memory properly
stream.on('end', () => {
  console.log('✅ Stream finished');
});
```

</details>

---

🆘 Support

<details>
<summary><kbd>📞 Get Help & Support</kbd></summary>

Community Support

Discord Community:

· 🏠 Server: Join Discord
· 💬 Channels: #ytdl-pro-help, #bug-reports
· 👨‍💻 Developers: Active community support

Response Times:

· Discord Support: 1-6 hours
· GitHub Issues: 12-24 hours
· Critical Bugs: Priority handling

Before Asking for Help

1. Check this README thoroughly
2. Test with the example code
3. Check if video is publicly accessible
4. Provide error logs and video URL

Bug Reports

When reporting bugs, include:

```javascript
// Your code snippet
const ytdl = require('ytdl-pro');
// The video URL (if not private)
// Complete error message
// Node.js version
```

Common Questions

Q: Does it work with age-restricted videos?
A:Limited support, depends on YouTube restrictions

Q: Can I download playlists?
A:Currently focused on single videos

Q: Is it legal to use?
A:Check your local laws and YouTube Terms of Service

</details>
---

<div align="center">

## ☕ Support This Project

If you find **ytdl-pro** helpful and want to support its continued development:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/)

Your support helps maintain and improve this project.  

</div>

---

<div align="center">

📄 License & Disclaimer

License: MIT License - See LICENSE file for complete details.

Disclaimer: This tool is developed for educational and personal use purposes only. Users are solely responsible for complying with YouTube's Terms of Service and applicable laws. The developers are not responsible for any misuse or damages caused by this software.

⚠️ Important Notes

· 🔒 Respect YouTube's terms of service
· 🚀 Use responsibly and avoid excessive API calls
· 📱 Supports multiple platforms and environments
· 🔄 Keep updated to latest version for bug fixes
· 📊 Monitor usage to avoid hitting API limits

🎯 Recommended Usage

· Personal video backups
· Educational content
· Developer testing
· Non-commercial applications

<br>
<br>

<div align="center">

## ♤ Made with ♡ by [Lucifer05321](https://github.com/Lucifer05321)

[![Website Lucifer Domains](https://img.shields.io/badge/Website-Lucifer_Domains-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://lucifer-nukers.netlify.app/)
[![Discord Community](https://img.shields.io/badge/Discord-Community_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/uaSvNgGCWp)
[![Instagram Developer](https://img.shields.io/badge/Instagram-Developer_Profile-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](#)
[![GitHub Source Code](https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lucifer05321)

</div>

---

<div align="center">

## ⭐ If you find this project helpful, please give it a star on GitHub!


[![★ Star this repo](https://img.shields.io/badge/★_Star_this_repo-8B0000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lucifer05321/ytdl-pro/stargazers)


</div>

## ☆ Repository Star Growth

[![Star History Chart](https://api.star-history.com/svg?repos=Lucifer05321/ytdl-pro&type=Date)](https://star-history.com/#Lucifer05321/ytdl-pro&Date)

</div>

---

ytdl-pro - Because downloads should just work! 🚀

Completely rewritten from scratch to actually WORK in November 2025!
