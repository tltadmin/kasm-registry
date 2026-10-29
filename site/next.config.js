/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
      name: 'TooLazyTechs',
      description: 'Custom Kasm Workspaces maintained by TooLazyTechs.',
      icon: '/img/logo.svg',
      listUrl: 'https://tltadmin.github.io/kasm-registry/',
      contactUrl: 'https://github.com/tltadmin/kasm-registry',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
