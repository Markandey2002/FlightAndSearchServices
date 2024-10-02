const {CityRepository} = require('../repository/index');


class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity({name}) {
        try {
            const city = await this.cityRepository.createCity({name: name});
            return city;
        } catch (error) {   
            console.log("something went wrong in the service layer");   
        }
    }
    async deleteCity({cityId}) {
        try {
            const city = await this.cityRepository.deleteCity({cityId: cityId});
            return city;
        } catch (error) {   
            console.log("something went wrong in the service layer");   
        }
    }
    async updateCity(cityId, data) {
        try {   
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {   
            console.log("something went wrong in the service layer");   
        }        
    }
    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {   
            console.log("something went wrong in the service layer");   
        }
    }        

}

module.exports = CityService;