import React from "react";
import Header from "../components/ui/Header";
import List from "../components/todos/List";
import { Form } from "../components/todos/Form";

export const Home = () => {
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  );
};
export default Home;
