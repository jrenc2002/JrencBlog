export const emailConfig = {
  from: 'lyloveslife@qq.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://www.jrenc.com`
      : 'http://localhost:3000',
}
