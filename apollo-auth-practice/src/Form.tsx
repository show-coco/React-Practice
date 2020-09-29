import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from ".";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signIn, { loading, error }] = useMutation(SIGN_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn({
      variables: {
        email,
        password,
      },
    });
    if (!res.data.length) {
      console.log("ログイン成功");
    }
    console.log("ログイン失敗");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button>ログイン</button>
    </form>
  );
};

export default Form;
