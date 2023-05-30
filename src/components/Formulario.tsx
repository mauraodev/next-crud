import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
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
        <Botao className="mr-2">{id ? "Alterar" : "Salvar"}</Botao>
        <Botao cor="blue">Cancelar</Botao>
      </div>
    </div>
  );
}
