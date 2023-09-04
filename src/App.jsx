import logo from "./logo.svg";
import "./App.css";
import Buttoncomponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Buttoncomponent btnText="questo testo è dinamico" />
      <ImageComponent
        src="https://images.unsplash.com/photo-1693115823976-7809af2b2c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
        alt="New York"
        style={{ maxWhidth: "100%" }}
      />
    </div>
  );
}

export default App;
