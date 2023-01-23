import express from "express";
import { playlist } from "./controllers/controller.js";
var app = express();
app.use(express.json());
app.get("/health", function (req, res) {
    res.send("OK!");
});
app.get("/playlist", playlist);
app.listen(4000, function () {
    console.log("Server is running...");
});
