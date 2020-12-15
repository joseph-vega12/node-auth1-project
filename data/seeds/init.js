
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username: 'joseph'}
      ]);
    });
};
