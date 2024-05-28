import { useState } from "react";
import "./App.css";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import { ItemProvider } from "./components/ItemContext";

function App() {
  const [buttonHandler, setButtonHandler] = useState<string>("");
  const [selectBtn, setSelectBtn] = useState<boolean>(true);

  const handlerChoose = (btn: string) => {
    setButtonHandler(btn);
  };

  const handlerAccept = () => {
    setSelectBtn(false);
  };

  return (
    <ItemProvider>
      <div className="App">
        {selectBtn ? (
          <div className="BlockApp">
            <h1 style={{ color: "white" }}>Кто вы?</h1>
            <div className="BlockButtonChoose">
              <button onClick={() => handlerChoose("admin")}>Админ</button>
              <button onClick={() => handlerChoose("user")}>Пользователь</button>
            </div>
            <div>
              <button className="Accept" onClick={handlerAccept}>Войти</button>
            </div>
          </div>
        ) : buttonHandler === 'admin' ? <Admin setselectBtn={setSelectBtn} /> : <User setselectBtn={setSelectBtn} />}
      </div>
    </ItemProvider>
  );
}

export default App;
