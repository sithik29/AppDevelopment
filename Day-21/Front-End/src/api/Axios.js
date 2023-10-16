import axios from 'axios';

const TEAMCONNECT_API_BASE_URL= "http://localhost:8080/api/v1";

   

const config = {
    headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type':'application/json'    
    }
  };

class UserService {
  
    createUser(user){
        return axios.post(TEAMCONNECT_API_BASE_URL + '/auth/register', user).then(res=>res.data);
    }

    loginUser(user){
        return axios.post(TEAMCONNECT_API_BASE_URL + '/auth/login' , user).then(res=>res.data);
    }

    adminLogin(user){
        return axios.post(TEAMCONNECT_API_BASE_URL + '/auth/adminLogin' , user).then(res=>res.data);
    }

    updateUser(id,user){
        console.log(config);
        return axios.put(TEAMCONNECT_API_BASE_URL+'/user/edit/'+id,user,config).then(res => res.data)
    }

    getAllUser(){
        return axios.get(TEAMCONNECT_API_BASE_URL+'/user/get',config).then(res => res.data)
    }
    
    getUserById(id){
        return axios.get(TEAMCONNECT_API_BASE_URL+'/user/find/'+id,config).then(res => res.data)
    }

    //PROJECTS

    createProject(obj,name){
        return axios.post(TEAMCONNECT_API_BASE_URL+`/project/createProject?name=${name}`,obj,config).then(res=>res.data)
    }

    getAllProjects(){
        return axios.get(TEAMCONNECT_API_BASE_URL+'/project/getAllProject',config).then(res => res.data)
    }

    getProjectById(id){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/project/getProjectById/"+id,config).then(res=>res.data)
    }

    getUserCount(){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/user/getUserCount",config).then(res=>res.data);
    }
    postProject(formData,id,tid){
        return axios.post(TEAMCONNECT_API_BASE_URL+`/project/uploadProject/${id}/${tid}`,formData,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`,
                'Content-Type':'application/pdf'    
            }
          }).then(res=>res.data)
    }
    deleteProject(id){
        const r = axios.delete(TEAMCONNECT_API_BASE_URL+"/project/deleteProject/"+id,config).then(res=>res.then)
        return r;
    }

    getProjectCount(){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/project/getProjectCount",config).then(res=>res.data);
    }

    //Tasks
    getTaskCountById(id){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/task/getTaskCount/"+id,config).then(res=> res.data)
    }
    
    getCompletedTaskCountById(id){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/task/getCompletedTaskCount/"+id,config).then(res=> res.data)
    }

    getAssignedTaskById(id){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/task/getTaskById/"+id,config).then(res=> res.data)
    }
    getCompletedTaskById(id){
        return axios.get(TEAMCONNECT_API_BASE_URL+"/task/getCompletedTask/"+id,config).then(res=> res.data)
    }
}

export default new UserService();