import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layouts";
import Tabela from "@/components/Tabela";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import useClientes from "@/hooks/useClientes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { cliente, clientes, novoCliente, excluirCliente, selecionarCliente, salvarCliente, tabelaVisivel, exibirTabela} = useClientes()

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="blue" onClick={novoCliente}>Novo cliente</Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={exibirTabela} />
        )}
      </Layout>
    </div>
  );
}
