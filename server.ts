import express from "express";

import routes from "./src/routes";

// Importante importar as informações da pasta database
import "./src/database"

const app = express();

// configuração que avisa ao express que a forma de requisição é em json
app.use(express.json())

// Utiliza o arquivo routes como forma de pegar os endpoints para serem utilizados
app.use(routes);

app.listen(3000,()=>console.log("Servidor inicializado na porta 3000"))

