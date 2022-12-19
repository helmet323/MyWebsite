import background from "./images/background.jpg";

function App() {
  return (
    <div>
      <div className="faded">
        <h1 className="white">Hey there!</h1>
        <h2 className="white">Welcome to my website!</h2>
      </div>

      <img src={background} alt="background" />
    </div>
  );
}

export default App;
