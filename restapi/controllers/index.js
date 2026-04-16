const models = require("../database/models");

const createPlanta = async (req, res) => {
        try {
                const planta = await models.Planta.create(req.body);
                return res.status(201).json({
                        planta
                });
        }catch (error){
                return res.status(500).json({error: error.message});
        }
};

const getAllPlanta = async (req, res) => {
        console.log('getting planta');
        try{
                const planta = await models.Planta.findAll({
                        include: []
                });
                return res.status(200).json({ planta });
        }catch(error) {
                return res.status(500).send(error.message);
        }
};


const deletePlanta = async (req, res) => {
        console.log('deleting planta...');
        try {
                const planta = await models.Planta.findByPk(req.params.id);
                if(!planta){
                        return res.status(404).json({ error: 'planta not found'});
                }
                await planta.destroy();
                return res.status(200).json({ message: 'planta deleted succefully'});
        }catch(error){
                return res.status(500).json( { error: error.message});
        }
};


const update = async (req, res)=> {
        console.log('Updating planta ..');
        try{
                const planta = await models.Planta.findByPk(req.params.id);
                if(!planta){
                        return res.status(404).json({ error: "planta not found"});
                }
                await planta.update(req.body);
                return res.status(200).json( { planta });
        }catch(error){
                return res.status(500).json({error: error.message });
        }
}

const getPlantaById = async (req, res) => {
        console.log('geting planta by id ...');
        try{
                const planta = await models.Planta.findByPk(req.params.id);
                if(!planta){
                        return res.status(404).json( { error: 'planta not found '});
                }
                return res.status(200).json({ planta });
        }catch(error){
                return res.status(500).json({ error: error.message });
        }
}

const uploadImage = async (req, res) => {
    try {
        console.log("FILE:", req.file);
        console.log("BODY:", req.body);

        if (!req.file) {
            return res.status(400).json({ error: "No se subió imagen" });
        }

        const planta = await models.Planta.create({
            nombre_comun: req.body.nombre_comun,
            nombre_cientifico: req.body.nombre_cientifico,
            descripcion: req.body.descripcion,
            imagen: req.file.path
        });

        return res.status(201).json({ planta });

    } catch (error) {
        console.error("ERROR REAL:", error.message);
console.error("STACK:", error.stack);

console.log("FILE:", req.file);
console.log("BODY:", req.body);
        return res.status(500).json({ error: error.message });
    }
};
module.exports = {
        createPlanta,
        getAllPlanta,
        getPlantaById,
        update,
        deletePlanta,
        uploadImage
}
