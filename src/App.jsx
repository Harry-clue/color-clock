import date from 'date-fns/getDate';
import './App.css';

function App() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();


  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
      <p>
        Date :
        {date.toLocaleDateString()}
      </p>
    </div>
  );
}

export default App;