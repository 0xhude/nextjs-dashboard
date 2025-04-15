/** @type {import('next').NextConfig} */
const nextConfig = {
    // 開発環境でのデバッグを有効化
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
      return config;
    },
    // CORS設定を追加
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
            { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
          ],
        },
      ];
    },
    // 認証関連のルートを明示的に設定
    async rewrites() {
      return [
        {
          source: '/api/auth/:path*',
          destination: '/api/auth/:path*',
        },
      ];
    },
  };
  
  module.exports = nextConfig;