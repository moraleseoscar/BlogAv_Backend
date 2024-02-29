import mysql from 'mysql2/promise'
import { config } from 'dotenv'
config()

const pool = mysql.createPool({
    // host: process.env.MYSQLDB_HOST,
    host: 'localhost',
    user: process.env.MYSQLDB_USER,
    database: process.env.MYSQLDB_DB,
    password: process.env.MYSQLDB_PASSWORD,
    // port: process.env.MYSQLDB_PORT,
    port: '3307',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool