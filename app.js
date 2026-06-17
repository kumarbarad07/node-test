const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Elastic Beanstalk Working now");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Aman" },
        { id: 2, name: "Rahul" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
