import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from "./Categoria";


@Entity("tab_produto")
export class Produto extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "nome"})
    nome: string;

    @Column({name: "valor_unit"})
    valorUnitario: number;

    @Column({name: "marca"})
    marca: string;

    @ManyToOne(()=> Categoria, categoria => categoria.produtos )
    @JoinColumn({name: "id_categoria"})
    idCategoria: Categoria;
}