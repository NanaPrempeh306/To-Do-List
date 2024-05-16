const  express = require("express");
const bodyParser = require("body-parser");
const path = require('path');


const app = express();

var items = ["Buy foodstuffs from the market", "Cook the food", "Eat the food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
 
  var today = new Date();
  
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });
});

app.post("/", function(req, res){
  var item=req.body.newItem;

  items.push(item);
 
  res.redirect("/");
});




app.listen(3000, function(){
  console.log("Server started on port 3000");
});