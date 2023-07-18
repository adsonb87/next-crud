import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import prisma from "../../prisma/index"

export default class ColecaoCliente implements ClienteRepositorio{
  
    async salvar(cliente: Cliente): Promise<Cliente> { 
      console.log(cliente)
      
      const clienteDB = await prisma.cliente.create({
        data:{
          nome: cliente.nome,
          idade: cliente.idade,
        },
      })

  
      return Cliente.vazio()
    }

    



    async excluir(cliente: Cliente): Promise<void> {
       
    }

    async obterTodos() {      
        //const clientes = await prisma.cliente.findMany()
        //console.log(clientes)
    }


}