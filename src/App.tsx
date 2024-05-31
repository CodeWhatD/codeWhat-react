import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { ForWardRef } from "./pages/forwardRef";
function App() {
  return (
    <>
      <Provider store={store}>
        <ForWardRef />
      </Provider>
    </>
  );
}

export default App;
