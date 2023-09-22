import mongoose, { Schema } from 'mongoose';

const infoSchema = new Schema({
    
    nomeDoProfessor:{
         type: String,
         required: true
    },
    horarioDeAtendimento: {
        type: String, 
        required: true
    },
    periodo:{
        type: String,
        required: true
    },
    sala:{
        type: Number,
        required: true
    },
    predio:{
        type: Array,
        required: true
    },    
},{versionKey: false})


export default mongoose.model('infoProf', infoSchema);