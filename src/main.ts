import express from "express";

const app = express();
const router = express.Router();

/* Get all tasks */
router.get("/",(req,res)=>{

});

/* Save new task */
router.post("/",(req,res)=>{

});

/* Delete an existing task */
router.delete("/",(req,res)=>{

});

app.use("/app/a[i/v1/tasks",router)
app.listen(8080,()=>console.log("server has been started"));