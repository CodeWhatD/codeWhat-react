import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { Responsive } from "./example/responsive";
function App() {
  return (
    <>
      <Provider store={store}>
        <Responsive />
      </Provider>
    </>
  );
}

export default App;
