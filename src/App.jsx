import Print from "./print.jsx"
import './App.css'

function App() {
const x = [{
  name : "saroj",
  age : "21"
},{
   name : "sameer",
  age : "23"
}];
let b = x.map(clr =>{
return <Print name = {clr.name} age = {clr.age} />
});


  return (
    <>
    {b}
    </>
  );
}

export default App
