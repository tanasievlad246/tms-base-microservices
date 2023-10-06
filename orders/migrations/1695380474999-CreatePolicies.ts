import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePolicies1695380474999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "business_partner" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_partner" ENABLE ROW LEVEL SECURITY;`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_partner" FORCE ROW LEVEL SECURITY;`,
    );

    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "parcel" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(`ALTER TABLE "parcel" ENABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(`ALTER TABLE "parcel" FORCE ROW LEVEL SECURITY;`);

    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "expense" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(`ALTER TABLE "expense" ENABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(`ALTER TABLE "expense" FORCE ROW LEVEL SECURITY;`);

    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "vehicle" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(`ALTER TABLE "vehicle" ENABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(`ALTER TABLE "vehicle" FORCE ROW LEVEL SECURITY;`);

    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "user" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(`ALTER TABLE "user" ENABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(`ALTER TABLE "user" FORCE ROW LEVEL SECURITY;`);

    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "order" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(`ALTER TABLE "order" ENABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(`ALTER TABLE "order" FORCE ROW LEVEL SECURITY;`);

    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "address" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(`ALTER TABLE "address" ENABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(`ALTER TABLE "address" FORCE ROW LEVEL SECURITY;`);

    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "tenants" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(`ALTER TABLE "tenants" ENABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(`ALTER TABLE "tenants" FORCE ROW LEVEL SECURITY;`);

    await queryRunner.query(
      `CREATE POLICY tenant_isolation_policy ON "operation" USING ("tenantId" = current_setting('hermestms.current_tenant')::text);`,
    );
    await queryRunner.query(
      `ALTER TABLE "operation" ENABLE ROW LEVEL SECURITY;`,
    );
    await queryRunner.query(
      `ALTER TABLE "operation" FORCE ROW LEVEL SECURITY;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tenants" DISABLE ROW LEVEL SECURITY;`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" DISABLE ROW LEVEL SECURITY;`,
    );
    await queryRunner.query(`ALTER TABLE "order" DISABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(`ALTER TABLE "user" DISABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(
      `ALTER TABLE "vehicle" DISABLE ROW LEVEL SECURITY;`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" DISABLE ROW LEVEL SECURITY;`,
    );
    await queryRunner.query(`ALTER TABLE "parcel" DISABLE ROW LEVEL SECURITY;`);
    await queryRunner.query(
      `ALTER TABLE "business_partner" DISABLE ROW LEVEL SECURITY;`,
    );
  }
}
