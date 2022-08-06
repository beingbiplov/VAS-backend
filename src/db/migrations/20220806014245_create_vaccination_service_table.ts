import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vaccination_service", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.integer("no_of_dose").notNullable().unsigned();
    table.date("distribution_start_date").notNullable();
    table.date("distribution_end_date").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vaccination_service");
}
