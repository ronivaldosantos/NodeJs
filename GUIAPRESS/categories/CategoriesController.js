const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

// Rota para criar nova categoria
router.get("/admin/categories/new",(req,res)=>{
    res.render("admin/categories/new")
})

// Rota para salavar nova categoria no BD.
router.post("/categories/save",(req,res)=>{
    var title = req.body.title;
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title) //Transforma uma string para ex:  De: "Isso e um teste" Para: "isso-e-um-teste"
        }).then(() =>{
            res.redirect("/");
        });

    }else{
        res.redirect("/admin/categories/new");
    }
});

//Rota para listar categorias cadastradas
router.get("/admin/categories",(req,res)=>{
    res.render("admin/categories/index");
});

module.exports = router;