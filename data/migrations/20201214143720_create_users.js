
exports.up = function(knex) {
    return knex.schema
    .createTable('roles', table => {
        table.increments()
        table.string('name', 128).notNullable().unique();
    })
    .createTable('users', table => {
        table.increments()
        table.string('username', 128).notNullable().unique();
        table.string('password', 128).notNullable()
        //Role: role of the user
        table.integer('role')
        .unsigned()
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
        .defaultTo(2);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
};
