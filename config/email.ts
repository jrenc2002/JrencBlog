export const emailConfig = {
  from: 'hi@cali.so',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://www.jrenc.com`
      : 'http://localhost:3000',
}
