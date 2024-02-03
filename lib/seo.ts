export const seo = {
  title: 'Jrenc | 欢迎来到我大展身手的地方 ❛‿˂̵✧',
  description:
    '我是 Jrenc，是一位追求表达与创造的人。我不是一个专精于某个领域的技能型人才，因为比起钻研技能，我认为一个项目的创造力，想象力，以及其独有的价值是更打动人心的。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.jrenc.com'
      : 'http://localhost:3000'
  ),
} as const
