"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
//Controllers
var CatalogoController_1 = __importDefault(require("./Controllers/CatalogoController"));
//Config
var storage = multer_1.default.diskStorage({
    destination: (0, path_1.resolve)(__dirname, '..', '..', '..', 'tmp', 'uploads'),
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    },
});
var upload = (0, multer_1.default)({ storage: storage });
var routes = (0, express_1.Router)();
// ------------[CATALOGO]------------
//teste de pagina inicial
routes.get('/', CatalogoController_1.default.show);
//Criar categorias
routes.post('/catalogo', CatalogoController_1.default.create);
// Listar categorias
routes.get('/catalogo', CatalogoController_1.default.listCategoria);
// Apagar Categoria
routes.delete('/catalogo/:id', CatalogoController_1.default.delCat);
//Criar produto
routes.post('/catalogo/:id/produtos', upload.single('produto_imagem'), CatalogoController_1.default.addProduto);
//Listar Produtos
routes.get('/catalogo/produtos', CatalogoController_1.default.list);
//Listar produtos por categoria
routes.get('/catalogo/:id', CatalogoController_1.default.findCategoria);
//Página do produto
routes.get('/catalogo/produtos/:id', CatalogoController_1.default.findProduto);
//Atualizar produto
routes.put('/catalogo/produtos/:id', CatalogoController_1.default.update);
//Deletar produto
routes.delete('/catalogo/produtos/:id', CatalogoController_1.default.deleteProduto);
exports.default = routes;
