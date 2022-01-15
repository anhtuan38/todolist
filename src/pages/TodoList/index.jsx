import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addNewTodo, deleteTodo } from "../../redux/actions/todo.actions";
// import Search from './SearchTodo';

import "./TodoList.scss";

function TodoList() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    id: "",
  });
  const listTodo = useSelector((state) => state.todo.listTodo);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(listTodo));
  }, [listTodo]);

  const handleOnSubmit = (value) => {
    if (value.title !== "" && value.description !== "") {
      const action = addNewTodo(value);
      dispatch(action);
    }
  };
  const deleteTodoList = (e, id) => {
    e.preventDefault();
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo-list">
      <div className="todo-list__group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="todo-list__input"
          name="title"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="todo-list__input"
          name="description"
          value={todo.description}
          onChange={(e) =>
            setTodo({ ...todo, description: e.target.value, id: uuidv4() })
          }
        />
        <button className="btn btn-add" onClick={() => handleOnSubmit(todo)}>
          Add todo
        </button>
      </div>
      <div className="todo-list__group">
        <h3 className="todo-list__title">LIST TODO</h3>
        <ul className="todo-list__list">
          {listTodo.map((item) => {
            return (
              <div key={item.id} className="todo-list__item">
                <h5>Title: {item.title}</h5>
                <div>
                  <button onClick={(e) => deleteTodoList(e, item.id)}>
                    Delete
                  </button>
                </div>
                <div>
                  <Link to={`todo/${item.id}`} className="edit">
                    Show more
                  </Link>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
