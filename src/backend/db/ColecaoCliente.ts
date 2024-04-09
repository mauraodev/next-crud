import { QueryDocumentSnapshot, SnapshotOptions, collection, deleteDoc, doc, getDocs, updateDoc, addDoc } from "firebase/firestore";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import db from "../config";

export default class ColecaoCliente implements ClienteRepositorio {
  public clienteConverter = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      }
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
      const dados = snapshot.data(options)
      return new Cliente(dados.nome, dados.idade, snapshot.id)
    }
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      const clienteRef = doc(this.colecao(), cliente.id)

      await updateDoc(clienteRef, {
        nome: cliente.nome,
        idade: cliente.idade
      })
    } else {
      await addDoc(this.colecao(), cliente)
    }

    return cliente
  }

  async excluir(cliente: Cliente): Promise<void> {
    return await deleteDoc(doc(this.colecao(), cliente.id))
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await getDocs(this.colecao())
    return query.docs.map(doc => doc.data()) || []
  }

  protected colecao() {
    return collection(db, 'clientes').withConverter(this.clienteConverter)
  }
}
