import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vaccination_service_location", (table) => {
    table.increments("id");
    table.string("province").notNullable();
    table.string("city").notNullable();
    table.string("address").notNullable();
    table.date("distribution_start_date").notNullable();
    table.date("distribution_end_date").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.integer("vaccination_service_id").unsigned().notNullable();
    table
      .foreign("vaccination_service_id")
      .references("id")
      .inTable("vaccination_service")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vaccination_service_location");
}
