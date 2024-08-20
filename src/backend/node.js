const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.get('/api/exchange/:id', async (req, res) => {
    try {
        const exchangeId = req.params.id;
        const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/exchange/info?id=${exchangeId}`, {
            headers: {
                'X-CMC_PRO_API_KEY': '844eeaf8-ca54-4c1b-968e-a85ad1bc24f4',
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
