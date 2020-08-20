const express = require("express");

const Animals = require("./animalsModel");

const router = express.Router();

router.get("/", (req, res) => {

})

router.post("/", (req, res) => {
    const animalData = req.body;

    Animals.add(animalData)
        .then(created => {
            res.status(201).json({ created })
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to add new animal" });
        });
})

router.put("/:id", (req, res) => {

})

router.delete("/:id", (req, res) => {

})

module.exports = router;