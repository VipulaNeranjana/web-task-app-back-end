import express from "express";
import mysql, {Pool} from "promise-mysql"

const app = express();
const router = express.Router();

let pool:Pool;
initPool();
async function initPool(){
    pool = await mysql.createPool({
        host: "localhost",
        port: 3306,
        database: "dep10_simple_task_app",
        user: "root",
        password: "2273349@P",
        connectionLimit: 5
    });
}


/* Get all tasks */
router.get("/",(req,res)=>{

});

/* Save new task */
router.post("/",(req,res)=>{

});

/* Delete an existing task */
router.delete("/",(req,res)=>{

});

app.use("/app/api/v1/tasks",router)
app.listen(8080,()=>console.log("server has been started"));