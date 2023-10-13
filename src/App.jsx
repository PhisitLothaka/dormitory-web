import { ToastContainer } from "react-toastify";
import { useAuth } from "./hooks/use-auth";
import Router from "./router/route";
import Loading from "./components/Loading";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose="3000"
        theme="Colored"
      />
    </>
  );
}

export default App;
