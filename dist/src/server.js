"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
// Importante importar as informações da pasta database
require("./database");
dotenv_1.default.config();
var app = (0, express_1.default)();
// configuração que avisa ao express que a forma de requisição é em json
app.use(express_1.default.json());
// Utiliza o arquivo routes como forma de pegar os endpoints para serem utilizados
app.use(routes_1.default);
app.listen(process.env.PORT || 3000, function () { return console.log("Servidor inicializado"); });
