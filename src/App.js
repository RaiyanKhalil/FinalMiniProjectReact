// import logo from './logo.svg';
import './App.css';
import CardComponent from './components/cardComponent'


function App() {

  const rows = [];

  for (let index = 0; index < 12; index++) {
    // const element = array[index];
    rows.push(<CardComponent key={index} />)
  }
  

  return (
    <div class="row">
      <h2>Responsive Column Cards</h2>
      <p>Resize the browser window to see the effect.</p>

        {rows}
    </div>
  );
}

export default App;
