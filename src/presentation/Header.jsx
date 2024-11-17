import logo from "../assets/logo-name.svg";
export function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Супергерои</h2>
      <span>Время: {new Date().toLocaleTimeString()}</span>
    </header>
  );
}
