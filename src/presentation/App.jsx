import "./App.css";
import { Header } from "../presentation/Header";
import { List } from "./List/List.jsx";


function App() {
  return (
    <>
      <Header />
      <main className="main">
        <h1>Гид по комиксам: <p>все, что вам нужно знать о 10 самых крутых супергероях</p> </h1>
        <List />
      </main>
    </>
  );
}
export default App;
