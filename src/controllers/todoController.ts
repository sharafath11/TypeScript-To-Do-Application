import express from "express"

class todoHandler{
    getHomePage(req:express.Request,res:express.Response){
        res.render("homePage")
    }
}
export default todoHandler