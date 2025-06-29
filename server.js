const express = require('express')
const app = express()
const port = 3000

app.use(express.static('pubblic'))


app.get('/', (req, res) => {
	res.send('server del mio blog')
})

app.listen(port, () => {
	console.log(`Example app listening on http://localhost:${port}`)
})

app.get('/api/posts/', (req, res) => {
	const menù = [
		{
			title: "Il ciambellone",
			contenuto: "ingredienti",
			image: `http://localhost:${port}/img/ciambellone.jpeg`

		},
		{
			title: "Cracker alla Barbabietola",
			contenuto: "ingredienti",
			image: `http://localhost:${port}/img/cracker_barbabietola.jpeg`

		},
		{
			title: "Pane Fritto Dolce",
			contenuto: "ingredienti",
			image: `http://localhost:${port}/img/pane_fritto_solce.jpeg`
		},
		{
			title: "Pasta Barbabietola",
			contenuto: "ingredienti",
			image: `http://localhost:${port}/img/pasta_barbabietola.jpeg`
		},
		{
			title: "Torta Paesana",
			contenuto: "ingredienti",
			image: `http://localhost:${port}/img/torta_paesana.jpeg`
		}

	]
	res.json(menù);
})