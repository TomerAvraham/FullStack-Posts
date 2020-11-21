const router = require('express').Router()
const connection = require('../helpers/dbConfig')

router.get('/all', (req, res) => {
    connection.query(`select * from posts`, (err, result) => {
        if (err) return res.sendStatus(500)
        res.status(200).json(result)
    })
})

router.post('/add', (req, res) => {
    const { title, description } = req.body
    if (!title || !description) return res.status(400).json('Missing Details')
    connection.query(`insert into posts (title, description)
    values ("${title}", "${description}")`, (err, result) => {
        if (err) return res.sendStatus(500)
        res.status(201).json(result)
    })
})

router.put('/edit', (req, res) => {
    const {postId} = req.query
    const { newTitle, newDescription } = req.body
    connection.query(`update posts set title = "${newTitle}", 
    description = "${newDescription}" where id = ${postId}`, (err, result) => {
        if (err) throw err
        if (!result.affectedRows) return res.status(400).json("ID Not found")
        res.status(200).json(result)
    })
})

router.delete('/delete/:id', (req, res) => {
    const {id} = req.params
    connection.query(`delete from posts where id = ${id}`, (err, result) => {
        if (err) throw err
        if (!result.affectedRows) return res.status(400).json("ID Not found")
        res.status(200).json(result)
    })
})

module.exports = router