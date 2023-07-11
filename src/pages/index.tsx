import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const clientes = [
    new Cliente('Adson',35,'1'),
    new Cliente('João',35,'2'),
    new Cliente('José',35,'3')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  return (
    <div className={`
          flex h-screen justify-center items-center
          bg-gradient-to-r from-blue-500 to-purple-500
          text-white
      `}>
          <Layout titulo="Cadastro Simples">
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} 
                    clienteExcluido={clienteExcluido}></Tabela>
          </Layout>
    </div>
  )
}
