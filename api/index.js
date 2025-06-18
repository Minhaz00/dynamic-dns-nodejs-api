const express = require('express');
const app = express();
const dnsRoutes = require('./routes/dns');

app.use(express.json());
app.use('/dns', dnsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));