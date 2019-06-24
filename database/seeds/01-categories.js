exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, name: "React" },
        { id: 2, name: "Node" },
        { id: 3, name: "Redux" },
        { id: 4, name: "Python" },
        { id: 5, name: "User Interface" },
        { id: 6, name: "'Git for Web Development" },
        { id: 7, name: "Preprocessors" },
        { id: 8, name: "Javascript" },
        { id: 9, name: "React Composition Patterns" },
        { id: 10, name: "Class Components React" },
        { id: 11, name: "Functional Components React" },
        { id: 12, name: "Async Redux - Redux Thunk" },
        { id: 13, name: "Client Side Authentication" },
        { id: 14, name: "Testing" },
        { id: 15, name: "Deployment and Best Practices" },
        { id: 16, name: "Using Sessions and Cookies" },
        { id: 17, name: "Using JSON Web Tokens (JWT)" }
      ]);
    });
};
