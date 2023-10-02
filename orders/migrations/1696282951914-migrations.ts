import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1696282951914 implements MigrationInterface {
  name = 'Migrations1696282951914';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "expense" ADD "status" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "password" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_partner" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')::text`,
    );
    await queryRunner.query(
      `ALTER TABLE "parcel" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')::text`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')::text`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')::text`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')::text`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')::text`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')::text`,
    );
    await queryRunner.query(
      `ALTER TABLE "tenants" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')::text`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tenants" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')`,
    );
    await queryRunner.query(
      `ALTER TABLE "parcel" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_partner" ALTER COLUMN "tenantId" SET DEFAULT current_setting('hermestms.current_tenant')`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "status"`);
  }
}
