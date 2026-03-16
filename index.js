// Primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()


// Permite aceitar JSON na requisição
app.use(express.json())


// PRIMEIRA ROTA: GET para retornar todos os filmes

const filmes = [
    {
        id: 1,
        description: "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
        title: "Oppenheimer",
        image: "https://m.media-amazon.com/images/M/MV5BOGRmMDc3ZWYtNTJlYS00ZDdhLWI4OTgtNDIxNWI5YTMxNzdkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Suspense",
        releaseYear: "2023"
    }
]

// SÉRIES
const series = [
    {
        id: 1,
        description: "Na década de 1980, um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.",
        title: "Stranger Things",
        image: "https://upload.wikimedia.org/wikipedia/tr/c/cc/Stranger_Things_5._sezon.jpg",
        genre: "Terror",
        releaseYear: "2016"
    }
]







// Buscar filme por gênero
app.get('/filmes', function (req, res) {
    const genre = req.query.genre
 
    // Se não passar query param, retorna todos
    // A exclamação inverte o valor
 
    if (!genre) {
        return res.json(filmes)
    }
 
    const filmesFiltrados = filmes.filter(a =>
        a.genre.toLowerCase().includes(genre.toLowerCase())
    )
 
    // "a" é a busca por todos os alunos, ele vai passar por todos eles e retornar o que foi filtrado
 
    res.json(filmesFiltrados)
 
})


// Buscar serie por gênero
app.get('/series', function (req, res) {
    const genre = req.query.genre
 
    // Se não passar query param, retorna todos
    // A exclamação inverte o valor
 
    if (!genre) {
        return res.json(series)
    }
 
    const filmesFiltrados = series.filter(a =>
        a.genre.toLowerCase().includes(genre.toLowerCase())
    )
 
    // "a" é a busca por todos os alunos, ele vai passar por todos eles e retornar o que foi filtrado
 
    res.json(seriesFiltradas)
 
})




// Buscar filme por id
app.get("/filmes/:id", function (req, res) {
    const id = parseInt(req.params.id) // O query parameter volta como um texto

    const filme = filmes.find(a => a.id == id)

    //se a variável for nula é igual a falso, se tiver alguma coisa é verdadeiro
    if (filme) {
        return res.json(filme)
    } else {
        res.status(404).json("Filme não encontrado")
    }
})

// Buscar serie por id
app.get("/series/:id", function (req, res) {
    const id = parseInt(req.params.id) // O query parameter volta como um texto

    const serie = series.find(a => a.id == id)

    //se a variável for nula é igual a falso, se tiver alguma coisa é verdadeiro
    if (serie) {
        return res.json(serie)
    } else {
        res.status(404).json("Série não encontrada")
    }
})





app.post("/filmes", function (req, res) {
    const descriptionQueVeioDoCliente = req.body.description
    const titleQueVeioDoCliente = req.body.title
    const imageQueVeioDoCliente = req.body.image
    const genreQueVeioDoCliente = req.body.genre
    const releaseYearQueVeioDoCliente = req.body.genre
    if (!descriptionQueVeioDoCliente || !titleQueVeioDoCliente || !imageQueVeioDoCliente || !genreQueVeioDoCliente || !releaseYearQueVeioDoCliente) {
        return res.status(400).json({ erro: "Todas as informações são obrigatórias!" })
    }
    if (titleQueVeioDoCliente.lenght <= 1) {
        return res.status(400).json({ erro: "O título do filme precisa ser maior do que 1 caractere!" })
    }
    

    //criando um objeto novo com as infos que vieram do cliente

    const novoFilme = {
        id: 2,
        title: titleQueVeioDoCliente,
        description: descriptionQueVeioDoCliente,
        genre: genreQueVeioDoCliente,
        image:imageQueVeioDoCliente,
        releaseYear: releaseYearQueVeioDoCliente
    }

    //Adiciona o novo filme no final
    filmes.push(novoFilme)
    res.status(201).send()
})


app.post("/series", function (req, res) {
    const descriptionQueVeioDoCliente = req.body.description
    const titleQueVeioDoCliente = req.body.title
    const imageQueVeioDoCliente = req.body.image
    const genreQueVeioDoCliente = req.body.genre
    const releaseYearQueVeioDoCliente = req.body.genre
    if (!descriptionQueVeioDoCliente|| !titleQueVeioDoCliente || !imageQueVeioDoCliente || !genreQueVeioDoCliente || !releaseYearQueVeioDoCliente) {
       return res.status(400).json({ erro: "Todas as informações são obrigatórias!" })
    }
     if (titleQueVeioDoCliente.lenght <= 1);

    //criando um objeto novo com as infos que vieram do cliente

    const novaSerie = {
         id: 2,
        title: titleQueVeioDoCliente,
        description: descriptionQueVeioDoCliente,
        genre: genreQueVeioDoCliente,
        image:imageQueVeioDoCliente,
        releaseYear: releaseYearQueVeioDoCliente
    }


    //Adiciona o novo filme no final
    filmes.push(novoFilme)
    res.status(201).send()
})







// Segundo passo, colocar o servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})