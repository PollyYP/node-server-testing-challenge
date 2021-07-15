exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    { model: "Honda", make: "Odyssey" },
    { model: "Lexus", make: "RX 350" },
    { model: "Mercedes-Benz", make: "AMG C 63 S" },
    { model: "BMW", make: "X5" },
  ]);
};
