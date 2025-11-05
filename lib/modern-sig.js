/**
 * ═══════════════════════════════════════════════════════════════════
 * ytdl-pro - Modern Signature Decoder
 * ═══════════════════════════════════════════════════════════════════
 * 
 * 🚀 Author: Lucifer05321
 * 🌐 Website: https://lucifer-nukers.netlify.app/
 * 💬 Discord: https://discord.gg/NwqwbyQvZZ
 * 📷 Instagram: https://www.instagram.com/mr_lucifer841
 * 💻 GitHub: https://github.com/Lucifer05321/
 * 
 * Enhanced Signature Deciphering for YouTube Videos
 * 
 * ═══════════════════════════════════════════════════════════════════
 */

const axios = require('axios');
const Cache = require('./cache');

const cache = new Cache();

class SignatureDecoder {
  constructor() {
    this.cachedPlayerCode = null;
    this.cachedDecipher = null;
  }

  async getPlayerCode(playerUrl) {
    const fullUrl = playerUrl.startsWith('http') 
      ? playerUrl 
      : `https://www.youtube.com${playerUrl}`;
    
    try {
      const response = await axios.get(fullUrl, { timeout: 30000 });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch player code: ${error.message}`);
    }
  }

  extractFunctionName(playerCode, pattern) {
    const match = playerCode.match(pattern);
    return match ? match[1] : null;
  }

  extractDecipherFunction(playerCode) {
    const patterns = [
      /\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/,
      /\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/,
      /\bm=([a-zA-Z0-9$]{2,})\(decodeURIComponent\(h\.s\)\)/,
      /\bc&&\(c=([a-zA-Z0-9$]{2,})\(decodeURIComponent\(c\)\)/,
      /(?:\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2,})\s*=\s*function\(\s*a\s*\)\s*\{\s*a\s*=\s*a\.split\(\s*""\s*\)/
    ];

    for (const pattern of patterns) {
      const funcName = this.extractFunctionName(playerCode, pattern);
      if (funcName) {
        const funcPattern = new RegExp(
          `(?:var\\s+)?${funcName.replace(/\$/g, '\\$')}\\s*=\\s*function\\([^)]+\\)\\s*\\{[^}]+\\};?`,
          's'
        );
        const match = playerCode.match(funcPattern);
        if (match) {
          return match[0];
        }
      }
    }
    return null;
  }

  extractHelperObject(playerCode, funcBody) {
    const helperPattern = /;([a-zA-Z0-9$]{2,})\.[a-zA-Z0-9$]+\(/;
    const match = funcBody.match(helperPattern);
    
    if (!match) return null;
    
    const objName = match[1];
    const objPattern = new RegExp(
      `var\\s+${objName.replace(/\$/g, '\\$')}\\s*=\\s*\\{[\\s\\S]+?\\};`,
      's'
    );
    const objMatch = playerCode.match(objPattern);
    
    return objMatch ? objMatch[0] : null;
  }

  async decipherSignature(signature, playerUrl) {
    if (!signature) return signature;
    
    try {
      const playerCode = await this.getPlayerCode(playerUrl);
      const decipherFunc = this.extractDecipherFunction(playerCode);
      
      if (!decipherFunc) {
        console.warn('Could not extract decipher function, returning original signature');
        return signature;
      }

      const helperObj = this.extractHelperObject(playerCode, decipherFunc);
      const fullCode = helperObj ? `${helperObj}\n${decipherFunc}` : decipherFunc;
      
      const transformedSig = this.executeTransform(fullCode, signature);
      return transformedSig || signature;
    } catch (error) {
      console.warn(`Signature decryption failed: ${error.message}`);
      return signature;
    }
  }

  executeTransform(code, signature) {
    try {
      const funcMatch = code.match(/=\s*function\(([^)]+)\)\s*\{/);
      if (!funcMatch) return signature;

      const paramName = funcMatch[1].split(',')[0].trim();
      
      let a = signature.split('');
      
      const operations = code.match(/[a-zA-Z0-9$]+\.[a-zA-Z0-9$]+\([^)]+\)/g);
      if (!operations) return signature;

      for (const op of operations) {
        if (op.includes('.reverse(')) {
          a.reverse();
        } else if (op.includes('.splice(')) {
          const spliceMatch = op.match(/splice\((\d+)/);
          if (spliceMatch) {
            const index = parseInt(spliceMatch[1]);
            a.splice(0, index);
          }
        } else {
          const swapMatch = op.match(/\(([^,]+),(\d+)\)/);
          if (swapMatch) {
            const index = parseInt(swapMatch[2]);
            if (index < a.length) {
              const temp = a[0];
              a[0] = a[index % a.length];
              a[index % a.length] = temp;
            }
          }
        }
      }
      
      return a.join('');
    } catch (error) {
      console.warn(`Transform execution failed: ${error.message}`);
      return signature;
    }
  }
}

module.exports = new SignatureDecoder();
module.exports.SignatureDecoder = SignatureDecoder;
module.exports.cache = cache;
