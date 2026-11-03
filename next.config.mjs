/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/policy-sceneflood' : '',
  trailingSlash: true,
};

export default nextConfig;
