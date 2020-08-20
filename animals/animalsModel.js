const db = require("../data/dbConfig")

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update,
}

function find(){

}

function findBy(){

}

async function add(animal){
    // try{
    //     const [id] = await db("animals").insert(animal, "id")

    //     return findById(id)
    // } catch(error) {
    //     throw error;
    // }

    return db("animals")
    .insert(animal)
    .returning("id")
    .then(ids => {
        const id = ids[0]
        return findById(id)
    });
}

function findById(id){
    return db("animals").where({ id }).first();
}

function remove(id){
    return db("animals").where({ id }).del();
}

function update(changes, id){
    return db("animals")
    .where({ id })
    .update(changes)
    .then(() => {
        return findById(id)
    });
}