export const emailConfig = {
  from: 'luchenglong@gjwy.top',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://www.jrenc.com`
      : 'http://localhost:3000',
}
