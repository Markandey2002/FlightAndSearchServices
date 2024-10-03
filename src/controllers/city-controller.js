const {CityService} = require('../services/index');

const cityService = new CityService();


/**
 * 
 * POST 
 * data -> req.body 
 */

const create = async (req, res) => {
    try { 
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "City created successfully",
            err : {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Something went wrong",
            err : error 
        });
    }
}

// DELETE. -> /CITY/:ID
const destroy = async (req, res) => {
    try {
        
        const response = cityService.deleteCity(req.params.cityId);
        return res.status(200).json({
            data : city,
            success : true,
            message : "City deleted successfully",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete the city",
            err : error
        });
    }
}


// GET -> /city/:id
const get = async (req, res) => {
    try {   
        const response = cityService.getCity(req.params.cityId);
        return res.status(200).json({
            data : city,
            success : true,
            message : "City fetched successfully",
            err : {}
        }) ;   
    } catch (error) {   
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to fetch the city",
            err : error
        });
    }
}   

// Patch -> /city/:id -> req.body
const update = async (req, res) =>{
    try {
        const response = cityService.updateCity(req.params.cityId, req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : "City updated successfully",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the city",
            err : error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update
}