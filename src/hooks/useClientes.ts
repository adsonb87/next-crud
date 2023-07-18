import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"
import db from "../backend/config"
import { getDocs, collection } from 'firebase/firestore'

export default function useClientes(){
  const repo: ClienteRepositorio = new ColecaoCliente()
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([]) 

  const {exibirTabela, exibirFormulario, tabelaVisivel, formularioVisivel} = useTabelaOuForm()

  useEffect(obterTodos,[])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    exibirFormulario()
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    exibirTabela()
  }

  return {
    cliente,
    clientes,
    obterTodos,
    clienteSelecionado,
    clienteExcluido,
    novoCliente,
    salvarCliente,
    exibirFormulario,
    exibirTabela,
    tabelaVisivel,
    formularioVisivel
  }
}