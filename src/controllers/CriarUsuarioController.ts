import Cliente from "@/core/Cliente";
import { CriarUsuarioService } from "@/services/CriarUsuarioService";
import exp from "constants";

class CriarUsuarioController{
    async handle (cliente: Cliente){
        const criarUsuarioService = new CriarUsuarioService();

        const clienteNovo = await criarUsuarioService.execute(cliente);

        return clienteNovo;
    }
}

export { CriarUsuarioController }