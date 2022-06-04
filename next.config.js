/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            "inf4mation-inf4-snft.s3.eu-west-2.amazonaws.com",
            "cloud.inf4mation.com",
        ],
    },
    env: {
        AWS_KEY: process.env.AWS_KEY,
        AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    },
};

module.exports = nextConfig;
