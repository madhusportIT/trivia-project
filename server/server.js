const express = require("express");
const pool = require("./db/db");
require("dotenv").config();
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
