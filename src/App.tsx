import { Link } from "react-router-dom";
import { ROUTES } from "./constants";

function App() {
  // const navigate = useNavigate();
  return (
    <div>
      <Link to={ROUTES.main}></Link>
      <p>Задание 1</p>
    </div>
  );
}

export default App;
