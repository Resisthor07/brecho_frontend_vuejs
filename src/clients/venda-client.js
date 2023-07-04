import axios from 'axios';


export default class VendaClient {

    axiosCliente = axios;

    constructor() {
        this.axiosCliente = axios.create({
            baseURL: 'http://localhost:8087/api/venda',
            headers: { 'Content-Type': 'application/json' }
        });
    }

    async cadastrar(venda) {
        try {
            return (await this.axiosCliente.post('', venda))
        }
        catch (error) {
            return Promise.reject(error.response)
        }
    }

    async altera(cliente) {
        try{
            return (await this.axiosCliente.put('', cliente))
        }catch (error){
            return Promise.reject(error.response)
        }
    }


}
