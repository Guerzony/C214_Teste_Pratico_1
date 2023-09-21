import mongoose, {Schema} from 'mongoose';

const infoProf = new Schema({
    
    nomeDoProfessor:{
         type: String,
         required: true
    },
    horadioDeAtendimento: {
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
    }    
})


export default mongoose.model('informationProfessor', infoProf);