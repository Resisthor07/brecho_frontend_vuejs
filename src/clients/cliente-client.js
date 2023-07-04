import axios from   'axios';


export default class ClienteClient {

    axiosCliente = axios;

    constructor() {
        this.axiosCliente = axios.create({ baseURL: 'http://localhost:8090/api/cliente', headers:{'Content-Type': 'application/json'}});
    }

     async cadastrar(cliente) {
         try {
             return(await this.axiosCliente.post('', cliente ))

         }
         catch (error){
             return Promise.reject(error.response)
         }
     }




}
