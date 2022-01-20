// install dependecies using the follow command
// npm install mocha chai chai-http --save-dev
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

// Assertion Style
// to correctly use the chai functionality for testing
chai.should();
chai.use(chaiHttp);

/* Keyword Describe: 
    Always starts out by describing which API we are testing. 
    Start a new decribe to test a different path for API

    In this case, we are testing API realted to DEVS.
    As seen, all the route starts with /api/dev/

    If we had another API to test, we would start a new Describe function 
    to test out the specific API. 
 */
describe("Devs API", () => {
    // This tells us to test one specific path way.
    // Also, Describe will print out the String in your
    // debugging console. It doesn't do anything but print.
    describe("GET /api/devs/all", () => {
        /* 
            Keyword: it
            Start of the testing and the string will be printed
            out in the console.  
        */
        it("It should get all the dev", (done) => {
            //Chai is requesting the resver to access the HTTP calls
            //Make sure to do module.exports = app.listen( all the code you need
            // should go here to make sure your app is listning to your port);
            chai.request(server)
                // This .get basically tells us to do a GET request on defined path.
                // Think of this as postman GET call.
                .get("/api/devs/all")
                .end((err, response) => {
                    /* This is where the Actually testing begins. 
                       response. is what starts the test calls and you have to 
                       tell the test cases what type of responses I am expected to get
                       when I make the GET request on defined path. 
                       
                       This case, a successful GET request on defined path SHOULD HAVE
                       A STATUS 200. This literally is translated into code you see below
                       to make sure my GET request was successful. I also know that my database
                       schema for all the dev is in form of Array, therefore, response BODY SHOULD BE
                       A Array. Ahe "a" here is NOT in reference to "array", it just has to be there to 
                       complete the testing literal. 

                       You can see my commented out code, If I know for fact, I am ONLY going to get 
                       an array of length 5 and nothing else, I can throw that in there and test to see
                       if GET request ONLY returns array of length 5. 

                       If EITHER one of the case fails, entire test fails. The more test cases you throw down, 
                       the better your unit testing is and stronger your programs becomes as it passes all the test. 
                    */
                    response.should.have.status(200);
                    response.body.should.be.a("array");
                    // response.body.length.should.be.eq(5);

                    // Done is another promise function that tells mocha to finish this GET request. 
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
     * As seen above, All the test cases have similar way to test, from start
     * to finish. Only thing you need to change is describe what type of test
     * you will be doing. TO correctly debug what failed and what passed. 
     */
    describe("GET /api/devs/:id", () => {
        it("It should get a dev by ID", (done) => {
            chai.request(server)
                .get("/api/devs/61b784d58dbcdc79ca4f6c53")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    done();
                });
        });

        // it("It should NOT GET dev by ID", (done) => {
        //     chai.request(server)
        //         .get("/api/devs/1")
        //         .end((err, response) => {
        //             response.should.have.status(422);
        //             response.text.should.be.eq(
        //                 `{"error":"Cast to ObjectId failed for value \\"{ _id: \'1\' }\\" (type Object) at path \\"_id\\" for model \\"dev\\""}`
        //             );
        //             done();
        //         });
        // });
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

        // it("It should NOT GET dev near 100km", (done) => {
        //     chai.request(server)
        //         .get("/api/devs?lng=-20&lat=25")
        //         .end((err, response) => {
        //             response.should.have.status(200);
        //             done();
        //         });
        // });
    });
});

// I would created a new describe function here if i had more API to do different things.
/*
* describe("Users API", () => {

    describe("Get /api/users/all ", () => {

        it("This will get all users", (done) => {
            Do the test cases here
            .
            .
            .
        })
    })
    .
    .
    .
})  
*/
