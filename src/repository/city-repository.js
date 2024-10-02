const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){    // {name: 'Delhi'}
        try{
            const city = await City.create({name});
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer")
            throw {Error};
        }
    }
    async deleteCity({cityId}){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        }   catch(error){
            throw {Error};
        }
    }
    async updateCity(cityId, data){
        try{
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {Error};
        }
    }
    
    async getCity(cityId) {
        try{
            const city = await City.findBtPk(cityId);
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {Error};
        }

    }
}

module.exports = CityRepository;