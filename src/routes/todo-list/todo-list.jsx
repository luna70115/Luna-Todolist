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
      {/* <div className="card">
        <ul className="card__tab">
          <li className="card__tab-state">全部</li>
          <li className="card__tab-state">待完成</li>
          <li className="card__tab-state">已完成</li>
        </ul>
        <div className="list">
          <li className="list__list">
            <label htmlFor="">
              <input className="list__checkbox" type="checkbox" />
              <span className="list__task">把冰箱發霉的檸檬拿去丟</span>
            </label>

            <a className="list__delete" href="">
              X
            </a>
          </li>
        </div>
      </div> */}
    </div>
  );
}
