import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  '文字表达是我输出自己的一种方式，输出对我而言就是我将我心中所想与现实进行碰撞。碰撞后所剩的残渣，就是我的自我。简而言之便是，自我源自于反馈。'
export const metadata = {
  title: '我的博客',
  description,
  openGraph: {
    title: '我的博客',
    description,
  },
  twitter: {
    title: '我的博客',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          表达自我的工作台੭ ᐕ)੭*⁾⁾
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} />
      </div>
    </Container>
  )
}

export const revalidate = 60
