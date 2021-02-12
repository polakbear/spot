import express from 'express';
import { config } from './config/config';
import session from 'express-session';

export const initApp = (port: number) => {
  const app = express();
  app.use(
    session({ secret: 'kittycat', saveUninitialized: true, resave: true }),
  );
  app.listen({ port: config.port }, () => {
    console.log(`🐽 Server is sniffing on port ${port}`);
  });
  return app;
};
