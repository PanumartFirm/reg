const express = require('express')
const app = require('./app')   // ชื่อไฟล์
const port = 3000

app.listen(port, () => console.log(`Reg API listening on port ${port}!`))