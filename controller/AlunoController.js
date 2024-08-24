const {json} = require("express");
const Aluno = require("../models/Aluno")

const AlunoController ={
getAll: async(req, res) => {
    res.json( await Aluno.find())
},
get: async(req, res) => {
    try{
        res.json(await Aluno.findById(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},

create: async (req, res) => {
    
    try{
        
        let soma = 0    
        const notas = req.body.notas
        const alunos = req.body.nome
        
        for(let n of notas){
            soma += n 
        }
         const media = soma / notas.length
         
         req.body.media = media
         

         
        res.json( await Aluno.create(req.body))
    } catch(error) {
        res.json(error)
        }
},
update: async(req, res) => {
    
    try{
        res.json(await Aluno.findByIdAndUpdate(req.params.id, req.body))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
},
delete: async(req, res) => {
    
    try{
        res.json(await Aluno.findByIdAndDelete(req.params.id))
    } catch(error) {
        res.status(400).json({error: 'Registro Não Encontrado'})
        }
}
}

module.exports = AlunoController