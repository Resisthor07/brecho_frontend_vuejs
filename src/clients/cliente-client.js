import axios from   'axios';


export default class ClienteClient {

    axiosCliente = axios;

    constructor() {
        this.axiosCliente = axios.create({ baseURL: 'http://localhost:8087/api/cliente', headers:{'Content-Type': 'application/json'}});
    }

     async cadastrarCliente(cliente) {
         try {
             return(await this.axiosCliente.post('/addCliente', cliente ))

         }
         catch (error){
             return Promise.reject(error.response)
         }
     }




}
