const express = require("express");
const app = express();
const port = 3000;
const path = require('path')

//rotas
app.get('/', (req,res)=>{
    res.sendFile(path.resolve('home.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve('login.html'));
})


app.get('/cadastro', (req,res)=>{
    res.sendFile(path.resolve('cadastro.html'));
})

app.use((req, res) => {
    res.status(404).send('Página não encontrada');
});

app.listen(port, ()=>console.log(`Servidor está rodando na porta ${port}`))