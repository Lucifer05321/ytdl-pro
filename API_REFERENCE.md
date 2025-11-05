<div align="center">

# 📚 ytdl-pro API Reference

<img src="https://readme-typing-svg.demolab.com?font=Inconsolata&weight=500&size=40&duration=4000&pause=300&color=34A853&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=1000&height=100&lines=Complete+API+Documentation;ytdl-pro+Developer+Reference" width="100%" />

</div>

<br>

<div align="center">

<img src="https://img.shields.io/badge/Version-1.0.1-blue?style=for-the-badge&logo=npm" />
<img src="https://img.shields.io/badge/Documentation-Complete-green?style=for-the-badge&logo=readthedocs" />
<img src="https://img.shields.io/badge/TypeScript-Supported-blue?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/Last_Updated-November_2025-orange?style=for-the-badge&logo=calendar" />

</div>

<br>

<div align="center">

### ☆ Quick Navigation

[![🚀 Main Functions](https://img.shields.io/badge/🚀_Main_Functions-4285F4?style=for-the-badge)](#main-functions)
[![🎯 Format Functions](https://img.shields.io/badge/🎯_Format_Functions-FF6B6B?style=for-the-badge)](#format-functions)
[![🔗 URL Utilities](https://img.shields.io/badge/🔗_URL_Utilities-34A853?style=for-the-badge)](#url-utilities)
[![🍪 Cookie Utils](https://img.shields.io/badge/🍪_Cookie_Utils-FFA500?style=for-the-badge)](#cookie-utilities)
[![📊 Data Types](https://img.shields.io/badge/📊_Data_Types-9C27B0?style=for-the-badge)](#data-types)
[![⚡ Events](https://img.shields.io/badge/⚡_Events-E4405F?style=for-the-badge)](#events)

</div>

<br>

---

## Main Functions

### `ytdl(url, options)`

<div align="left">

Downloads a YouTube video and returns a readable stream.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | YouTube video URL or video ID |
| `options` | `Object` | Optional download configuration |

</div>

<details>
<summary><kbd>📋 Options Parameter Details</kbd></summary>

<br>

#### Quality Options

| Option | Type | Description |
|--------|------|-------------|
| `quality` | `string\|number` | Format quality selector |

**Quality Values:**
- `'highest'` - Best available quality (default)
- `'lowest'` - Lowest quality
- `'highestvideo'` - Best video-only format
- `'highestaudio'` - Best audio-only format
- `'lowestvideo'` - Lowest video format
- `'lowestaudio'` - Lowest audio format
- `{number}` - Specific format by itag number

#### Filter Options

| Option | Type | Description |
|--------|------|-------------|
| `filter` | `string\|function` | Format filter |

**Filter Values:**
- `'audioandvideo'` - Combined formats only
- `'videoonly'` - Video-only formats
- `'audioonly'` - Audio-only formats
- `'video'` - All formats with video
- `'audio'` - All formats with audio
- Custom function: `(format) => boolean`

#### Additional Options

| Option | Type | Description |
|--------|------|-------------|
| `format` | `Object` | Specific format object |
| `cookies` | `string\|Object\|Array` | Cookie authentication |
| `range` | `Object` | Byte range `{start, end}` |
| `begin` | `number\|string` | Time to begin (livestreams) |
| `highWaterMark` | `number` | Stream buffer size (default: 512KB) |
| `dlChunkSize` | `number` | Download chunk size (default: 10MB) |
| `requestOptions` | `Object` | Custom HTTP request options |

</details>

**Returns:** `ReadableStream` - Stream of video data

**Events Emitted:**
- `info` - Video info fetched
- `progress` - Download progress
- `response` - HTTP response received
- `error` - Error occurred
- `end` - Download completed

<details>
<summary><kbd>💡 Usage Examples</kbd></summary>

<br>

**Basic Download:**
```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');

ytdl('https://www.youtube.com/watch?v=VIDEO_ID', { quality: 'highest' })
  .pipe(fs.createWriteStream('video.mp4'))
  .on('finish', () => console.log('✅ Download complete!'));
```

**With Progress Tracking:**
```javascript
const stream = ytdl(videoUrl, { quality: 'highest' });

stream.on('progress', (chunkLength, downloaded, total) => {
  const percent = (downloaded / total * 100).toFixed(2);
  console.log(`📥 Progress: ${percent}%`);
});

stream.pipe(fs.createWriteStream('video.mp4'));
```

**Download with Cookies:**
```javascript
ytdl(videoUrl, {
  quality: 'highestvideo',
  cookies: 'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx'
}).pipe(fs.createWriteStream('video_4k.mp4'));
```

**Specific Format Download:**
```javascript
const info = await ytdl.getInfo(videoUrl);
const format = info.formats.find(f => f.qualityLabel === '1080p');

ytdl(videoUrl, { quality: format.itag })
  .pipe(fs.createWriteStream('video_1080p.mp4'));
```

</details>

---

### `ytdl.getInfo(url, options)`

<div align="left">

Fetches complete video information including all available formats.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | YouTube video URL or ID |
| `options` | `Object` | Optional configuration |

**Options:**
- `lang` - Language code (default: 'en')
- `cookies` - Cookie authentication
- `requestOptions` - Custom HTTP options

**Returns:** `Promise<VideoInfo>` - Complete video information

</div>

<details>
<summary><kbd>💡 Usage Example</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');

async function getVideoInfo() {
  const info = await ytdl.getInfo('https://www.youtube.com/watch?v=VIDEO_ID');
  
  console.log('📹 Title:', info.videoDetails.title);
  console.log('👤 Author:', info.videoDetails.author);
  console.log('👀 Views:', info.videoDetails.viewCount);
  console.log('⏱️ Duration:', info.videoDetails.lengthSeconds, 'seconds');
  console.log('📊 Formats:', info.formats.length);
  
  // List all available formats
  info.formats.forEach(format => {
    console.log(`  ${format.qualityLabel || 'audio'} - ${format.container} - ${format.itag}`);
  });
}

getVideoInfo();
```

</details>

---

### `ytdl.getBasicInfo(url, options)`

<div align="left">

Fetches basic video information without format details (faster).

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | YouTube video URL or ID |
| `options` | `Object` | Optional configuration |

**Returns:** `Promise<VideoInfo>` - Basic video information

</div>

<details>
<summary><kbd>💡 Usage Example</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');

async function quickInfo() {
  const basicInfo = await ytdl.getBasicInfo(videoUrl);
  
  console.log('📹 Title:', basicInfo.videoDetails.title);
  console.log('👤 Channel:', basicInfo.videoDetails.author.name);
  console.log('📅 Published:', basicInfo.videoDetails.publishDate);
}

quickInfo();
```

</details>

---

### `ytdl.downloadFromInfo(info, options)`

<div align="left">

Downloads video using pre-fetched video info (avoids re-fetching).

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `info` | `VideoInfo` | Pre-fetched video information |
| `options` | `Object` | Download options |

**Returns:** `ReadableStream` - Stream of video data

</div>

<details>
<summary><kbd>💡 Usage Example</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');
const fs = require('fs');

async function downloadFromCachedInfo() {
  // Fetch info once
  const info = await ytdl.getInfo(videoUrl);
  
  // Use it multiple times without re-fetching
  ytdl.downloadFromInfo(info, { quality: 'highest' })
    .pipe(fs.createWriteStream('video.mp4'));
}

downloadFromCachedInfo();
```

</details>

---

## Format Functions

### `ytdl.chooseFormat(formats, options)`

<div align="left">

Intelligently selects the best format based on criteria.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formats` | `Array<Format>` | Array of available formats |
| `options` | `Object` | Selection criteria |

**Options:**
- `quality` - Quality preference
- `filter` - Format filter function

**Returns:** `Format` - Selected format object

</div>

<details>
<summary><kbd>💡 Usage Examples</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');

async function chooseFormats() {
  const info = await ytdl.getInfo(videoUrl);
  
  // Highest quality overall
  const best = ytdl.chooseFormat(info.formats, { 
    quality: 'highest' 
  });
  
  // Best video only
  const bestVideo = ytdl.chooseFormat(info.formats, { 
    quality: 'highestvideo',
    filter: 'videoonly' 
  });
  
  // Best audio only
  const bestAudio = ytdl.chooseFormat(info.formats, { 
    quality: 'highestaudio',
    filter: 'audioonly' 
  });
  
  // Custom filter
  const custom = ytdl.chooseFormat(info.formats, {
    filter: format => format.container === 'mp4' && format.hasAudio
  });
  
  console.log('✅ Selected formats:', { best, bestVideo, bestAudio, custom });
}

chooseFormats();
```

</details>

---

### `ytdl.filterFormats(formats, filter)`

<div align="left">

Filters formats based on type.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formats` | `Array<Format>` | Array of formats |
| `filter` | `string\|function` | Filter criteria |

**Filter Types:**
- `'audioonly'` - Audio-only formats
- `'videoonly'` - Video-only formats
- `'audioandvideo'` - Combined formats
- Custom function: `(format) => boolean`

**Returns:** `Array<Format>` - Filtered formats

</div>

<details>
<summary><kbd>💡 Usage Examples</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');

async function filterExamples() {
  const info = await ytdl.getInfo(videoUrl);
  
  // Get all video-only formats
  const videoOnly = ytdl.filterFormats(info.formats, 'videoonly');
  console.log('📹 Video formats:', videoOnly.length);
  
  // Get all audio-only formats
  const audioOnly = ytdl.filterFormats(info.formats, 'audioonly');
  console.log('🎵 Audio formats:', audioOnly.length);
  
  // Get combined formats
  const combined = ytdl.filterFormats(info.formats, 'audioandvideo');
  console.log('🎬 Combined formats:', combined.length);
  
  // Custom filter: MP4 only
  const mp4Only = ytdl.filterFormats(info.formats, 
    format => format.container === 'mp4'
  );
  console.log('📦 MP4 formats:', mp4Only.length);
}

filterExamples();
```

</details>

---

## URL Utilities

### `ytdl.validateURL(url)`

<div align="left">

Validates if a URL is a valid YouTube URL.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | URL to validate |

**Returns:** `boolean` - true if valid YouTube URL

</div>

<details>
<summary><kbd>💡 Usage Example</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');

const urls = [
  'https://www.youtube.com/watch?v=VIDEO_ID',
  'https://youtu.be/VIDEO_ID',
  'https://m.youtube.com/watch?v=VIDEO_ID',
  'invalid-url'
];

urls.forEach(url => {
  const isValid = ytdl.validateURL(url);
  console.log(`${isValid ? '✅' : '❌'} ${url}`);
});
```

</details>

---

### `ytdl.validateID(id)`

<div align="left">

Validates if a string is a valid YouTube video ID.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `string` | Video ID to validate |

**Returns:** `boolean` - true if valid video ID

</div>

<details>
<summary><kbd>💡 Usage Example</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');

const ids = ['dQw4w9WgXcQ', 'invalid123', 'short'];

ids.forEach(id => {
  const isValid = ytdl.validateID(id);
  console.log(`${isValid ? '✅' : '❌'} ${id}`);
});
```

</details>

---

### `ytdl.getVideoID(url)`

<div align="left">

Extracts video ID from YouTube URL or returns the ID if already valid.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | YouTube URL or video ID |

**Returns:** `string` - Video ID

**Throws:** Error if invalid URL/ID

</div>

<details>
<summary><kbd>💡 Usage Example</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');

const inputs = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://youtu.be/dQw4w9WgXcQ',
  'dQw4w9WgXcQ'
];

inputs.forEach(input => {
  try {
    const id = ytdl.getVideoID(input);
    console.log(`✅ ${input} → ${id}`);
  } catch (err) {
    console.log(`❌ ${input} → Error: ${err.message}`);
  }
});
```

</details>

---

### `ytdl.getURLVideoID(url)`

<div align="left">

Extracts video ID strictly from YouTube URLs (doesn't accept bare IDs).

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | YouTube URL |

**Returns:** `string` - Video ID

**Throws:** Error if not a valid YouTube URL

</div>

---

## Cookie Utilities

### `ytdl.cookie.parseCookies(cookies)`

<div align="left">

Parses cookies from various formats into a standardized format.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookies` | `string\|Object\|Array` | Cookies in any supported format |

**Supported Formats:**
- Cookie header string: `'name1=value1; name2=value2'`
- Object: `{ name1: 'value1', name2: 'value2' }`
- Array: `[{ name: 'name1', value: 'value1' }]`
- Netscape format: Cookie export file format

**Returns:** `Object` - Parsed cookie object

</div>

<details>
<summary><kbd>💡 Usage Examples</kbd></summary>

<br>

```javascript
const ytdl = require('ytdl-pro');

// From header string
const cookies1 = ytdl.cookie.parseCookies(
  'VISITOR_INFO1_LIVE=xxx; CONSENT=YES+1; SID=xxx'
);

// From object
const cookies2 = ytdl.cookie.parseCookies({
  'VISITOR_INFO1_LIVE': 'xxx',
  'CONSENT': 'YES+1',
  'SID': 'xxx'
});

// From array
const cookies3 = ytdl.cookie.parseCookies([
  { name: 'VISITOR_INFO1_LIVE', value: 'xxx' },
  { name: 'CONSENT', value: 'YES+1' }
]);

console.log('✅ Parsed cookies:', cookies1);
```

</details>

---

### `ytdl.cookie.validateCookies(cookieString)`

<div align="left">

Validates if cookies contain necessary YouTube authentication cookies.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookieString` | `string` | Cookie string to validate |

**Returns:** `boolean` - true if valid cookies

</div>

---

### `ytdl.cookie.addCookiesToOptions(options, cookies)`

<div align="left">

Adds cookies to ytdl options object.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | `Object` | ytdl options object |
| `cookies` | `string\|Object\|Array` | Cookies to add |

**Returns:** `Object` - Modified options with cookies

</div>

---

### `ytdl.cookie.getCookieInstructions()`

<div align="left">

Returns instructions for obtaining YouTube cookies.

**Returns:** `string` - Cookie retrieval instructions

</div>

---

## Data Types

### VideoInfo

<div align="left">

Complete video information object returned by `getInfo()`.

</div>

<details>
<summary><kbd>📋 VideoInfo Structure</kbd></summary>

<br>

```typescript
interface VideoInfo {
  videoDetails: {
    videoId: string;
    title: string;
    lengthSeconds: string;
    keywords: string[];
    channelId: string;
    shortDescription: string;
    thumbnail: {
      thumbnails: Thumbnail[];
    };
    viewCount: string;
    author: {
      id: string;
      name: string;
      avatar: string;
      verified: boolean;
      channel_url: string;
    };
    isPrivate: boolean;
    isLiveContent: boolean;
  };
  
  formats: Format[];
  
  related_videos: RelatedVideo[];
}
```

</details>

---

### Format

<div align="left">

Video/audio format information.

</div>

<details>
<summary><kbd>📋 Format Structure</kbd></summary>

<br>

```typescript
interface Format {
  itag: number;
  url: string;
  mimeType: string;
  bitrate: number;
  audioBitrate?: number;
  width?: number;
  height?: number;
  fps?: number;
  quality: string;
  qualityLabel?: string;
  container: 'mp4' | 'webm' | '3gp' | 'flv' | 'ts';
  hasVideo: boolean;
  hasAudio: boolean;
  codecs: string;
  videoCodec?: string;
  audioCodec?: string;
  isLive: boolean;
  isHLS: boolean;
  isDashMPD: boolean;
  contentLength: string;
  approxDurationMs?: string;
}
```

</details>

---

### Options

<div align="left">

Download options for ytdl functions.

</div>

<details>
<summary><kbd>📋 Options Structure</kbd></summary>

<br>

```typescript
interface DownloadOptions {
  quality?: string | number;
  filter?: string | ((format: Format) => boolean);
  format?: Format;
  range?: {
    start?: number;
    end?: number;
  };
  begin?: string | number | Date;
  liveBuffer?: number;
  highWaterMark?: number;
  dlChunkSize?: number;
  cookies?: string | Object | Array;
  requestOptions?: {
    headers?: Object;
    agent?: any;
  };
}
```

</details>

---

## Events

### Stream Events

<div align="left">

Events emitted by the download stream.

</div>

<details>
<summary><kbd>📋 Event Reference</kbd></summary>

<br>

#### `info` Event

Emitted when video information is retrieved.

```javascript
stream.on('info', (info, format) => {
  console.log('📹 Title:', info.videoDetails.title);
  console.log('📊 Format:', format.qualityLabel);
});
```

#### `progress` Event

Emitted during download with progress information.

```javascript
stream.on('progress', (chunkLength, downloaded, total) => {
  const percent = (downloaded / total * 100).toFixed(2);
  const mbDownloaded = (downloaded / 1024 / 1024).toFixed(2);
  const mbTotal = (total / 1024 / 1024).toFixed(2);
  console.log(`📥 ${percent}% - ${mbDownloaded}MB / ${mbTotal}MB`);
});
```

#### `response` Event

Emitted when HTTP response is received.

```javascript
stream.on('response', (response) => {
  console.log('🌐 Status:', response.statusCode);
  console.log('📦 Content-Length:', response.headers['content-length']);
});
```

#### `error` Event

Emitted when an error occurs.

```javascript
stream.on('error', (error) => {
  console.error('❌ Error:', error.message);
});
```

#### `end` Event

Emitted when download completes.

```javascript
stream.on('end', () => {
  console.log('✅ Download finished!');
});
```

</details>

---

## Error Handling

<div align="left">

Common errors and how to handle them.

</div>

<details>
<summary><kbd>⚠️ Common Errors</kbd></summary>

<br>

### 403 Forbidden Error

**Cause:** Trying to download DASH formats without cookies.

**Solution:** Add YouTube cookies to your request.

```javascript
ytdl(videoUrl, {
  quality: 'highestvideo',
  cookies: 'VISITOR_INFO1_LIVE=xxx; SID=xxx; ...'
});
```

### Video Unavailable

**Cause:** Video is private, deleted, or region-locked.

**Solution:** Check video availability first.

```javascript
try {
  const info = await ytdl.getInfo(videoUrl);
  if (info.formats.length === 0) {
    console.log('❌ No formats available');
  }
} catch (err) {
  console.log('❌ Video unavailable:', err.message);
}
```

### Invalid URL

**Cause:** Malformed YouTube URL.

**Solution:** Validate URL before using.

```javascript
if (ytdl.validateURL(url)) {
  const info = await ytdl.getInfo(url);
} else {
  console.log('❌ Invalid YouTube URL');
}
```

### Signature Decipher Error

**Cause:** YouTube changed signature algorithm.

**Solution:** Update ytdl-pro to latest version.

```bash
npm update ytdl-pro
```

</details>

---

<br>

<div align="center">

## ♤ Maintained by Lucifer05321

[![Website](https://img.shields.io/badge/Website-Lucifer_Domains-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://lucifer-nukers.netlify.app/)
[![Discord](https://img.shields.io/badge/Discord-Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/NwqwbyQvZZ)
[![Instagram](https://img.shields.io/badge/Instagram-@mr__lucifer841-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/mr_lucifer841)
[![GitHub](https://img.shields.io/badge/GitHub-Lucifer05321-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lucifer05321)

</div>

<br>

<div align="center">

---

**ytdl-pro** - Professional YouTube Downloader API  
Version 1.0.1 | Actively Maintained | MIT License

[⬆ Back to Top](#-ytdl-pro-api-reference)

---

</div>
