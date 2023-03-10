import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layouts";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Elena', 4, '2'),
    new Cliente('Emily', 1, '3'),
  ]

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}
