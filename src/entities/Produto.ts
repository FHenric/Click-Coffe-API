import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from "./Categoria";
import { TorraTipo } from "./TorraTipo";


@Entity("tab_produto")
export class Produto extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "nome"})
    nome: string;

    @Column({name: "url_img"})
    imagem: string;

    @Column({name: "tipo_torra"})
    torra: string;

    @ManyToOne(()=> Categoria, categoria => categoria.produtos )
    @JoinColumn({name: "id_categoria"})
    idCategoria: Categoria;
}