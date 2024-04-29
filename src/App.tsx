import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { PullDown } from "./pages/pulldown";
function App() {
  return (
    <>
      <Provider store={store}>
        <PullDown />
      </Provider>
    </>
  );
}

export default App;
