import axios from 'axios';

function save(user){

    return axios.post(`http://localhost:8090/creerCompte/`, {nom:user.firstName, prenom:user.lastName, username:user.userName, motdepasse:user.password})   

}

const getDetails = (id) =>{
    return axios.get(`http://localhost:8090/PluginsById/`+id)
}

const methods = {save, getDetails}

export default methods;