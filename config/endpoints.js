export const AUTH_API =
  process.env.NODE_ENV === 'production' ? 'https://next-starter.diog.co' : 'http://localhost:3000';

export const NEWS_API = `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}`;
