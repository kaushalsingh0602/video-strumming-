
const {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} =require( "../controllers/user");
const { verifyToken } =require ("../middlewares/verifyToken");

module.exports = (app)=>{

  //update user
  app.put("/:id", verifyToken, update);

  //delete user
  app.delete("/:id", verifyToken, deleteUser);

  //get a user
  app.get("/find/:id", getUser);

  //subscribe a user
  app.put("/sub/:id", verifyToken, subscribe);

  //unsubscribe a user
  app.put("/unsub/:id", verifyToken, unsubscribe);

  //like a video
  app.put("/like/:videoId", verifyToken, like);

  //dislike a video
  app.put("/dislike/:videoId", verifyToken, dislike);

}
