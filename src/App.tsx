import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { IconifyPage } from "./pages/iconify";
function App() {
  return (
    <>
      <Provider store={store}>
        <IconifyPage />
      </Provider>
    </>
  );
}

export default App;
