const express = require("express");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Cars.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const car = await Cars.findById(req.params.id);
    if (!car) {
      return res.status(404).json({
        message: "car not found",
      });
    }

    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const car = await Cars.create({
      name: req.body.name,
    });

    res.status(201).json(car);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
