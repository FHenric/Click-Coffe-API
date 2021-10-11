import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./Produto";


@Entity("tab_categoria")
export class Categoria extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "nome_categoria"})
    catNome: string;

    @OneToMany(()=> Produto, prod=> prod.idCategoria, {cascade: true, eager: true})
    produtos: Produto[];
}