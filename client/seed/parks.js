const db = require("../db");
const { Park } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const park1 = await new Park({
    name: "Universal Studios",
    location: "Forida",
    parkHours: "8am - 11pm",
    about: "Random",
    images: "link"
  });
  park1.save();
}
const run = async () => {
  await main();
  db.close();
};

run();
