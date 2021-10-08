"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//Controllers
var CatalogoController_1 = __importDefault(require("./Controllers/CatalogoController"));
var routes = (0, express_1.Router)();
// ------------[CATALOGO]------------
//Criar categorias
routes.post('/catalogo', CatalogoController_1.default.create);
// Listar categorias
routes.get('/catalogo', CatalogoController_1.default.listCategoria);
//Criar produto
routes.post('/catalogo/:id/produtos', CatalogoController_1.default.addProduto);
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
