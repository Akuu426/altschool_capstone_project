import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      const response = await fetch(`http://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

      // Check if the response is OK
      if (!response.ok) {
        return res.status(500).json({ error: 'Failed to fetch the shortened URL' });
      }

      const text = await response.text();

      // Ensure the response is not empty
      if (!text) {
        return res.status(500).json({ error: 'Received an empty response from the URL shortening service' });
      }

      return res.status(200).json({ shortUrl: text });
    } catch (error) {
      console.error('Error fetching the shortened URL:', error);
      return res.status(500).json({ error: 'Failed to shorten URL' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
