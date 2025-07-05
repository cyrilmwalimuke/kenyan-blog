/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'techweez.com',
            pathname: '/wp-content/uploads/**', // optional but good for security
          },
          {
            protocol: 'https',
            hostname: 'bettsrecruiting.com',
            pathname: '/wp-content/uploads/**', // optional but good for security
          },
          {
            protocol: 'https',
            hostname: 'https://img.freepik.com',
            pathname: '/premium-vector/**', // optional but good for security

            
          }


        ],
      },
};

export default nextConfig;
