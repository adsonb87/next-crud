import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import {db} from "../db"


export default class ColecaoCliente implements ClienteRepositorio{

    
    async salvar(cliente: Cliente): Promise<Cliente> {
      return Cliente.vazio()
    }

    async excluir(cliente: Cliente): Promise<void> {
       
    }

    async obterTodos() {      
        const q = "SELECT * FROM clientes"

        db.query(q)
       
    }


}