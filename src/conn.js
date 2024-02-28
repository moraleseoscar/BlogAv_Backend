import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'blog_user',
    database: 'blog_db',
    password: 'blog_password',
    port: '3307',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool