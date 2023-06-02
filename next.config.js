/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['se6318.s3.ap-northeast-2.amazonaws.com'],
    loader: 'default',
    path: '/',
    // 自定义函数来确定图像主机名
    // 在这个例子中，我们将使用默认的图像主机名，除非图像链接中指定了不同的主机名
    // 如果指定了不同的主机名，则使用指定的主机名
    // 你可以根据自己的需求来编写更复杂的逻辑
  
  },
}

module.exports = nextConfig
