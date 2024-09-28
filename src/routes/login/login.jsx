import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../assets/img/logo.svg";
import blackPerson from "../../assets/img/black-person.png";
import { Input } from "../../ui/input/input";
import { Button } from "../../ui/button/button";
import "./style.scss";
import { Link } from "react-router-dom";

const LonginSchema = z.object({
  email: z.string().email({ message: "無效的信箱，請重新輸入" }),
  password: z
    .string()
    .min(5, { message: "暱稱不得小於5個字" })
    .max(20, { message: "暱稱不得超過20個字" }),
});

export function Longin() {
  return (
    <div className="longin">
      <div className="longin__left">
        <img className="longin__logo-desktop" src={logo} alt="" />
        <img className="longin__person" src={blackPerson} alt="" />
      </div>
      <div className="longin__right">
        <img className="longin__logo-mobile" src={logo} alt="" />
        <h1 className="longin__heading">最實用的線上代辦事項服務</h1>
        <div className="longin__input-box">
          <Input
            label="Email"
            placeholder="請輸入Email"
            error="此欄位不可為空"
          />
          <Input label="Password" placeholder="請輸入密碼" />
        </div>
        <div className="longin__button-box">
          <Button text="登入" className="longin__button">
            登入
          </Button>
          <Link to={"/register"} className="longin__text">
            註冊帳號
          </Link>
        </div>
      </div>
    </div>
  );
}
