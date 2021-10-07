import { Request, Response } from "express";
import { getConnection, getCustomRepository } from "typeorm";

import { Categoria } from "../entities/Categoria";
import { Produto } from "../entities/Produto";

import { CategoriaRepository } from "../repositories/CategoriaRepository";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

export default {
    async create(req: Request, res: Response) {
        const {catNome, qtdProdutos} = req.body;

        const repository = getCustomRepository(CategoriaRepository);

        var data = {catNome, qtdProdutos}

        data = await repository.save(data)

        return res.status(201).json({categoria:data});
    },

    async listCategoria(req: Request, res: Response) {
        const repository = getCustomRepository(CategoriaRepository);

        const data = await repository.find();

        return res.status(200).json({data:data});
    },

    async addProduto(req: Request, res: Response){
        const {id} = req.params;
        const {nome, valorUnitario, marca} = req.body;

        const repository = getCustomRepository(CategoriaRepository);
        const idCategoria = await repository.findOne(id);

        const produto = new Produto();
        produto.nome = nome;
        produto.valorUnitario = valorUnitario;
        produto.marca = marca;
        produto.idCategoria = idCategoria;
        
        idCategoria.produtos.push(produto);

        await repository.save(idCategoria);

        return res.status(200).json({ msg: `Produto adicionado com sucesso`})
    },
    async list(req: Request, res: Response) {
        const repository = getCustomRepository(ProdutoRepository);

        const data = await repository.find();

        return res.status(200).json({data:data});
    },
    async findCategoria(req: Request, res: Response){
        const {id} = req.params

        const repository = getCustomRepository(CategoriaRepository);
        const data = await repository.findOne(id);

        return res.status(200).json({data:data})
    },
    async findProduto(req: Request, res: Response) {
        const { id } = req.params;
        const repository = getCustomRepository(ProdutoRepository);

        const produto = await repository.findOne(id);

        return res.status(200).json(produto);
    },
    async update(req: Request, res: Response) {
        
        //parametro para saber qual usuario será atualizado
        const {id} = req.params

        //o corpo da requisição precisa dessas informações desestruturadas
        const { nome, valorUnitario, marca} = req.body;

        //aqui pega as constantes desestruturadas que foram descritas no corpo da requisição
        const data = {valorUnitario, nome, marca};

        const repository = getCustomRepository(ProdutoRepository)

        await repository.update(id, data);

        return res.status(200).json({data:"Produto Atualizado com sucesso!"});
    },
    async deleteProduto(req: Request, res: Response) {
        const {id} = req.params;
        const repository = getCustomRepository(ProdutoRepository);

        await repository.delete(id);

        return res.status(200).json({message: `Produto excluído com sucesso!`})
    }
}

//.createQueryBuilder("produto").innerJoin("produto.categoria", "categoria")
//.where("categoria.catNome = :categoria", {categoria:catNome})