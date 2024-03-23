import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { ReduxPage } from "./pages/reduxpage";
function App() {
  return (
    <>
      <Provider store={store}>
        <ReduxPage />
      </Provider>
    </>
  );
}

export default App;
