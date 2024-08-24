const mongoose = require('mongoose');

async function main(){
    try{
        await mongoose.connect(`mongodb+srv://:@cluster0.vl5dyzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('banco Ok');
    } catch(error){
        console.log('erro: ' + error);

    }
}

module.exports = main