import axios from   'axios';


export default class ProdutoClient {

    axiosCliente = axios;

    constructor() {
        this.axiosCliente = axios.create({
            baseURL: 'http://localhost:8080/api/produto',
            headers: {'Content-Type': 'application/json'}
        });
    }

    async cadastrarProduto(produto) {
        try {
            return (await this.axiosCliente.post('', produto))
        } catch (error) {
            return Promise.reject(error.response)

        }
    }

    async listarProdutos() {
        try {
            return (await this.axiosCliente.get('/all')).data
        } catch (error) {
            return Promise.reject(error.response)

        }


    }

    async findById(id) {
        try {
            return (await this.axiosCliente.get(`/${id}`)).data
        } catch (error) {
            return Promise.reject(error.response)

        }
    }

    async findByTipo(tipo) {
        try {
            return (await this.axiosCliente.get(`?tipo=${tipo}`)).data
        } catch (error) {
            return Promise.reject(error.response)

        }
    }
}


