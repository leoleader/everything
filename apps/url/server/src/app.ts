import express from 'express';
import cors from 'cors';

/**
 * Stateful dependencies to inject at root.
 */
type MainDependencies = {
    shortenUrl: (original: string) => Promise<string>;
    lookupURL: (shortId: number) => Promise<string>;
  };

/**
 * createApp - function that creates express app that handles
 * post and get requests from our frontend. 
 */
export async function createApp({ shortenUrl, lookupURL}: MainDependencies) {

  const app = express();
  app.use(express.json());
  app.use(cors());

  // takes post req of original url, sends back shortend version
  // along with the original.
  app.post('/api/shorten', async (req, res) => {
    const original = req.body.original;
    const short = await shortenUrl(original);

    res.statusCode = 201;

    res.send({
      short: short,
      original: original,
      
    });
  });

  // takes get req of shortend id, sends back original url.
  app.get('/s/:id', async (req, res) => {
    const id = Number(req.params.id);
    const original = await lookupURL(id);
    res.redirect(original);
  });

  return app;

}