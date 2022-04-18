require('dotenv').config()

module.exports = {
    port: process.env.PORT,
    connectDB: process.env.CONNECT_DB
}