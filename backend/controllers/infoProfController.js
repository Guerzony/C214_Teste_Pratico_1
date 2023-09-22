import InfoProf from "../models/infoProf.js";

async function getInfoProf( req, res ){
    const infoProfs =  await InfoProf.find();
    return res.status(200).send(infoProfs);
}

async function createInfoProf( req, res ){
    const newinfoProf = req.body;
    const info = await InfoProf.create(newinfoProf);
    return res.status(201).send(info);
}

async function updateInfoProf( req, res ){
    const id = req.params.id;
    const horarioDeAtendimento = req.body.horarioDeAtendimento;
    await InfoProf.findByIdAndUpdate({ "_id": id, "horarioDeAtendimento": horarioDeAtendimento })
    return res.status(200).send('Informacao atualizada com sucesso!');
}

async function deleteInfoProf( req, res ){
    const id = req.params.id;
    await InfoProf.findByIdAndDelete(id);
    return res.status(200).send('Informacao deletada com sucesso!');
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

export { getInfoProf, createInfoProf, updateInfoProf, deleteInfoProf, verificaName, verificaPeriodo, verificaPredio };