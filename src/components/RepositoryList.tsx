import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect, FormEvent } from "react";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

interface User {
  avatar_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [user, setUser] = useState<User>([]);
  const [input, setInput] = useState("");
  
  function handleSubmit(e: FormEvent){
    e.preventDefault();
    
    fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => setUser(data));

    fetch(`https://api.github.com/users/${input}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }

  return (
    <section className="repository-list">
      <img src={user.avatar_url} alt="" />
      
      <h1>Lista de repositórios</h1>

      <form>
        <input onChange={(e)=> setInput(e.target.value)} value={input} id="search" type="text" placeholder="Nome de usuário do Github"/>
        <button onClick={handleSubmit} type="submit">Pesquisar</button>
      </form>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
