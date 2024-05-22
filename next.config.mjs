/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`,
      }
    ],
  },

  experimental: {
    taint: true,
  },

  redirects() {
    return [
      {
        "source": "/twitter",
        "destination": "https://x.com/Jrencslife",
        "permanent": true
      },
      {
        "source": "/x",
        "destination": "https://x.com/Jrencslife",
        "permanent": true
      },
      {
        "source": "/youtube",
        "destination": "https://youtube.com/",
        "permanent": true
      },
      {
        "source": "/tg",
        "destination": "https://t.me/JrencsLife",
        "permanent": true
      },
      {
        "source": "/linkedin",
        "destination": "https://www.linkedin.com/in/%E8%AF%9A%E9%BE%99-%E9%B9%BF-41b904281/",
        "permanent": true
      },
      {
        "source": "/github",
        "destination": "https://github.com/lulu546",
        "permanent": true
      },
      {
        "source": "/bilibili",
        "destination": "https://space.bilibili.com/32090268",
        "permanent": true
      }
    ]
  },

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },
}

export default nextConfig
