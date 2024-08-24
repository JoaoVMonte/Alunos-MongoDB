const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    nome:  {
        type: String,
    },
    turma: {
        enum: ["A","B","C","D","E"]
        
    },
    notas: [{
        type: Number,
        min:[0 , "Valor baixo"],
        max:[10, "Valor Alto"]
    }],


    media: Number


})

const Aluno = mongoose.model('Aluno', Schema)
module.exports = Aluno;