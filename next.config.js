/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [ 'i0.wp.com', 'avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com', "media.licdn.com", 'live.staticflickr.com', 'encrypted-tbn0.gstatic.com', 'images.squarespace-cdn.com', 'i.pinimg.com', 'indiaspora.org', "mir-s3-cdn-cf.behance.net", 'mir-s3-cdn-cf.behance.net',  ]
  }
}

module.exports = nextConfig
