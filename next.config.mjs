/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    basePath: isProd ? "/TogetherAgainstCancer" : "",
    images: {
        loader: "akamai",
        path: "",
    }
};

export default nextConfig;
