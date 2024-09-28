import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import blackPerson from "../../assets/img/black-person.png";
import { Input } from "../../ui/input/input";
import { Button } from "../../ui/button/button";
import "./style.scss";

const RegisterSchema = z
  .object({
    email: z.string().email({ message: "無效的信箱，請重新輸入" }),
    nickname: z.string().max(8, { message: "暱稱不得超過8個字" }),
    password: z
      .string()
      .min(5, { message: "暱稱不得小於5個字" })
      .max(20, { message: "暱稱不得超過20個字" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "密碼不符，請重新輸入",
    path: ["confirmPassword"],
  });

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="register">
      <div className="register__left">
        <img className="register__logo-desktop" src={logo} alt="" />
        <img className="register__person" src={blackPerson} alt="" />
      </div>
      <div className="register__right">
        <img className="register__logo-mobile" src={logo} alt="" />
        <h1 className="register__heading">註冊帳號</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="register__input-box">
          <Input
            label="Email"
            placeholder="請輸入Email"
            error="error"
            {...register("email")}
          />

          <Input
            label="您的暱稱"
            placeholder="請輸入暱稱"
            error="error"
            {...register("nickname")}
          />

          <Input
            label="密碼"
            placeholder="請輸入密碼"
            error="error"
            {...register("password")}
          />

          <Input
            label="再次輸入密碼"
            placeholder="請再次輸入密碼"
            error="error"
            {...register("confirmPassword")}
          />

          <div className="register__button-box">
            <Button className="register__button">註冊帳號</Button>
            <Link to={`/login`} className="register__text">
              登入
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
