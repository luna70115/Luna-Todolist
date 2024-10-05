import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import logo from "../../assets/img/logo.svg";
import personTwo from "../../assets/img/black-person-two.png";
import "./style.scss";

const TodoSchema = z.object({
  list: z.string(),
});

export function Todolist() {
  const [todolist, setTodolist] = useState([]);
  const [tab, setTab] = useState("all");
  const nextId = useRef(1);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TodoSchema),
  });

  function addTodo({ list }) {
    setTodolist([
      ...todolist,
      { id: nextId.current++, list: list, checked: false },
    ]);
    reset();
  }

  function checked(id) {
    setTodolist(
      todolist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  const filteredTodolist = todolist.filter((item) => {
    if (tab === "all") return true;
    if (tab === "work") return !item.checked;
    if (tab === "done") return item.checked;
  });
  const length = todolist.filter((item) => !item.checked).length;
  return (
    <>
      <div className="todolist">
        <div className="todolist__browse">
          <img className="todolist__browse-logo" src={logo} alt="" />
          <div className="todolist__browse-box">
            <p className="todolist__browse-name">王小明的代辦</p>
            <Link to={`/login`} className="todolist__browse-out">
              登出
            </Link>
          </div>
        </div>

        <form className="todolist__add" onSubmit={handleSubmit(addTodo)}>
          <input
            className="todolist__add-input"
            type="text"
            placeholder="新增待辦事項"
            {...register("list", { required: "請輸入待辦事項" })}
          />
          {errors.list && (
            <p className="error-message">{errors.list.message}</p>
          )}
          <button className="todolist__add-button" type="submit">
            +
          </button>
        </form>

        {todolist.length === 0 ? (
          <div className="todolist__nolist">
            <p className="todolist__nolist-title">目前尚無待辦事項</p>
            <img className="todolist__nolist-img" src={personTwo}></img>
          </div>
        ) : (
          <div className="todolist__card card_list">
            <ul className="todolist__tab">
              <li
                className={`todolist__li ${tab === "all" ? `active` : null}`}
                onClick={() => setTab("all")}
              >
                全部
              </li>
              <li
                className={`todolist__li ${tab === "work" ? `active` : null}`}
                onClick={() => setTab("work")}
              >
                待完成
              </li>
              <li
                className={`todolist__li ${tab === "done" ? `active` : null}`}
                onClick={() => setTab("done")}
              >
                已完成
              </li>
            </ul>
            <div className="todolist__content">
              <ul className="todolist__list">
                {filteredTodolist.map((item) => (
                  <li key={item.id}>
                    <label className="todolist__checkbox">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => checked(item.id)}
                      />
                      <span>{item.list}</span>
                    </label>
                    <a
                      href="#"
                      className="delete"
                      onClick={() => {
                        setTodolist(todolist.filter((a) => a.id !== item.id));
                      }}
                    ></a>
                  </li>
                ))}
              </ul>
              <div className="todolist__footer">
                <p>{length} 個待完成項目</p>
                <a
                  href="#"
                  onClick={() =>
                    setTodolist(todolist.filter((item) => !item.checked))
                  }
                >
                  清除已完成項目
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
