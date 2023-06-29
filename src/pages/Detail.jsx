import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  const todo = todos.filter((todo) => {
    todo.id === id[0];
  });

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로 가기
      </button>
    </div>
  );
}

export default Detail;
