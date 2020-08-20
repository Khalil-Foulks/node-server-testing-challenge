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
    const { id } = req.params

    Animals.remove(id)
        .then(deleted => {
            if(deleted){
                res.status(204).end()
            } else {
                res.status(404).json({ message: 'Could not find animal with given id'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to add new animal" });
        });
})

module.exports = router;