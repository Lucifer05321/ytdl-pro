<div align="center">

# 🍪 Cookie Authentication Guide

<img src="https://readme-typing-svg.demolab.com?font=Inconsolata&weight=500&size=40&duration=4000&pause=300&color=FFA500&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=1000&height=100&lines=Unlock+DASH+Formats;4K+%26+High-Quality+Downloads" width="100%" />

</div>

<br>

<div align="center">

<img src="https://img.shields.io/badge/DASH_Formats-Unlocked-success?style=for-the-badge&logo=youtube" />
<img src="https://img.shields.io/badge/4K_Support-Enabled-blue?style=for-the-badge&logo=4k" />
<img src="https://img.shields.io/badge/High_Quality_Audio-160kbps-purple?style=for-the-badge&logo=music" />
<img src="https://img.shields.io/badge/Cookie_Auth-Required-orange?style=for-the-badge&logo=cookie" />

</div>

<br>

<div align="center">

### ☆ Quick Navigation

[![🎯 Why Cookies](https://img.shields.io/badge/🎯_Why_Cookies-4285F4?style=for-the-badge)](#why-cookies-are-needed)
[![📥 Get Cookies](https://img.shields.io/badge/📥_Get_Cookies-FF6B6B?style=for-the-badge)](#how-to-get-cookies)
[![📋 Cookie Formats](https://img.shields.io/badge/📋_Cookie_Formats-34A853?style=for-the-badge)](#cookie-formats-supported)
[![💡 Examples](https://img.shields.io/badge/💡_Examples-FFA500?style=for-the-badge)](#complete-examples)
[![🔧 Troubleshooting](https://img.shields.io/badge/🔧_Troubleshooting-E4405F?style=for-the-badge)](#troubleshooting)

</div>

<br>

---

## Why Cookies Are Needed

<div align="center">

YouTube restricts access to **DASH (Dynamic Adaptive Streaming over HTTP)** formats without authentication. These include the highest quality streams that serious users need.

</div>

<br>

<details>
<summary><kbd>🎬 What Are DASH Formats?</kbd></summary>

<br>

DASH formats are YouTube's high-quality adaptive streaming formats that separate video and audio:

### Video-Only DASH Formats

| Quality | Resolution | Typical Use |
|---------|-----------|-------------|
| **4K** | 3840x2160 | Ultra HD content |
| **1440p** | 2560x1440 | Quad HD / 2K |
| **1080p** | 1920x1080 | Full HD |
| **720p** | 1280x720 | HD Ready |

### Audio-Only DASH Formats

| Quality | Bitrate | Description |
|---------|---------|-------------|
| **High** | 160kbps | Premium audio |
| **Medium** | 128kbps | Standard quality |
| **Low** | 70kbps | Basic quality |

### Why Separate Streams?

- 🎯 Better quality control
- ⚡ Adaptive bitrate streaming
- 📱 Bandwidth optimization
- 🎵 High-quality audio extraction

</details>

<br>

<div align="center">

### ⚠️ Without Cookies

```
❌ 403 Forbidden Error
❌ Cannot access 4K/1440p/1080p
❌ Limited audio quality
```

### ✅ With Cookies

```
✅ Full access to all DASH formats
✅ 4K, 1440p, 1080p video downloads
✅ High-quality audio (160kbps)
```

</div>

---

## How to Get Cookies

<div align="center">

Choose the method that works best for you!

</div>

<br>

### Method 1: Browser Extension ⭐ (Recommended)

<div align="left">

**Easiest and fastest method for most users.**

</div>

<details>
<summary><kbd>📋 Step-by-Step Instructions</kbd></summary>

<br>

#### Step 1: Install Extension

Install **"Get cookies.txt LOCALLY"** extension:

| Browser | Download Link |
|---------|---------------|
| 🌐 Chrome / Edge | [Chrome Web Store](https://chrome.google.com/webstore) |
| 🦊 Firefox | [Firefox Add-ons](https://addons.mozilla.org/) |
| 🌍 Opera | Opera Add-ons Store |
| 🔰 Brave | Chrome Web Store Compatible |

#### Step 2: Login to YouTube

1. Go to [youtube.com](https://www.youtube.com)
2. **Log in** with your Google account
3. Make sure you're fully logged in

#### Step 3: Export Cookies

1. Click the extension icon in your browser toolbar
2. Select **"Export"** or **"Copy to Clipboard"**
3. Choose format:
   - **"Header String"** (Recommended) - Ready to use
   - **"Netscape"** - Classic format, also supported

#### Step 4: Use in Code

```javascript
const ytdl = require('ytdl-pro');

// Paste the exported cookies here
const cookies = 'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx; ...';

ytdl(videoUrl, { 
  quality: 'highestvideo',
  cookies: cookies 
}).pipe(fs.createWriteStream('video_4k.mp4'));
```

</details>

---

### Method 2: Browser DevTools 🔧 (Manual)

<div align="left">

**For advanced users who want manual control.**

</div>

<details>
<summary><kbd>📋 Step-by-Step Instructions</kbd></summary>

<br>

#### Step 1: Open DevTools

1. Open [youtube.com](https://www.youtube.com) (logged in)
2. Press **`F12`** (or `Ctrl+Shift+I` / `Cmd+Option+I`)
3. This opens Developer Tools

#### Step 2: Navigate to Cookies

**Chrome / Edge:**
- Click **"Application"** tab
- Expand **"Cookies"** in left sidebar
- Click on `https://www.youtube.com`

**Firefox:**
- Click **"Storage"** tab
- Expand **"Cookies"**
- Click on `https://www.youtube.com`

#### Step 3: Find Important Cookies

Look for and copy these cookies:

| Cookie Name | Purpose | Priority |
|-------------|---------|----------|
| `VISITOR_INFO1_LIVE` | Visitor tracking | 🔴 Required |
| `CONSENT` | Cookie consent | 🔴 Required |
| `SID` | Session ID | 🔴 Required |
| `HSID` | Secure session | 🟡 Important |
| `SSID` | Secure session | 🟡 Important |
| `APISID` | API auth | 🟡 Important |
| `SAPISID` | Secure API auth | 🟡 Important |
| `__Secure-1PSID` | Secure session | 🟢 Optional |
| `__Secure-3PSID` | Secure session | 🟢 Optional |

#### Step 4: Format Cookies

Combine them in this format:

```
name1=value1; name2=value2; name3=value3
```

**Example:**

```javascript
const cookies = 'VISITOR_INFO1_LIVE=abcd1234; CONSENT=YES+1; SID=xyz789; HSID=abc123; SSID=def456';
```

</details>

---

### Method 3: Cookie Manager Extension 📦 (Advanced)

<div align="left">

**For power users managing multiple accounts.**

</div>

<details>
<summary><kbd>📋 Step-by-Step Instructions</kbd></summary>

<br>

#### Step 1: Install Cookie Manager

Popular extensions:
- **EditThisCookie** (Chrome/Edge)
- **Cookie-Editor** (Firefox)
- **Cookie Manager** (Multiple browsers)

#### Step 2: Export All Cookies

1. Go to [youtube.com](https://www.youtube.com) (logged in)
2. Click cookie manager extension
3. Select **"Export"** → **"Netscape Format"**
4. Save as `cookies.txt`

#### Step 3: Use in Code

```javascript
const fs = require('fs');
const ytdl = require('ytdl-pro');

// Read Netscape format cookies
const netscapeCookies = fs.readFileSync('cookies.txt', 'utf8');

// ytdl-pro automatically parses Netscape format
ytdl(videoUrl, {
  quality: 'highestvideo',
  cookies: netscapeCookies
}).pipe(fs.createWriteStream('video_4k.mp4'));
```

#### Netscape Format Example

```
# Netscape HTTP Cookie File
.youtube.com    TRUE    /       TRUE    1234567890      VISITOR_INFO1_LIVE      abcd1234
.youtube.com    TRUE    /       FALSE   1234567890      CONSENT                 YES+1
.youtube.com    TRUE    /       TRUE    1234567890      SID                     xyz789
```

</details>

---

## Cookie Formats Supported

<div align="center">

ytdl-pro accepts cookies in **4 different formats** for maximum flexibility!

</div>

<br>

### Format 1: Cookie Header String ⭐

<div align="left">

**Most common and easiest to use.**

</div>

```javascript
const ytdl = require('ytdl-pro');

const cookies = 'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx; HSID=xxx';

ytdl(videoUrl, { cookies });
```

---

### Format 2: Cookie Object 📦

<div align="left">

**JavaScript object format.**

</div>

```javascript
const cookies = {
  'VISITOR_INFO1_LIVE': 'xxx',
  'CONSENT': 'YES+1',
  'SID': 'xxx',
  'HSID': 'xxx',
  'SSID': 'xxx',
  'APISID': 'xxx',
  'SAPISID': 'xxx'
};

ytdl(videoUrl, { cookies });
```

---

### Format 3: Cookie Array 📋

<div align="left">

**Array of cookie objects.**

</div>

```javascript
const cookies = [
  { name: 'VISITOR_INFO1_LIVE', value: 'xxx' },
  { name: 'CONSENT', value: 'YES+1' },
  { name: 'SID', value: 'xxx' },
  { name: 'HSID', value: 'xxx' }
];

ytdl(videoUrl, { cookies });
```

---

### Format 4: Netscape Format 📄

<div align="left">

**Browser cookie export format.**

</div>

```javascript
const fs = require('fs');

// Read from exported cookie file
const netscapeCookies = fs.readFileSync('cookies.txt', 'utf8');

ytdl(videoUrl, { cookies: netscapeCookies });
```

---

## Complete Examples

### Example 1: Download 4K Video

<details>
<summary><kbd>🎬 View Code</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');

async function download4K() {
  const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
  
  // Your YouTube cookies
  const cookies = 'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx; HSID=xxx';
  
  // Get video info
  const info = await ytdl.getInfo(videoUrl, { cookies });
  
  console.log('📹 Title:', info.videoDetails.title);
  
  // Find 4K format
  const format4k = info.formats.find(f => f.qualityLabel === '2160p');
  
  if (format4k) {
    console.log('✅ 4K format found! Downloading...');
    
    ytdl(videoUrl, { 
      quality: format4k.itag,
      cookies: cookies 
    })
    .pipe(fs.createWriteStream('video_4k.mp4'))
    .on('finish', () => console.log('✅ 4K download complete!'));
  } else {
    console.log('❌ 4K format not available for this video');
  }
}

download4K();
```

</details>

---

### Example 2: Download Best Available Quality

<details>
<summary><kbd>🎬 View Code</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');

async function downloadBest() {
  const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
  const cookies = 'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx';
  
  // Get all video-only formats
  const info = await ytdl.getInfo(videoUrl, { cookies });
  const videoFormats = ytdl.filterFormats(info.formats, 'videoonly');
  
  // Sort by quality (highest first)
  videoFormats.sort((a, b) => b.bitrate - a.bitrate);
  
  const bestFormat = videoFormats[0];
  
  console.log('🎯 Best format:', bestFormat.qualityLabel);
  console.log('📊 Container:', bestFormat.container);
  console.log('💾 Size:', (bestFormat.contentLength / 1024 / 1024).toFixed(2), 'MB');
  
  ytdl(videoUrl, { 
    quality: bestFormat.itag,
    cookies: cookies 
  })
  .pipe(fs.createWriteStream(`video_${bestFormat.qualityLabel}.${bestFormat.container}`))
  .on('finish', () => console.log('✅ Download complete!'));
}

downloadBest();
```

</details>

---

### Example 3: Extract High-Quality Audio

<details>
<summary><kbd>🎵 View Code</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');

async function extractAudio() {
  const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
  const cookies = 'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx';
  
  const info = await ytdl.getInfo(videoUrl, { cookies });
  
  // Get highest quality audio
  const audioFormat = ytdl.chooseFormat(info.formats, { 
    quality: 'highestaudio',
    filter: 'audioonly'
  });
  
  console.log('🎵 Audio bitrate:', audioFormat.audioBitrate, 'kbps');
  console.log('📦 Container:', audioFormat.container);
  
  ytdl(videoUrl, { 
    quality: audioFormat.itag,
    cookies: cookies 
  })
  .pipe(fs.createWriteStream(`audio.${audioFormat.container}`))
  .on('finish', () => console.log('✅ Audio extracted!'));
}

extractAudio();
```

</details>

---

### Example 4: Download with Progress Tracking

<details>
<summary><kbd>📊 View Code</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');

async function downloadWithProgress() {
  const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
  const cookies = 'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx';
  
  const stream = ytdl(videoUrl, { 
    quality: 'highestvideo',
    cookies: cookies 
  });
  
  stream.on('info', (info, format) => {
    console.log('📹 Title:', info.videoDetails.title);
    console.log('📊 Quality:', format.qualityLabel);
    console.log('💾 Size:', (format.contentLength / 1024 / 1024).toFixed(2), 'MB');
    console.log('\n⬇️ Starting download...\n');
  });
  
  stream.on('progress', (chunkLength, downloaded, total) => {
    const percent = (downloaded / total * 100).toFixed(2);
    const mbDownloaded = (downloaded / 1024 / 1024).toFixed(2);
    const mbTotal = (total / 1024 / 1024).toFixed(2);
    
    process.stdout.write(`\r📥 Progress: ${percent}% | ${mbDownloaded}MB / ${mbTotal}MB`);
  });
  
  stream.pipe(fs.createWriteStream('video.mp4'));
  
  stream.on('end', () => {
    console.log('\n\n✅ Download completed successfully!');
  });
  
  stream.on('error', (err) => {
    console.error('\n❌ Error:', err.message);
  });
}

downloadWithProgress();
```

</details>

---

### Example 5: Download Multiple Videos

<details>
<summary><kbd>📦 View Code</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');

async function downloadMultiple() {
  const videos = [
    'https://www.youtube.com/watch?v=VIDEO_ID_1',
    'https://www.youtube.com/watch?v=VIDEO_ID_2',
    'https://www.youtube.com/watch?v=VIDEO_ID_3'
  ];
  
  const cookies = 'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx';
  
  for (const [index, videoUrl] of videos.entries()) {
    try {
      console.log(`\n[${index + 1}/${videos.length}] Processing: ${videoUrl}`);
      
      const info = await ytdl.getInfo(videoUrl, { cookies });
      const filename = `${info.videoDetails.title.replace(/[^a-z0-9]/gi, '_')}.mp4`;
      
      console.log(`📹 Downloading: ${info.videoDetails.title}`);
      
      await new Promise((resolve, reject) => {
        ytdl(videoUrl, { quality: 'highest', cookies })
          .pipe(fs.createWriteStream(filename))
          .on('finish', () => {
            console.log(`✅ Downloaded: ${filename}`);
            resolve();
          })
          .on('error', reject);
      });
      
    } catch (err) {
      console.error(`❌ Failed: ${err.message}`);
    }
  }
  
  console.log('\n🎉 All downloads completed!');
}

downloadMultiple();
```

</details>

---

## Troubleshooting

<div align="center">

Common issues and solutions

</div>

<br>

### Problem 1: Still Getting 403 Error

<details>
<summary><kbd>🔍 Solutions</kbd></summary>

<br>

**Possible Causes:**

1. **Cookies are expired or invalid**
   - Solution: Re-export fresh cookies from your browser
   - Cookies typically expire after 1-2 weeks

2. **Missing required cookies**
   - Solution: Make sure you have at minimum:
     - `VISITOR_INFO1_LIVE`
     - `CONSENT`
     - `SID`
     - `HSID` or `SSID`

3. **Cookie format error**
   - Solution: Check cookie string format
   - Ensure proper `name=value; name2=value2` format
   - No extra spaces or line breaks

**Test Your Cookies:**

```javascript
const ytdl = require('ytdl-pro');

async function testCookies() {
  const cookies = 'YOUR_COOKIES_HERE';
  
  try {
    const info = await ytdl.getInfo(videoUrl, { cookies });
    const dashFormats = info.formats.filter(f => f.qualityLabel);
    
    if (dashFormats.length > 0) {
      console.log('✅ Cookies are working!');
      console.log('📊 DASH formats available:', dashFormats.length);
    } else {
      console.log('❌ No DASH formats - cookies may be invalid');
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

testCookies();
```

</details>

---

### Problem 2: Cookies Keep Expiring

<details>
<summary><kbd>🔍 Solutions</kbd></summary>

<br>

**Why Cookies Expire:**
- YouTube session timeout (typically 14 days)
- Account security measures
- IP address changes

**Solutions:**

1. **Automated Cookie Refresh** (Advanced)
   ```javascript
   // Store cookies in environment variables
   process.env.YOUTUBE_COOKIES = 'your-cookies-here';
   
   // Use in your code
   const cookies = process.env.YOUTUBE_COOKIES;
   ```

2. **Cookie Rotation**
   - Keep multiple cookie sets from different accounts
   - Rotate between them when one expires

3. **Regular Updates**
   - Set reminder to update cookies weekly
   - Keep browser logged in to YouTube

</details>

---

### Problem 3: Some Videos Still Don't Work

<details>
<summary><kbd>🔍 Solutions</kbd></summary>

<br>

**Possible Reasons:**

1. **Age-Restricted Content**
   - Requires cookies from an account with age verification
   - Some content may still be restricted

2. **Region-Locked Videos**
   - Cookies won't bypass geographic restrictions
   - Use VPN if legally permitted in your region

3. **Private or Unlisted Videos**
   - Requires cookies from account with access
   - Public cookies won't work for private content

4. **Live Streams**
   - Different handling required
   - May have additional restrictions

**Workaround:**

```javascript
const ytdl = require('ytdl-pro');

async function handleRestrictedVideo() {
  try {
    const info = await ytdl.getInfo(videoUrl, { cookies });
    
    // Check if video is available
    if (info.formats.length === 0) {
      console.log('❌ Video unavailable or restricted');
      return;
    }
    
    // Download available formats
    ytdl(videoUrl, { quality: 'highest', cookies })
      .pipe(fs.createWriteStream('video.mp4'));
      
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}
```

</details>

---

### Problem 4: Security Concerns

<details>
<summary><kbd>🔐 Best Practices</kbd></summary>

<br>

**Cookie Security Tips:**

1. **Never Share Cookies Publicly**
   - Cookies give access to your YouTube account
   - Treat them like passwords

2. **Use Environment Variables**
   ```javascript
   // .env file
   YOUTUBE_COOKIES=VISITOR_INFO1_LIVE=xxx; SID=xxx; ...
   
   // In your code
   require('dotenv').config();
   const cookies = process.env.YOUTUBE_COOKIES;
   ```

3. **Dedicated Account**
   - Create a separate Google account for automation
   - Don't use your main personal account

4. **Regular Rotation**
   - Refresh cookies regularly
   - Revoke old sessions from Google Account settings

5. **Local Storage Only**
   - Never commit cookies to Git repositories
   - Add to `.gitignore`:
     ```
     .env
     cookies.txt
     *.cookies
     ```

</details>

---

<br>

<div align="center">

## 📚 Additional Resources

| Resource | Description |
|----------|-------------|
| [Main README](README.md) | Complete package documentation |
| [API Reference](API_REFERENCE.md) | Detailed API documentation |
| [GitHub Issues](https://github.com/Lucifer05321/ytdl-pro/issues) | Report bugs or request features |
| [Discord Community](https://discord.gg/NwqwbyQvZZ) | Get help from community |

</div>

<br>

---

<div align="center">

## ♤ Maintained by Lucifer05321

[![Website](https://img.shields.io/badge/Website-Lucifer_Domains-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://lucifer-nukers.netlify.app/)
[![Discord](https://img.shields.io/badge/Discord-Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/NwqwbyQvZZ)
[![Instagram](https://img.shields.io/badge/Instagram-@mr__lucifer841-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/mr_lucifer841)
[![GitHub](https://img.shields.io/badge/GitHub-Lucifer05321-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lucifer05321)

<br>

### 🎯 Quick Reminder

**Cookie authentication unlocks:**
- ✅ 4K (2160p) video downloads
- ✅ 1440p and 1080p high-quality formats
- ✅ Premium audio quality (160kbps)
- ✅ All DASH format access

**Stay updated** - Follow the repository for latest features and bug fixes!

</div>

<br>

<div align="center">

---

**ytdl-pro Cookie Guide** - Unlock Premium Quality  
Version 1.0.1 | Actively Maintained | MIT License

[⬆ Back to Top](#-cookie-authentication-guide)

---

</div>
