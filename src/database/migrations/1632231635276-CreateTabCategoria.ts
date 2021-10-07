import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabCategoria1632231635276 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_categoria",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome_categoria",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "qtd_produtos",
                        type: "integer",
                        length: "5"
                    },                    
                        
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_categoria")
    }

}
