import date from 'date-fns/getDate';
import './App.css';

function App() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();


  return (
    <div className="App" >
      <h1>{ date.toLocaleTimeString()}</h1>
      <h2>{ date.toLocaleDateString()}</h2>
    </div>
  );
}

export default App;