import apiHttp from '../apiclient/http-common';

class dataApi(){
    getAllData(){
        return apiHttp.get('/product')
    }
}

export default  new dataApi();