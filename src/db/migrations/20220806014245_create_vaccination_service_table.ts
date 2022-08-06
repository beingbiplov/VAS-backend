import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vaccination_service", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.integer("no_of_dose").notNullable().unsigned();
    table.string("eligible_gender").notNullable();
    table.integer("eligible_minimum_age").notNullable().unsigned();
    table.specificType("eligible_ethnicity", "text ARRAY");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vaccination_service");
}
