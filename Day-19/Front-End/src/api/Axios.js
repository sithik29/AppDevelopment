import axios from 'axios';

const TEAMCONNECT_API_BASE_URL= "http://localhost:8080/api/v1";
 

class UserService {
  
    createUser(user){
        return axios.post(TEAMCONNECT_API_BASE_URL + '/auth/register', user).then(res=>res.data);
    }

    loginUser(user){
        return axios.post(TEAMCONNECT_API_BASE_URL + '/auth/login' , user).then(res=>res.data);
    }
}

export default new UserService();