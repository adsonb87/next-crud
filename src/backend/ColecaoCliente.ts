import { CriarUsuarioController } from "../../controllers/CriarUsuarioController";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio{
  
    async salvar(cliente: Cliente): Promise<Cliente> { 
      console.log(cliente)
        
      const criarUsuarioController = new CriarUsuarioController()

      const clienteNovo = criarUsuarioController.handle(cliente)
      
      console.log(clienteNovo)

      return Cliente.vazio()
    }

    



    async excluir(cliente: Cliente): Promise<void> {
       
    }

    async obterTodos() {      
        //const clientes = await prisma.cliente.findMany()
        //console.log(clientes)
    }


}