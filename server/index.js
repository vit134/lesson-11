const express = require('express');
const device = require('device');
const path = require('path');

const app = express();
const PORT = 3001;

app.use((req, res) => {
    const userAgent = req.header('user-agent');
    const { type } = device(userAgent);
    res.sendFile(path.join(__dirname, '../build', `${type}.html`));
});

app.use(express.static(path.join(__dirname, '../build')))
app.listen(PORT, () => {
    console.log(`App listens on ${PORT}`);
});