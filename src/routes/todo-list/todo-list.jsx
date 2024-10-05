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
      <div className="todolist__add">
        <input
          className="todolist__add-input"
          type="text"
          name=""
          id=""
          placeholder="新增待辦事項"
        />
        <button className="todolist__add-button" href="">
          +
        </button>
      </div>
      <div className="todolist__card card_list">
        <ul className="todolist__tab">
          <li className="todolist__li active">全部</li>
          <li className="todolist__li">待完成</li>
          <li className="todolist__li">已完成</li>
        </ul>
        <div className="todolist__content">
          <ul className="list">
            <li>
              <label className="checkbox">
                <input type="checkbox" />
                <span>把冰箱發霉的檸檬拿去丟</span>
              </label>
              <a href="#" className="delete"></a>
            </li>
          </ul>
          <div className="todolist__footer">
            <p>5 個待完成項目</p>
            <a className="todolist__footer-a" href="#">
              清除已完成項目
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
