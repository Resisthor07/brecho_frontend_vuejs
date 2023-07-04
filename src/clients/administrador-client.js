import axios from   'axios';


export default class administradorClient {

    axiosAdministrador = axios;

    constructor() {
        
        this.axiosAdministrador = axios.create({ 
            baseURL: 'http://localhost:8087/api/administrador', 
            headers:{'Content-Type': 'application/json'}
        });
    }

     async login(Administrador) {
         try {
             return(await this.axiosAdministrador.post('/login', Administrador ))

         }
         catch (error){
             return Promise.reject(error.response)
         }
     }




}