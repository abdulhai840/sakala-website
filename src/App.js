import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";
function App() {
  return (
    <>
      {localStorage.getItem("token") ? <ProtectedRoutes /> : <PublicRoutes />}
    </>
  );
}

export default App;
