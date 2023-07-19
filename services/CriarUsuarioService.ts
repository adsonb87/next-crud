import Cliente from "@/core/Cliente";
import prisma from "../src/pages/api/prisma/index";

class CriarUsuarioService{
    async execute(cliente: Cliente){
        const clienteDB = await prisma.cliente.create({
            data:{
                nome: cliente.nome,
                idade: cliente.idade,
            }
        })

        return clienteDB;
    }
}

export { CriarUsuarioService }