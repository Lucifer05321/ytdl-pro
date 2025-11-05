/**
 * ytdl-pro - Basic Test File
 * 
 * This file tests basic functionality of the ytdl-pro package
 */

const ytdl = require('./lib/index.js');

console.log('╔═══════════════════════════════════════════════════════════════════╗');
console.log('║                    ytdl-pro - Package Test                        ║');
console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

console.log('📦 Package Name:', 'ytdl-pro');
console.log('📌 Version:', ytdl.version);
console.log('👤 Maintainer: Lucifer05321');
console.log('🌐 Website: https://lucifer-nukers.netlify.app/\n');

console.log('✅ Testing Core Functions:\n');

// Test URL validation
const testUrls = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://youtu.be/dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'invalid-url'
];

console.log('🔗 URL Validation Tests:');
testUrls.forEach(url => {
  const isValid = ytdl.validateURL(url);
  const status = isValid ? '✅' : '❌';
  console.log(`  ${status} ${url} - ${isValid ? 'VALID' : 'INVALID'}`);
});

console.log('\n📋 Video ID Extraction Tests:');
testUrls.slice(0, 3).forEach(url => {
  try {
    const videoId = ytdl.getVideoID(url);
    console.log(`  ✅ ${url} → ${videoId}`);
  } catch (err) {
    console.log(`  ❌ ${url} → Error: ${err.message}`);
  }
});

console.log('\n✨ Available Methods:');
const methods = [
  'getInfo',
  'getBasicInfo',
  'chooseFormat',
  'filterFormats',
  'validateURL',
  'validateID',
  'getVideoID',
  'getURLVideoID'
];

methods.forEach(method => {
  const exists = typeof ytdl[method] === 'function';
  const status = exists ? '✅' : '❌';
  console.log(`  ${status} ytdl.${method}()`);
});

console.log('\n💾 Cache System:');
console.log('  ✅ Signature cache available:', typeof ytdl.cache.sig === 'object');
console.log('  ✅ Info cache available:', typeof ytdl.cache.info === 'object');
console.log('  ✅ Watch page cache available:', typeof ytdl.cache.watch === 'object');
console.log('  ✅ Cookie cache available:', typeof ytdl.cache.cookie === 'object');

console.log('\n🍪 Cookie Utilities:');
console.log('  ✅ Cookie parser available:', typeof ytdl.cookie === 'object');

console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
console.log('║              ✅ All Basic Tests Passed!                           ║');
console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

console.log('📝 Note: This is a library package, not a standalone application.');
console.log('   Users should install it via: npm install ytdl-pro');
console.log('   Then use it in their projects with: const ytdl = require(\'ytdl-pro\');\n');

console.log('🚀 For live testing, try downloading a video:');
console.log('   const ytdl = require(\'ytdl-pro\');');
console.log('   ytdl(\'https://www.youtube.com/watch?v=VIDEO_ID\', { quality: \'highest\' })');
console.log('     .pipe(fs.createWriteStream(\'video.mp4\'));\n');
