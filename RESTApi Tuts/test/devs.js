const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Devs API", () => {
    /*
     * Test the get Rout
     */
    describe("GET /api/devs/all", () => {
        it("It should get all the dev", (done) => {
            chai.request(server)
                .get("/api/devs/all")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("array");
                    // response.body.length.should.be.eq(5);
                    done();
                });
        });

        // it("It should NOT GET all the devs", (done) => {
        //     chai.request(server)
        //         .get("/api/devs/all")
        //         .end((err, response) => {
        //             response.should.have.status(200);
        //             response.body.length.should.be.eq(0);
        //             done();
        //         });
        // });
    });

    /*
     * Test the get Rout by id
     */
    describe("GET /api/devs/:id", () => {
        it("It should get a dev by ID", (done) => {
            chai.request(server)
                .get("/api/devs/61b784d08dbcdc79ca4f6c50")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    done();
                });
        });

        it("It should NOT GET dev by ID", (done) => {
            chai.request(server)
                .get("/api/devs/1")
                .end((err, response) => {
                    response.should.have.status(422);
                    response.text.should.be.eq(
                        `{"error":"Cast to ObjectId failed for value \\"{ _id: \'1\' }\\" (type Object) at path \\"_id\\" for model \\"dev\\""}`
                    );
                    done();
                });
        });
    });

    /*
     * Test the get Rout for Geo loation
     */
    describe("GET /api/devs", () => {
        it("It should get a dev near 100km", (done) => {
            chai.request(server)
                .get("/api/devs?lng=-80&lat=25")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("array");
                    done();
                });
        });

        it("It should NOT GET dev near 100km", (done) => {
            chai.request(server)
                .get("/api/devs?lng=-20&lat=25")
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                });
        });
    });
    
});
