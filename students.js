const express = require("express");
const app = express();
const Student = require("./models/Student.model");

app.get("/students", (req, res) => {
  Student.find().then((data) => {
    res.json(data);
  });
});

app.post("/students", (req, res) => {
  Student.create({
    name: req.body.name,
    phone: req.body.phone,
    age: req.body.age
  }).then(() => {
    res.json("Студент добавлен");
  });
});

app.delete("/students/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id).then(() => {
    res.json("Студент удален");
  });
});

app.patch("/students/:id", (req, res) => {
  Student.findByIdAndUpdate(req.params.id, { name: req.body.name, phone: req.body.phone, age: req.body.age }).then(() => {
    res.json();
  });
});

module.exports = app;
