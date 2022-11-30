import { useEffect, useState } from 'react';
import '../App.css';
import CardComponent from '../components/cardComponent'
import getList from '../services/list';


function App() {

  const options = [
    {value: '', text: 'Please Select Country'},
    {value: 'canada', text: 'Canada'},
    {value: 'bangladesh', text: 'Bangladesh'},
    {value: 'nepal', text: 'Nepal'},
    {value: 'japan', text: 'Japan'},
  ];

  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const [cardNum, setCardNum] = useState(11);
  const [selected, setSelected] = useState(options[0].value);

  
  useEffect(() => {
    if(show === true){
      let mounted = true;
      getList(selected)
        .then(items => {
          if(mounted) {
            setList(items)
          }
        })
      return () => mounted = false;
    }
  })


  useEffect(() => {
    if(show === true) {
      let effect = true;
      if(effect){
          let cards = document.querySelectorAll('.column');
          for (let i = 0; i < cards.length ; i++) {
            if(show === false){
              cards[i].style.display = "none";
            }
            else if(i > cardNum && show === true){
              cards[i].style.display = "none";
            } else{
              cards[i].style.display = "block";
            }
          }
      }
      return () => {
        effect = false;
      };
    }
  });

  const handleChange = event => {
    setSelected(event.target.value);
    if(event.target.value === ''){
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="row">
      <label htmlFor="cars">Choose a country:</label>

      <select value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <button onClick={() => setCardNum(cardNum + 1)}>Add card</button>
      <button onClick={() => setCardNum(cardNum - 1)}>Remove card</button>

      <h1>My university list</h1>

      {
        show ? 
        list.map((elem, index) => {
          return(
            <CardComponent key={index} data={elem} />
          );
        }) : <></>
      }
    </div>
  );
}

export default App;
