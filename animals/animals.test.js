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
            const res = await request(server).post("/api/animals").send({
                animal_name: "pig",
            });

            const animals = await db("animals");

            expect(animals).toHaveLength(1);

            expect(res.status).toBe(201)

        })
    })
    describe("Delete /api/animals/:id", () => {
        it("should add animals", async () => {
            await request(server).post("/api/animals").send({
                animal_name: "pig",
            });

            const res = await request(server).delete("/api/animals/1").send();

            const animals = await db("animals");

            expect(animals).toHaveLength(0);

            expect(res.status).toBe(204);

        })
    })
})