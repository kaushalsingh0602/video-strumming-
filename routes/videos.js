
const { addVideo, addView, getByTag, getVideo, random, search, sub, trend }=require("../controllers/video");
const { verifyToken } =require("../middlewares/verifyToken");

module.exports = (app)=>{

    //create a video
    app.post("/", verifyToken, addVideo)
    app.put("/:id", verifyToken, addVideo)
    app.delete("/:id", verifyToken, addVideo)
    app.get("/find/:id", getVideo)
    app.put("/view/:id", addView)
    app.get("/trend", trend)
    app.get("/random", random)
    app.get("/sub",verifyToken, sub)
    app.get("/tags", getByTag)
    app.get("/search", search)

}
