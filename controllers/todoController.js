var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

var items = [{
                item: 'get tofu'
            },
            {
                item: 'walk dog'
            },
            {
                item: 'Code something exciting!'
            }];

  module.exports = function(app) {

  app.get("/todo", function(req, res){
    res.render("todo",{ todos : items })
  });

  app.post("/todo", urlencodedParser, function(req, res){
    items.push({item: req.body.item });
    res.render("todo",{ todos : items })
    //res.json(items);
  });

  app.delete("/todo/:index", function(req, res){
    items.splice(req.params.index,1);
    res.render("todo",{ todos : items })
    //res.json(items);
  });
};