exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          email: "student@test.com",
          username: "Alex",
          password: "test123",
          role_id: 1
        },
        {
          id: 2,
          email: "admin@test.com",
          username: "admin",
          password: "test123",
          role_id: 3
        },
        {
          id: 3,
          email: "helper@test.com",
          username: "Sorin",
          password: "test123",
          role_id: 2
        },
        {
          id: 4,
          email: "student2@test.com",
          username: "Ion",
          password: "test123",
          role_id: 1
        },
        {
          id: 5,
          email: "student3@test.com",
          username: "Max",
          password: "test123",
          role_id: 1
        }
      ]);
    });
};
