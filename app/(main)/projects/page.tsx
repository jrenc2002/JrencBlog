import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '多年来，我一直在做各种各样的小项目，这里就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          改变世界的展示柜੭ ᐕ)੭*⁾⁾
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          在过去十几年里，在基础设施之上的各种软件深刻改变了人类的<b>生活风貌</b>。表达有很多种，但在这里陈述的是我想让<b>世界变的更美好</b>所做的<b>努力</b>。
          
 
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
