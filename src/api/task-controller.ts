import express, {json} from "express";
import mysql, {Pool} from "promise-mysql";

export const router = express.Router();

/* Create database pool */

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


type Task= {
    id: number;
    description: string;
    status: 'COMPLETED' | 'NOT_COMPLETED' | undefined
}

/* Get all tasks */
router.get("/",async (req,res)=>{
    const tasks = await pool.query("SELECT * FROM task");
    res.json(tasks);
});


/* Create new task */
router.post("/",async (req,res)=>{
    const task = (req.body as Task);
    if(!task.description?.trim()) {
        res.sendStatus(400);
        return;
    }
    const result = await pool.query("INSERT INTO task (description,status) VALUES (?,DEFAULT)",[task.description]);

    task.id = result.insertId;
    task.status = "NOT_COMPLETED";
    res.status(201).json(task);
});

