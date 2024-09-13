/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com'
            },
            // {
            //     protocol: 'https',
            //     hostname: 'hydeparkwinterwonderland.com'
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'wembleypark.com'
            // },
        ]
    }
};

export default nextConfig;