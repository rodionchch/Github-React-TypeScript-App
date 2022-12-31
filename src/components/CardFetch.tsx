import React, { useEffect, useState } from "react";
import { IUser } from "models/models";
import Card from "./Card";

const CardFetch: React.FC<{ username: string }> = ({ username }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (user) return <Card user={user} />;

  return null;
};

export default CardFetch;
