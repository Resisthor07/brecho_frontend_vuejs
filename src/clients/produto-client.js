import axios from   'axios';


export default class ProdutoClient {

    axiosCliente = axios;

    constructor() {
        this.axiosCliente = axios.create({ baseURL: 'http://localhost:8087/api/produto', headers:{'Content-Type': 'application/json'}});
    }

    async cadastrarProduto(produto) {
        try {
            return(await this.axiosCliente.post('', produto ))
        }
        catch (error){
            return Promise.reject(error.response)

        }
    }

    async listarProdutos() {
        try {
            return(await this.axiosCliente.get('/all')).data
        }
        catch (error){
            return Promise.reject(error.response)

        }
    }

}
