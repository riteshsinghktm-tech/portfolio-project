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

db.connect((err) => {
    if (err) {
        console.log("DB ERROR:", err);
    } else {
        console.log("MySQL Connected...");
    }
});

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("WORKING ✅");
});

// CONTACT ROUTE
app.post("/contact", (req, res) => {
    console.log("CONTACT HIT");

    const { name, email, message } = req.body;

    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err) => {
        if (err) {
            console.log(err);
            res.send("ERROR ❌");
        } else {
            res.send("SUCCESS ✅");
        }
    });
});

app.listen(5000, () => {
    console.log("🔥 SERVER STARTED 🔥");
});