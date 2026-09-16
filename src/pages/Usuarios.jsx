import useSWR from "swr";
import { fetcher } from "../fetcher";

const Usuarios = () => {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

  if (error) return <div>Falha ao carregar os usuários.</div>;

  return (
    <div>
      <h2>Usuários</h2>
      <p>Dados requisitados por API</p>
      <div>{isLoading ? "Carregando..." : JSON.stringify(data)}</div>
      <ul>{data && data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}</ul>

    </div>
  );
};

export default Usuarios;