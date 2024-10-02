import logo from "../../assets/img/logo.svg";
import "./style.scss";
export function Todolist() {
  return (
    <div className="todolist">
      <div className="todolist__browse">
        <img className="todolist__browse-logo" src={logo} alt="" />
        <div className="todolist__browse-box">
          <p className="todolist__browse-name">王小明的代辦</p>
          <a className="todolist__browse-out">登出</a>
        </div>
      </div>
      <div className="add">
        <input
          className="add__input"
          type="text"
          name=""
          id=""
          value="新增待辦事項"
        />
        <button className="add__button" href="">
          +
        </button>
      </div>
    </div>
  );
}
