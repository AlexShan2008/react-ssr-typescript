import React from "react";

export default function Users({ resource }) {
  const users = resource.read();
  return (
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
