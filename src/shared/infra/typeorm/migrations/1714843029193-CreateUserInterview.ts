import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserInterview1714843029193 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users_interview',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'interview_id',
              type: 'uuid',
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'status',
              type: 'varchar',
            },
            {
              name: 'feedback',
              type: 'varchar',
            },
            {
              name: 'rating',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            }
          ],
          foreignKeys: [
            {
              name: 'UserInterview',
              referencedTableName: 'interviews',
              referencedColumnNames: ['id'],
              columnNames: ['interview_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users_interview');
    }

}
