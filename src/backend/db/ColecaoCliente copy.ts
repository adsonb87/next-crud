import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import db from "../config copy";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';  


export default class ColecaoCliente implements ClienteRepositorio{

    async salvar(cliente: Cliente): Promise<Cliente> {
        return Cliente.vazio()
    }

    async excluir(cliente: Cliente): Promise<void> {
        
    }

    async obterTodos() {
            const clientesCol = collection(db, 'clientes');
            const clientesSnapshot = await getDocs(clientesCol);
            const clientesList = clientesSnapshot.docs.map(doc => doc.data());
            
            //return cityList;
        
           console.log(clientesList)
    }

}