const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'learningmaterial', 'exercises.html'));
});

app.use(express.static(path.join(__dirname, 'learningmaterial')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});