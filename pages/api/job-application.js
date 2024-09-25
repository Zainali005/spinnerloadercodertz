// pages/api/job-application.js

import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await axios.post('http://localhost:5000/job-application', req.body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return res.status(response.status).json(response.data);
        } catch (error) {
            console.error('Error sending request to Express:', error);
            return res.status(500).json({ error: 'Failed to send request to Express' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
