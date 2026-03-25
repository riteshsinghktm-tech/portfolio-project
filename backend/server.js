const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "portfolio_db"
});

db.connect(err => {
    if (err) console.log(err);
    else console.log("MySQL Connected...");
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    db.query(
        "INSERT INTO contacts (name,email,message) VALUES (?,?,?)",
        [name, email, message],
        (err) => {
            if (err) return res.send("Error");
            res.send("Saved");
        }
    );
});

app.listen(5000, () => console.log("Server running"));