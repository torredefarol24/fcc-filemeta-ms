var express = require('express')
var app = express()
var fileUpload = require("express-fileupload")

app.use(express.static('public'))
app.use(fileUpload())

app.get("/", (req, res) => {
	return res.sendFile(__dirname + "/index.html")
})

app.post("/api/file_analysis", (req, res) => {
    var fileInfo = req.files.upfile
    return res.status(200).json({ name : fileInfo.name, size : fileInfo.data.length , sizeInfo : `${fileInfo.data.length} bytes`})
})

app.listen(process.env.PORT || 3000, () => console.log("Listening on port"))