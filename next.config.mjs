import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				pathname: '/v0/b/**',
			},
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
			},
		],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
		additionalData: `@use 'animations';\n`,
	},
};

export default nextConfig;
