exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tickets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tickets").insert([
        {
          id: 1,
          title: "React problem",
          description: "I can't start my local server",
          tried: "everything",
          status: "pending",
          student_id: 2,
          helper_id: 4,
          category_id: 1
        },
        {
          id: 2,
          title: "Node problem",
          description: "I can't get my Api key from .env file",
          tried: "searching on google the same problem",
          status: "helping",
          student_id: 1,
          helper_id: 4,
          category_id: 2
        },
        {
          id: 3,
          title: "Redux problem",
          description: "My action creators are not working",
          tried: "I don't know what to search",
          status: "fixed",
          student_id: 1,
          helper_id: 4,
          category_id: 3
        }
      ]);
    });
};
