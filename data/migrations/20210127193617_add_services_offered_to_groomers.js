exports.up = function(knex) {
    return knex.schema.table('groomers', function (table) {
        table.boolean('doesWalks').defaultTo(false);
        table.boolean('doesDayCare').defaultTo(false);
        table.boolean('doesVetVisits').defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.table('groomers', function (table) {
        table.dropColumn('doesVetVisits')
        table.dropColumn('doesDayCare')
        table.dropColumn('doesWalks')
    });
};
