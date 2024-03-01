import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void
  clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? "");

  return (
    <div>
      {id ? <Entrada texto="Código" valor={id} somenteLeitura /> : false}
      <Entrada texto="Nome" valor={nome} valorMudou={setNome} />
      <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade} />

      <div className="flex justify-end mt-5">
        <Botao className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>{id ? "Alterar" : "Salvar"}</Botao>
        <Botao cor="blue" onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
