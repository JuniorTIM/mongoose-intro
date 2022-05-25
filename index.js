const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://JuniorTIM:03032004Asum@cluster0.kzst7.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Успешно соединились с сервером MongoDB")).catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.use(express.json())
app.use(require('./students'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
