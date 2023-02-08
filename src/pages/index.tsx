import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  );
}
