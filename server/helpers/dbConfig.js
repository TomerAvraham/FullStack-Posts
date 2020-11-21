const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'posts'
})

connection.connect(err => {
    if (err) throw err
    console.log('sql server is connected')
})

module.exports = connection