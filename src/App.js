import "./App.css";
import { Vocab } from "./vocabList.js";

function App() {
  const randomNum = Math.floor(Math.random() * Math.floor(Vocab.length));

  return (
    <div className="App">
      <h2>🔍Word - defination + Vocab builder</h2>

      <div className="wordbox">
        <h1> 📝{Vocab[randomNum].FIELD1}</h1>
        <h3> [ {Vocab[randomNum].FIELD2}  ] </h3>
      </div>
    </div>
  );
}

export default App;

// add some good designs using bootstrap or other templates
// just copy paste n upload it in github + netlify
// add more functionality like google translate
