import express, { json, Request, Response} from "express";
import router from "./routes/router.js";
import chalk from "../node_modules/chalk/source/index.js";

const app = express();
app.use(json());

app.use(router);

app.get ("/health", (req: Request, res: Response)=>{ res.send("OK!") });

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(chalk.bold.green(`Server is running on port ${PORT}.`));
})