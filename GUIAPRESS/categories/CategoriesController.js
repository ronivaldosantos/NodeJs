const express = require("express");
const router = express.Router();

// Rota para criar nova categoria
router.get("/admin/categories/new",(req,res)=>{
    res.render("admin/categories/new")
})

module.exports = router;