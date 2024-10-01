import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello bro');
});

app.listen(PORT, () => {
    console.log(`Server listen to PORT: http://localhost:${PORT}`);
});