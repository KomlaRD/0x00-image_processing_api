// Import modules
import supertest from "supertest";
import app from "../index";

// Initialise request object to test server application object
const request: supertest.SuperTest<supertest.Test> = supertest(app);

// Test server
describe("Test endpoint responses", () => {
    it("gets the api endpoint", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
});

