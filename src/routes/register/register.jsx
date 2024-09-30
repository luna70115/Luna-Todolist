import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterApiSchema } from "../../api/register";
import { fetcher } from "../../api/fetcher";
import logo from "../../assets/img/logo.svg";
import blackPerson from "../../assets/img/black-person.png";
import { Input } from "../../ui/input/input";
import { Button } from "../../ui/button/button";
import "./style.scss";

const RegisterSchema = z
  .object({
    email: z.string().email({ message: "無效的信箱，請重新輸入" }),
    nickname: z.string().min(1, { message: "密碼最少要1個字" }),
    password: z.string().min(6, { message: "密碼最少要6個字" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "密碼不符，請重新輸入",
    path: ["confirmPassword"],
  });

export function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data) => {
    const rawData = {
      user: {
        email: data.email,
        nickname: data.nickname,
        password: data.password,
      },
    };
    const apiData = RegisterApiSchema.parse(rawData);
    fetcher({ url: "/users", method: "post", data: apiData })
      .then((response) => {
        console.log(response);
        alert("註冊成功");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("註冊失敗");
      });
  };

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
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="您的暱稱"
            placeholder="請輸入您的暱稱"
            error={errors.nickname?.message}
            {...register("nickname")}
          />

          <Input
            label="密碼"
            placeholder="請輸入密碼"
            error={errors.password?.message}
            {...register("password")}
          />

          <Input
            label="再次輸入密碼"
            placeholder="請再次輸入密碼"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
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
