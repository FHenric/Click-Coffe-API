import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTabProduto1631916766754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_produto",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "id_categoria",
                        type: "integer",
                        length: "5"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "valor_unit",
                        type: "numeric",
                        precision: 8,
                        scale: 2
                    },
                    {
                        name: "qtd_estoque",
                        type: "integer",
                        length: "15"
                    },                          
                ]
            })
        )

        await queryRunner.createForeignKey("tab_produto", new TableForeignKey({
            columnNames:["id_categoria"],
            referencedColumnNames: ["id"],
            referencedTableName: "tab_categoria",
            name: "fk_produto_categoria"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_produto")
    }

}
