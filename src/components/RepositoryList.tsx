import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  interface Repository {
    name: string;
    description: string;
    html_url: string;
  }

  useEffect(() => {
    fetch("https://api.github.com/users/gabrielHidro/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
