import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import "./App.css";

const GET_GENRES = gql`
  query {
    genres {
      genres {
        name
      }
    }
  }
`;

const Genre = (name: string) => (
  <div className="Card">
    <div>
      <h1 className="Card--name">{name}</h1>
    </div>
  </div>
);

export default function App() {
  const { data, loading, error } = useQuery(GET_GENRES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
}
