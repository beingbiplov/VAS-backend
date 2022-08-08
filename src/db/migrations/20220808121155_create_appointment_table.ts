import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("appointment", (table) => {
    table.increments("id");
    table.string("patient_id").notNullable();
    table.string("site_location").notNullable();
    table.string("service_type").notNullable();
    table.string("confirmation_code").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("appointment");
}
