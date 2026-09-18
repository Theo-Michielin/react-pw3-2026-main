import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsuarioDetalhe = () => {
  // Extrair ID da URL

  const { id } = useParams();

  // Estados para controloar os dados do usuário e o estado de carregamento
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarUsuario() {
      try {
        setCarregando(true);
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const jsonData = await data.json();

        setUsuario(jsonData);
      } catch(erro) {
        console.error("Erro ao buscar usuário:", erro);
      } finally {
        setCarregando(false);
      }

    }
    buscarUsuario();
  }, [id]); // ID é o parâmetro a ser observado, quando o parâmetro mudar, o useEffect vai ser executado novamente

  return(
    <div>
      <h2>Detalhes do Usuário:</h2>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          <li>Nome: {usuario.name}</li>
          <li>Email: {usuario.email}</li>
        </ul>
      )}
    </div>
  )
}

export default UsuarioDetalhe;