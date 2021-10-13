import { Router } from 'express';
import multer from 'multer';

//Controllers
import CatalogoController from './Controllers/CatalogoController';

//Config
import storage from './middlewares/upload';




// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().toISOString() + file.originalname);
//     },
// })

// const upload = multer({ storage: storage});


const routes = Router();

// ------------[CATALOGO]------------

//teste de pagina inicial
routes.get('/', CatalogoController.show)

//Criar categorias
routes.post('/catalogo', CatalogoController.create)

// Listar categorias
routes.get('/catalogo', CatalogoController.listCategoria)

// Apagar Categoria
routes.delete('/catalogo/:id', CatalogoController.delCat)

//Criar produto
routes.post('/catalogo/:id/produtos', storage.single('image'), CatalogoController.addProduto)

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