"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Produto_1 = require("../entities/Produto");
var CategoriaRepository_1 = require("../repositories/CategoriaRepository");
var ProdutoRepository_1 = require("../repositories/ProdutoRepository");
exports.default = {
    show: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, res.status(200).json({ message: 'Okay' })];
            });
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var catNome, repository, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catNome = req.body.catNome;
                        repository = (0, typeorm_1.getCustomRepository)(CategoriaRepository_1.CategoriaRepository);
                        data = { catNome: catNome };
                        return [4 /*yield*/, repository.save(data)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(201).json({ categoria: data })];
                }
            });
        });
    },
    listCategoria: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = (0, typeorm_1.getCustomRepository)(CategoriaRepository_1.CategoriaRepository);
                        return [4 /*yield*/, repository.find()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(200).json({ data: data })];
                }
            });
        });
    },
    delCat: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        repository = (0, typeorm_1.getCustomRepository)(CategoriaRepository_1.CategoriaRepository);
                        return [4 /*yield*/, repository.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Categoria exclu\u00EDda com sucesso!" })];
                }
            });
        });
    },
    addProduto: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, nome, desc, torra, imagem, repository, idCategoria, produto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, nome = _a.nome, desc = _a.desc, torra = _a.torra, imagem = _a.imagem;
                        repository = (0, typeorm_1.getCustomRepository)(CategoriaRepository_1.CategoriaRepository);
                        return [4 /*yield*/, repository.findOne(id)];
                    case 1:
                        idCategoria = _b.sent();
                        produto = new Produto_1.Produto();
                        produto.nome = nome;
                        produto.torra = torra;
                        produto.imagem = imagem;
                        produto.desc = desc;
                        produto.idCategoria = idCategoria;
                        idCategoria.produtos.push(produto);
                        return [4 /*yield*/, repository.save(idCategoria)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json({ msg: "Produto adicionado com sucesso" })];
                }
            });
        });
    },
    list: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = (0, typeorm_1.getCustomRepository)(ProdutoRepository_1.ProdutoRepository);
                        return [4 /*yield*/, repository.find()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(200).json({ data: data })];
                }
            });
        });
    },
    findCategoria: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repository, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        repository = (0, typeorm_1.getCustomRepository)(CategoriaRepository_1.CategoriaRepository);
                        return [4 /*yield*/, repository.findOne(id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(200).json({ data: data })];
                }
            });
        });
    },
    findProduto: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repository, produto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        repository = (0, typeorm_1.getCustomRepository)(ProdutoRepository_1.ProdutoRepository);
                        return [4 /*yield*/, repository.findOne(id)];
                    case 1:
                        produto = _a.sent();
                        return [2 /*return*/, res.status(200).json(produto)];
                }
            });
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, nome, valorUnitario, marca, data, repository;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, nome = _a.nome, valorUnitario = _a.valorUnitario, marca = _a.marca;
                        data = { valorUnitario: valorUnitario, nome: nome, marca: marca };
                        repository = (0, typeorm_1.getCustomRepository)(ProdutoRepository_1.ProdutoRepository);
                        return [4 /*yield*/, repository.update(id, data)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json({ data: "Produto Atualizado com sucesso!" })];
                }
            });
        });
    },
    deleteProduto: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        repository = (0, typeorm_1.getCustomRepository)(ProdutoRepository_1.ProdutoRepository);
                        return [4 /*yield*/, repository.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Produto exclu\u00EDdo com sucesso!" })];
                }
            });
        });
    }
};
