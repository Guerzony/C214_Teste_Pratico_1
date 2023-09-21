import mongoose from 'mongoose';

function databaseConnection(){
    try{
    mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected');
    }catch(error){
        console.log('Erro: '+ error);
    }
}

export default databaseConnection;