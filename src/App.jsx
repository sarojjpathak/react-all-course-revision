import Print from "./print.jsx"
import './App.css'

function App() {
const x = ["red","green","blue"];
let b = x.map(clr =>{
return <Print color = {clr} />
});


  return (
    <>
    {b}
    </>
  );
}

export default App
