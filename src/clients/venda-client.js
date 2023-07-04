import axios from 'axios';


export default class VendaClient {

    axiosCliente = axios;

    constructor() {
        this.axiosCliente = axios.create({
            baseURL: 'http://localhost:8090/api/venda',
            headers: { 'Content-Type': 'application/json' }
        });
    }

    async cadastrar(cliente) {
        try {
            return (await this.axiosCliente.post('', cliente))
        }
        catch (error) {
            return Promise.reject(error.response)
        }
    }




}
