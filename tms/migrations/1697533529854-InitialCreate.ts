import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialCreate1697533529854 implements MigrationInterface {
  name = 'InitialCreate1697533529854';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "expense" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "amount" integer NOT NULL, "description" character varying NOT NULL, "invoiceNumber" character varying NOT NULL, "status" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "vehicleVin" character varying, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vehicle" ("vin" character varying NOT NULL, "make" character varying NOT NULL, "model" character varying NOT NULL, "year" TIMESTAMP NOT NULL, "km" integer NOT NULL, "color" character varying NOT NULL, "registration" character varying NOT NULL, "registrationDate" TIMESTAMP NOT NULL, "country" character varying NOT NULL, "type" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "trailerVin" character varying, CONSTRAINT "UQ_e7f53aa6bd468a0c3ad569e2d13" UNIQUE ("registration"), CONSTRAINT "REL_d0fa64d775265557c9d0b8a0bc" UNIQUE ("trailerVin"), CONSTRAINT "PK_960e864037056a9e38cb4277bdd" PRIMARY KEY ("vin"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "permissions" character varying NOT NULL, "type" character varying NOT NULL, "password" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "parcel" ("id" SERIAL NOT NULL, "height" integer NOT NULL, "weight" integer NOT NULL, "length" integer NOT NULL, "width" integer NOT NULL, "qty" integer NOT NULL, "type" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "operationId" integer, CONSTRAINT "PK_c01e9fed31b7433a00942d506b1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "operation" ("id" SERIAL NOT NULL, "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "type" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "orderId" integer, CONSTRAINT "PK_18556ee6e49c005fc108078f3ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order" ("id" SERIAL NOT NULL, "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "price" integer NOT NULL, "distance" integer NOT NULL, "billingUnit" character varying NOT NULL, "total" integer NOT NULL, "status" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "city" character varying NOT NULL, "dock" character varying NOT NULL, "zip" character varying NOT NULL, "coords" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, "orderId" integer, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "business_partner" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "email" character varying NOT NULL, "website" character varying NOT NULL, "phone" integer NOT NULL, "taxId" character varying NOT NULL, "registrationNumber" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "status" character varying NOT NULL, "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, CONSTRAINT "PK_cb5dc171870c14540b635a997f9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tenants" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "subdomain" character varying NOT NULL, "subscribed" boolean NOT NULL, "subscription" character varying NOT NULL, "renewalDate" TIMESTAMP NOT NULL DEFAULT now(), "tenantId" text NOT NULL DEFAULT current_setting('hermestms.current_tenant')::text, CONSTRAINT "UQ_21bb89e012fa5b58532009c1601" UNIQUE ("subdomain"), CONSTRAINT "PK_53be67a04681c66b87ee27c9321" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ADD CONSTRAINT "FK_ad56b8eb9e94fcf269ce75c255d" FOREIGN KEY ("vehicleVin") REFERENCES "vehicle"("vin") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle" ADD CONSTRAINT "FK_d0fa64d775265557c9d0b8a0bcc" FOREIGN KEY ("trailerVin") REFERENCES "vehicle"("vin") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "parcel" ADD CONSTRAINT "FK_6f9ed40d8ed1b525e1ef26ea507" FOREIGN KEY ("operationId") REFERENCES "operation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "operation" ADD CONSTRAINT "FK_d913212deae3918351f1b76049a" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE "operation" DROP CONSTRAINT "FK_d913212deae3918351f1b76049a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "parcel" DROP CONSTRAINT "FK_6f9ed40d8ed1b525e1ef26ea507"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle" DROP CONSTRAINT "FK_d0fa64d775265557c9d0b8a0bcc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" DROP CONSTRAINT "FK_ad56b8eb9e94fcf269ce75c255d"`,
    );
    await queryRunner.query(`DROP TABLE "tenants"`);
    await queryRunner.query(`DROP TABLE "business_partner"`);
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "order"`);
    await queryRunner.query(`DROP TABLE "operation"`);
    await queryRunner.query(`DROP TABLE "parcel"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "vehicle"`);
    await queryRunner.query(`DROP TABLE "expense"`);
  }
}
