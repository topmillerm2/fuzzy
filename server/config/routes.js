var Users = require('../controllers/users.js')
var Questions = require('../controllers/users.js')
var Answers = require('../controllers/users.js')

module.exports = (app)=>{
   
    app.post('/add', Users.add);
    app.post('/create', Users.create);
    app.get('/get/all', Questions.get);
    app.get('/get/user', Users.retrieve);
    app.post('post/answer/:id', Users.post);
  

    app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    })
}