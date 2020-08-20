const request = require("supertest");

const server = require("../server");

const db = require("../data/dbConfig")

describe("animals router", () => {
    beforeEach(async () =>{
        // empty table and reset primary key back to 1
        await db("animals").truncate();
    })
    describe("POST /api/animals", () => {
        it("should add animals", async () => {
            await request(server).post("/api/animals").send({
                animal_name: "pig",
            });

            const animals = await db("animals");

            expect(animals).toHaveLength(1);
        })
    })
})