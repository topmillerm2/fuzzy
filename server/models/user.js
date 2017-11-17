let mongoose= require('mongoose');
var Schema = mongoose.Schema;


let UserSchema = mongoose.Schema({
    Name: {type: String, required:true} ,
    questions: [{ type: Schema.Types.ObjectId, ref: "Question"}],
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer", default: 0}]
}, {timestamps: true});


let QuestionSchema = mongoose.Schema({
    Title: {type: String, required:true},
    Description: {type: String},
    _user: { type: Schema.Types.ObjectId, ref: "User"},
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer", default: 0}]

}, {timestamps: true})

let AnswerSchema = mongoose.Schema({
    Title: {type: String, required:true},
    Description: {type: String},
    Likes: {type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: "User"},
    _question: { type: Schema.Types.ObjectId, ref: "Pregunta"}

}, {timestamps: true})

mongoose.model('User', UserSchema);
mongoose.model('Question', QuestionSchema);
mongoose.model('Answer', AnswerSchema);