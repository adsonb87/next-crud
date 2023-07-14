import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())



  const clientes = [
    new Cliente('Adson',35,'1'),
    new Cliente('João',35,'2'),
    new Cliente('José',35,'3')
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }


  return (
    <div className={`
          flex h-screen justify-center items-center
          bg-gradient-to-r from-blue-500 to-purple-500
          text-white
      `}>
          <Layout titulo="Cadastro Simples">
            {visivel === 'tabela' ? (
              <>
                <div className="flex justify-end">
                  <Botao className="mb-4" cor="green" onClick={novoCliente}>
                    Novo Cliente
                  </Botao>
                </div>
                <Tabela clientes={clientes} 
                        clienteSelecionado={clienteSelecionado} 
                        clienteExcluido={clienteExcluido}/>
              </>
            ) : (
              <Formulario cliente={cliente}
                          cancelado={() => setVisivel('tabela')}
                          clienteMudou={salvarCliente}
                          />
            )}         
          </Layout>
    </div>
  )
}
