import InfoProf from "../models/infoProf.js";

async function getInfoProf( req, res ){
    try{
        const infoProfs =  await InfoProf.find();
        return res.status(200).send(infoProfs);
    }catch(error){
        return res.status(404).send('Não foi possivel buscar informacao!');
    }
}

async function createInfoProf( req, res ){
    try{
        const newinfoProf = req.body;
        const info = await InfoProf.create(newinfoProf);
        return res.status(201).send(info);
    }catch(error){
        return res.status(404).send('Não foi possivel criar informacao!');
    }
}

async function updateInfoProf( req, res ){
    try{
        const id = req.params.id;
        const horarioDeAtendimento = req.body.horarioDeAtendimento;
        await InfoProf.findByIdAndUpdate({ "_id": id, "horarioDeAtendimento": horarioDeAtendimento })
        return res.status(200).send('Informacao atualizada com sucesso!');
    }catch(error){
        return res.status(404).send('Informacao nao atualizada com sucesso!');
    }
}

async function deleteInfoProf( req, res ){
    try{
        const id = req.params.id;
        await InfoProf.findByIdAndDelete(id);
        return res.status(200).send('Informacao deletada com sucesso!');
    }catch(error){
        return res.status(404).send('Informacao não encontrada!');
    }
}

function verificaName( createdName, SearchedName ){
    const regex = /^[a-zA-Z\s]+$/;
    const isValid = regex.test(createdName);
    if(isValid){
    if(createdName == SearchedName){     
        return true;
    }
    else{
        return false;
    }
    }else{
        return false;
    }
}
// Horario de funcionamento das 7h até as 19h
function verificaHorario(hora, minutos){
    if((hora >= 7 && hora <= 18) && (minutos < 60 && minutos > 0)){
        return true;
    }else{
        return false;
    }

}

function verificaPeriodo(periodo){
    if(periodo == 'Noturno' || periodo == 'Integral'){
        return true;
    }else
        return false;
}

function verificaPredio(sala){
    if(sala == 1 || sala == 2 || sala == 3 || sala == 4 || sala == 5){
        return 1;
    }
    else if(sala == 6 || sala == 7 || sala == 8 || sala == 9 || sala == 10){
        return 2;
    }
    else if(sala == 11 || sala == 12 || sala == 13 || sala == 14 || sala == 15){
        return 3;
    }
    else if(sala == 16 || sala == 17 || sala == 18 || sala == 19 || sala == 20){
        return 4;
    }
    else if(sala == 21 || sala == 22 || sala == 23 || sala == 24 || sala == 25){
        return 5;
    }
    else{
        return 6;
    }
}   

export { getInfoProf, createInfoProf, updateInfoProf, deleteInfoProf, verificaName, verificaPeriodo, verificaPredio,verificaHorario };