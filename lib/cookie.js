/**
 * ═══════════════════════════════════════════════════════════════════
 * ytdl-pro - Cookie Manager
 * ═══════════════════════════════════════════════════════════════════
 * 
 * 🚀 Author: Lucifer05321
 * 🌐 Website: https://lucifer-nukers.netlify.app/
 * 
 * Cookie authentication support for DASH format access
 * Handles YouTube cookie parsing and header generation
 * 
 * ═══════════════════════════════════════════════════════════════════
 */

/**
 * Parse cookies from various formats into a cookie header string
 * 
 * Supported formats:
 * 1. Cookie header string: "name1=value1; name2=value2"
 * 2. Array of objects: [{name: 'name1', value: 'value1'}, ...]
 * 3. Object: {name1: 'value1', name2: 'value2'}
 * 4. Netscape format string (from browser export)
 * 
 * @param {string|Array|Object} cookies - Cookies in various formats
 * @returns {string} Cookie header string
 */
function parseCookies(cookies) {
  if (!cookies) {
    return '';
  }

  // If it's already a cookie header string
  if (typeof cookies === 'string') {
    // Check if it's Netscape format (starts with # or has tabs)
    if (cookies.includes('\t') || cookies.trim().startsWith('#')) {
      return parseNetscapeCookies(cookies);
    }
    // Already a cookie header string
    return cookies;
  }

  // If it's an array of cookie objects
  if (Array.isArray(cookies)) {
    return cookies
      .filter(c => c && c.name && c.value)
      .map(c => `${c.name}=${c.value}`)
      .join('; ');
  }

  // If it's a plain object
  if (typeof cookies === 'object') {
    return Object.entries(cookies)
      .filter(([name, value]) => name && value)
      .map(([name, value]) => `${name}=${value}`)
      .join('; ');
  }

  return '';
}

/**
 * Parse Netscape cookie format (exported from browsers)
 * Format: domain \t flag \t path \t secure \t expiration \t name \t value
 * 
 * @param {string} netscapeCookies - Cookies in Netscape format
 * @returns {string} Cookie header string
 */
function parseNetscapeCookies(netscapeCookies) {
  const lines = netscapeCookies.split('\n');
  const cookies = [];

  for (const line of lines) {
    // Skip comments and empty lines
    if (!line.trim() || line.trim().startsWith('#')) {
      continue;
    }

    const parts = line.split('\t');
    if (parts.length >= 7) {
      const name = parts[5];
      const value = parts[6];
      if (name && value) {
        cookies.push(`${name}=${value}`);
      }
    }
  }

  return cookies.join('; ');
}

/**
 * Extract YouTube-specific cookies that are needed for authentication
 * This helps filter only the necessary cookies for DASH format access
 * 
 * @param {string} cookieString - Full cookie header string
 * @returns {string} Filtered cookie string with only YouTube auth cookies
 */
function extractYouTubeCookies(cookieString) {
  if (!cookieString) {
    return '';
  }

  // Important YouTube cookies for authentication
  const importantCookies = [
    'VISITOR_INFO1_LIVE',
    'CONSENT',
    '__Secure-YEC',
    'PREF',
    'SID',
    'HSID',
    'SSID',
    'APISID',
    'SAPISID',
    '__Secure-1PSID',
    '__Secure-3PSID',
    '__Secure-1PAPISID',
    '__Secure-3PAPISID',
    'LOGIN_INFO',
    'YSC'
  ];

  const cookies = cookieString.split(';').map(c => c.trim());
  const filtered = cookies.filter(cookie => {
    const name = cookie.split('=')[0];
    return importantCookies.some(important => name === important);
  });

  return filtered.join('; ');
}

/**
 * Validate if cookies are present and properly formatted
 * 
 * @param {string} cookieString - Cookie header string to validate
 * @returns {boolean} True if cookies are valid
 */
function validateCookies(cookieString) {
  if (!cookieString || typeof cookieString !== 'string') {
    return false;
  }

  // Check if it has at least one cookie in name=value format
  return /\w+=\w+/.test(cookieString);
}

/**
 * Create cookie-aware request options
 * Merges cookies into existing headers
 * 
 * @param {Object} options - Existing request options
 * @param {string|Array|Object} cookies - Cookies to add
 * @returns {Object} Updated request options with cookies
 */
function addCookiesToOptions(options, cookies) {
  const cookieString = parseCookies(cookies);
  
  if (!cookieString) {
    return options;
  }

  options = options || {};
  options.headers = options.headers || {};

  // Merge with existing cookies if present
  const existingCookies = options.headers.Cookie || options.headers.cookie || '';
  const combinedCookies = existingCookies
    ? `${existingCookies}; ${cookieString}`
    : cookieString;

  options.headers.Cookie = combinedCookies;
  delete options.headers.cookie; // Remove lowercase version

  return options;
}

/**
 * Get a simple instruction for users on how to get cookies
 * 
 * @returns {string} Instructions for cookie extraction
 */
function getCookieInstructions() {
  return `
To enable DASH format downloads (4K, 1440p, audio-only), you need YouTube cookies:

Method 1: Browser Extension (Easiest)
1. Install "Get cookies.txt LOCALLY" extension for Chrome/Firefox
2. Go to youtube.com and make sure you're logged in
3. Click the extension icon and export cookies
4. Use the exported cookies with ytdl-pro

Method 2: Browser DevTools
1. Open youtube.com in your browser (logged in)
2. Press F12 to open Developer Tools
3. Go to Application/Storage tab → Cookies → https://www.youtube.com
4. Copy the cookie values you need

Method 3: Pass cookies directly in code
const ytdl = require('ytdl-pro');

// Option A: Cookie string
ytdl(url, {
  cookies: 'VISITOR_INFO1_LIVE=xxx; CONSENT=xxx; ...'
});

// Option B: Cookie object
ytdl(url, {
  cookies: {
    'VISITOR_INFO1_LIVE': 'xxx',
    'CONSENT': 'xxx'
  }
});

Important cookies: VISITOR_INFO1_LIVE, CONSENT, SID, HSID, SSID, APISID, SAPISID
`;
}

module.exports = {
  parseCookies,
  parseNetscapeCookies,
  extractYouTubeCookies,
  validateCookies,
  addCookiesToOptions,
  getCookieInstructions
};
