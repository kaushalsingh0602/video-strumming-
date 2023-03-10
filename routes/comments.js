
const { addComment, deleteComment, getComments }= require("../controllers/comment");
const {verifyToken}=require ("../middlewares/verifyToken")
module.exports = (app)=>{

    app.post("/", verifyToken, addComment)
    app.delete("/:id", verifyToken, deleteComment)
    app.get("/:videoId", getComments)

}
