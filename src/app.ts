import express, {Request, Response} from "express";
import { IUser } from "./types/user";

//npm install express
//npm i --save-dev @types/express


//Exemplo, pode ser um String ou null
const nome: String | null = null;

const app = express();

app.use(express.json());

app.post("/c",(req:Request, res: Response) =>{
    const { nome , endereco, senha } = req.body;

    const usuario: IUser = {
        nome,
        endereco,
        senha
    };
});