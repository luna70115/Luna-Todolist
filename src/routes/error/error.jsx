import "./style.scss";
import { Link } from "react-router-dom";
export function Error() {
  return (
    <div className="error">
      <p className="error__title">404</p>
      <p className="error__text">Page Not Found</p>
      <p className="error__text">找不到這一頁</p>
      <Link to={`/`} className="error__goBack">
        回到首頁
      </Link>
    </div>
  );
}
