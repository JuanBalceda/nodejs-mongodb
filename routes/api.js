const API_BASE = "/api"
const db = require("../db");

module.exports = function (app) {
    app.get(`${API_BASE}/users`, async (req, res) => {
        const query = await db.getUsers();
        res.json(query);
    });
    app.get(`${API_BASE}/user/age`, async (req, res) => {
        const { l, h } = req.query;
        const query = await db.getUserByAgeRange(l, h);
        res.json(query);
    });
    app.get(`${API_BASE}/user/:id`, async (req, res) => {
        const query = await db.getUserById(req.params.id);
        res.json(query);
    });
};