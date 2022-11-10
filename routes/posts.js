const express = require ("express")
const PostController = require("../controllers/PostController")
const router = express.Router()

router.post("/createPost",PostController.createPost)
router.put("/updatePostById/:_id",PostController.updatePostById)
router.delete("/deletePostById/:_id",PostController.deletePostById)
router.get("/getPostByTitle/:title",PostController.getPostByTitle) //esta me da tira error pero en la DB de Mongo 
router.get("/getPostById/:_id",PostController.getPostById)





module.exports = router