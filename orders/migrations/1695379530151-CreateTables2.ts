import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables21695379530151 implements MigrationInterface {
  name = 'CreateTables21695379530151';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "business_partner" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "email" character varying NOT NULL, "website" character varying NOT NULL, "phone" integer NOT NULL, "taxId" character varying NOT NULL, "registrationNumber" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "status" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, CONSTRAINT "PK_cb5dc171870c14540b635a997f9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "parcel" ("id" SERIAL NOT NULL, "height" integer NOT NULL, "weight" integer NOT NULL, "length" integer NOT NULL, "width" integer NOT NULL, "qty" integer NOT NULL, "type" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "orderId" integer, CONSTRAINT "PK_c01e9fed31b7433a00942d506b1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "expense" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "amount" integer NOT NULL, "description" character varying NOT NULL, "invoiceNumber" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "vehicleId" integer, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vehicle" ("id" SERIAL NOT NULL, "vin" character varying NOT NULL, "make" character varying NOT NULL, "model" character varying NOT NULL, "year" character varying NOT NULL, "km" integer NOT NULL, "color" character varying NOT NULL, "registration" character varying NOT NULL, "registrationDate" TIMESTAMP NOT NULL, "country" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "trailerId" integer, CONSTRAINT "REL_822a3a73059d1892341f5c9f8a" UNIQUE ("trailerId"), CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, "permissions" character varying NOT NULL, "type" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order" ("id" SERIAL NOT NULL, "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "price" integer NOT NULL, "distance" integer NOT NULL, "billingUnit" character varying NOT NULL, "total" integer NOT NULL, "status" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "orderId" integer, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tenants" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "subdomain" character varying NOT NULL, "subscribed" boolean NOT NULL, "subscription" character varying NOT NULL, "renewalDate" TIMESTAMP NOT NULL DEFAULT now(), "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, CONSTRAINT "PK_53be67a04681c66b87ee27c9321" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "parcel" ADD CONSTRAINT "FK_9dbb93fbc7d0931627f2a44c293" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ADD CONSTRAINT "FK_e5c79ef78e83c1adaa8df85c1aa" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle" ADD CONSTRAINT "FK_822a3a73059d1892341f5c9f8af" FOREIGN KEY ("trailerId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" ADD CONSTRAINT "FK_69d6c6a7d5b8e073488cf971f67" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "address" DROP CONSTRAINT "FK_69d6c6a7d5b8e073488cf971f67"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle" DROP CONSTRAINT "FK_822a3a73059d1892341f5c9f8af"`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" DROP CONSTRAINT "FK_e5c79ef78e83c1adaa8df85c1aa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "parcel" DROP CONSTRAINT "FK_9dbb93fbc7d0931627f2a44c293"`,
    );
    await queryRunner.query(`DROP TABLE "tenants"`);
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "order"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "vehicle"`);
    await queryRunner.query(`DROP TABLE "expense"`);
    await queryRunner.query(`DROP TABLE "parcel"`);
    await queryRunner.query(`DROP TABLE "business_partner"`);
  }
}
