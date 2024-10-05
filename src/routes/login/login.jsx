import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { fetcher } from "../../api/fetcher";
import { LoginApiSchema } from "../../api/login";
import { Input } from "../../ui/input/input";
import { Button } from "../../ui/button/button";
import { Modal } from "../../ui/modal/modal";
import logo from "../../assets/img/logo.svg";
import blackPerson from "../../assets/img/black-person.png";
import "./style.scss";

const LoginSchema = z.object({
  email: z.string().email({ message: "請輸入您的信箱" }),
  password: z.string().min(6, { message: "請輸入您的密碼" }),
});

export function Login() {
  const [isOpenErrorModal, setisOpenErrorModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = (data) => {
    const rawData = {
      user: {
        email: data.email,
        password: data.password,
      },
    };
    const apiData = LoginApiSchema.parse(rawData);

    fetcher({
      url: "users/sign_in",
      method: "POST",
      data: apiData,
    })
      .then((response) => {
        console.log(response);
        navigate("/todo-list");
      })
      .catch((error) => {
        console.log(error);
        setisOpenErrorModal(true);
      })
      .finally(() => setIsLoading(false));
    setIsLoading(true);
  };
  return (
    <div className="login">
      <div className="login__left">
        <img className="login__logo-desktop" src={logo} alt="" />
        <img className="login__person" src={blackPerson} alt="" />
      </div>
      <div className="login__right">
        <img className="login__logo-mobile" src={logo} alt="" />
        <h1 className="login__heading">最實用的線上代辦事項服務</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="login__input-box">
          <Input
            label="Email"
            placeholder="請輸入Email"
            disabled={isLoading}
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Password"
            placeholder="請輸入密碼"
            disabled={isLoading}
            error={errors.password?.message}
            {...register("password")}
          />
          <div className="login__button-box">
            <Button text="登入" className="login__button" disabled={isLoading}>
              登入
            </Button>
            <Link to={"/register"} className="login__text">
              註冊帳號
            </Link>
          </div>
        </form>
      </div>

      <Modal
        isOpen={isOpenErrorModal}
        headerText={"登入失敗"}
        bodyText={"請重新輸入"}
        onConfirm={() => {
          setisOpenErrorModal(false);
        }}
      />
    </div>
  );
}
