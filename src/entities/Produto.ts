import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from "./Categoria";


@Entity("tab_produto")
export class Produto extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "nome"})
    nome: string;

    @Column({name: "url_img"})
    imagem: string;

    @Column({name: "descricao"})
    desc: string;

    @Column({name: "opcao_grao"})
    torra: string;

    @ManyToOne(()=> Categoria, categoria => categoria.produtos )
    @JoinColumn({name: "id_categoria"})
    idCategoria: Categoria;
}