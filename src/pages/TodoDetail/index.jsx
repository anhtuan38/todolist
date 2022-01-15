import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editTodo, getTodo } from "../../redux/actions/todo.actions";
function TodoDetail(props) {
  let { id } = useParams();
  const [edit, setEdit] = useState(false);
  const detailTodo = useSelector((state) => state.todo.todoDetail);
  const [value, setValue] = useState({
    title: detailTodo.title,
    description: detailTodo.description,
    id: id,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo(id));
  }, [edit]);

  const handleOnEdit = () => {
    dispatch(editTodo(value));
    setEdit(false);
  };
  return (
    <div className="todo-list">
      <h3>TODO DETAIL</h3>
      {detailTodo ? (
        edit ? (
          <div className="todo-list__group">
            <label htmlFor="title">Title</label>
            <input
              placeholder="Title..."
              type="text"
              className="todo-list__input"
              name="title"
              value={value.title}
              onChange={(e) => setValue({ ...value, title: e.target.value })}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Description..."
              className="todo-list__input"
              name="description"
              value={value.description}
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
            />
          </div>
        ) : (
          <div>
            <div className="title">Title: {detailTodo.title}</div>
            <div className="description">
              Description: {detailTodo.description}
            </div>
          </div>
        )
      ) : (
        <div>not found!</div>
      )}

      {edit ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            className="btn btn-add"
            style={{ width: "20%" }}
            onClick={() => handleOnEdit()}
          >
            Change
          </button>
          <button
            className="btn btn-add"
            style={{ width: "20%" }}
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="btn btn-add"
          style={{
            width: "80px",
            marginTop: "20px",
            padding: "5px 10px",
          }}
          onClick={() => setEdit(true)}
        >
          Edit
        </button>
      )}

      <Link to="/">
        <button>Go home</button>
      </Link>
    </div>
  );
}

export default TodoDetail;
