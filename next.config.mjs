const nextConfig = {
  reactStrictMode: true, // optional. if your nextConfig was an empty object earlier, skip this
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
