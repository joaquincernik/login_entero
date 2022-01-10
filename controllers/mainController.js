const fs = require('fs');

const mainController = {
    index:(req,res)=>{ 
        res.render("index", { title: 'Express'})
},
    register:(req,res)=>{ 
        console.log(req.body)
    res.send("works")}
}

module.exports= mainController