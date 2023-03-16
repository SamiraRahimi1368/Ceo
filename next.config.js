/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
  },
  googleFonts: {
    fonts: [
      {
        family: 'Inter',
        weights: ['400', '700'],
      },
    ],
  },

}
module.exports = nextConfig
