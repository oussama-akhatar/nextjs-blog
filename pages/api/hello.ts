import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ text: 'Hello' });
}

// Try accessing it at http://localhost:3000/api/hello. You should see {"text":"Hello"}. Note that: