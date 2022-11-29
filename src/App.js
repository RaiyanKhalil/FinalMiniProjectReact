// import logo from './logo.svg';
import { useEffect, useState } from 'react';

import './App.css';
import CardComponent from './components/cardComponent'


function getList() {
  return fetch('http://universities.hipolabs.com/search?country=canada')
    .then(data => data.json())
}


// function hideCard(){
//   let carsNum = document.querySelectorAll(".column")

//   // carsNum.
// }

function App() {



  const [list, setList] = useState([]);
  const [cardNum, setCardNum] = useState(12)
  
  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          // console.log(items)
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])
  
  // hideElem()


 

  return (
    <div class="row">
      <h2>Responsive Column Cards</h2>
      <p>Resize the browser window to see the effect.</p>
      <button onClick={() => setCardNum(cardNum + 1)}>Add card</button>
      <button onClick={() => setCardNum(cardNum - 1)}>Remove card</button>

            <h1>My Canada university list</h1>


          {
          list.slice(0 ,  cardNum).map((elem, index) => {
                return(
                  <CardComponent key={index} data={elem} />
                );

            }
          )}
    </div>
  );
}

export default App;
