import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

  useEffect(obterTodos, [])

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos
    exibirTabela()
  }

  function novoCliente() {
    exibirFormulario()
    setCliente(Cliente.vazio())
  }

  return {
    tabelaVisivel,
    formularioVisivel,
    exibirTabela,
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    obterTodos,
    selecionarCliente
  }
}
