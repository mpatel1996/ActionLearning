var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const uri =
  "mongodb+srv://test:test@cluster0.n5q90.mongodb.net/todoDb?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.log(err));

var todoSchema = new mongoose.Schema({
  item: String,
});

var Todo = mongoose.model("Todo", todoSchema);

// var data = [
//   { item: "Get Milk" },
//   { item: "Walk Dog" },
//   { item: "Get Lotto Ticket" },
// ];

module.exports = function (app) {
  app.get("/todo", function (req, res) {
    // get data from mongoDb
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render("todo", { todos: data });
    });
  });

  app.post("/todo", urlencodedParser, function (req, res) {
    // get data from view and add it to mongoDb
    var newTodo = Todo(req.body).save(function (err, data) {
      if (err) throw err;
      res.json({ todos: data });
    });
  });

  app.delete("/todo/:item", function (req, res) {
    // Delete request item from mongoDb
    Todo.find({ item: req.params.item.replace(/\-/g, " ") }).deleteOne(function (
      err,
      data
    ) {
      if (err) throw err;
      res.json(data);
    });
  });
};
