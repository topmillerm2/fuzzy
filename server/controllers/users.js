var mongoose = require('mongoose');
var User = mongoose.model('User')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

module.exports = {

    add: (req, res)=>{
        console.log("hit add");
        // console.log(req.body.Email)
        User.find({_id: req.body._id}, (err, gotUser)=>{
            if (gotUser.length >0) {
                console.log("user already exists")
                req.session.userId = gotUser[0]._id;
                res.json(gotUser[0]);
            }else{
                var newUser = new User(req.body);
                newUser.save((err, savedUser)=>{
                    if(err){
                        console.log("something went wrong")
                        res.json(err)
                    }else{
                        console.log("user created")
                        req.session.userId = savedUser._id
                        console.log(req.session.userId)
                        res.json(savedUser)
                    }
                }) 
            }
        })     
    },
    create: (req, res)=>{
        console.log("hit create");
        // console.log(req.session.userId)
        User.findOne({_id: req.session.userId}, (err, gotUser)=>{
            if (err) {
                console.log("couldn't find user")
                res.json(err);
            }else{
                console.log("found user")
                console.log(gotUser)
                console.log(req.body)
                var newQuestion = new Question(req.body);
                newQuestion._user = req.session.userId;
                newQuestion.save((err)=>{
                    if(err){
                        console.log("couldn't create question")
                        res.json(err)
                    }else{
                        console.log("saved question, adding it to user")
                        gotUser.questions.push(newQuestion);
                        gotUser.save((err)=>{
                            if (err){
                                console.log("didn't work")
                                res.json(err);
                            }else{
                                console.log("We made it");
                                console.log(gotUser)
                                res.json(newQuestion)
                            }
                        })
                    }
                }) 
            }
        })     
    },
    get: (req, res)=>{
        console.log("hit get");
        // console.log(req.session.userId)
        Question.find({}).exec((err, gotQuestions)=>{
            if (err) {
                console.log("couldn't find questions")
                res.json(err);
            }else{
                console.log("got questions")
                res.json(gotQuestions)
            }
        })
    },
    retrieve: (req, res)=>{
        console.log("hit retrieve");
        // console.log(req.session.userId)
        User.findOne({_id: req.session.userId}, (err, gotUser)=>{
            if (err) {
                console.log("couldn't find user")
                res.json(err);
            }else{
                console.log("found user")
                console.log(gotUser)
                res.json(gotUser)
            }
        })
    },
    post: (req, res)=>{
        console.log("hit post");
       
        Question.findOne({_id: req.params.id}, (err, gotUser)=>{
            if (err) {
                console.log("couldn't find user")
                res.json(err);
            }else{
                console.log("found user")
                console.log(gotUser)
                console.log(req.body)
                var newAnswer = new Answer(req.body);
                newAnswer.question = req.params.id;
                newAnswer.save((err)=>{
                    if(err){
                        console.log("couldn't create answer")
                        res.json(err)
                    }else{
                        console.log("saved answer, adding it to user")
                        gotUser.answers.push(newAnswer);
                        gotUser.save((err)=>{
                            if (err){
                                console.log("didn't work")
                                res.json(err);
                            }else{
                                console.log("We made it");
                                console.log(gotUser)
                                res.json(newAnswer)
                            }
                        })
                    }
                }) 
            }
        })     
    },
}