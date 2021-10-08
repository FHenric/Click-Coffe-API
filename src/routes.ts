import { Router } from 'express';

//Controllers
import CatalogoController from './Controllers/CatalogoController';

const routes = Router();

// ------------[CATALOGO]------------

//teste de pagina inicial
routes.get('/', CatalogoController.show)

//Criar categorias
routes.post('/catalogo', CatalogoController.create)

// Listar categorias
routes.get('/catalogo', CatalogoController.listCategoria)

//Criar produto
routes.post('/catalogo/:id/produtos', CatalogoController.addProduto)

//Listar Produtos
routes.get('/catalogo/produtos', CatalogoController.list)

//Listar produtos por categoria
routes.get('/catalogo/:id', CatalogoController.findCategoria)

//Página do produto
routes.get('/catalogo/produtos/:id', CatalogoController.findProduto)

//Atualizar produto
routes.put('/catalogo/produtos/:id', CatalogoController.update)

//Deletar produto
routes.delete('/catalogo/produtos/:id', CatalogoController.deleteProduto)


export default routes;