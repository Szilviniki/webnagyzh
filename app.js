const express = require('express');
const mod = require('./list');

const app = express();

app.get('/slice', (req, res) => {
    var text = req.query.text;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);

    if (text && a && b && !isNaN(a) && !isNaN(b)) {
        res.send(text.slice(a,b));
    } else {
        res.send('Kérem, adja meg az összes paramétert!');
    }
});

app.get('/lista', (req, res) => {
    const n = Math.floor(Math.random() * 9) + 2;
    const m = Math.floor(Math.random() * 9) + 2;

    const listHTML = mod.generateList(n, m);

    res.send("Az első " + n + " darab, 1-től induló, " + m + " különbséggel vett szám természetes logaritmusának értékei:<br>" + listHTML);
});

app.get('/log', (req, res) => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    const formattedDate = now.toLocaleString('hu-HU', options) + "\n";

    fs.appendFile(logFilePath, formattedDate, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    fs.readFile(logFilePath, function(err, data) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.send(data);
    });
});

app.get('*', (req, res) => {
    res.send('I32BC/');
});
app.listen(1212, () => {
    console.log('Express server is running on http://localhost:1212');
});