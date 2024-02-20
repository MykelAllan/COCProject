require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 3001

const app = express();

app.use(cors())

app.get('/api/data', (req, res) => {
    res.json({ message: ' Hello from the backend' })
})

app.get('/api/players/:playerTag', async (req, res) => {
    try {
        const { playerTag } = req.params;
        const apiToken = process.env.API_TOKEN;
        const ipAddress = process.env.IP_ADDRESS;
        const uri = `https://api.clashofclans.com/v1/players/%23${playerTag}`
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${apiToken}`,
                'X-Forwarded-For': {ipAddress}
            }
        };

        const response = await axios.get(uri, axiosConfig);
        res.json(response.data);

    } catch (error) {
        console.error('Error fetching player data', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.listen(PORT, () => {
    console.log(`backend server is running on port ${PORT}`)
})