import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  let [ sw, setSw] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then (response => {
        setSw(response.data)
      });
  },[]);


  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <ul>
        {sw.map(switems => {
           return <Character 
            key = {switems.index}
            name = {switems.name}
            gender = {switems.gender}
            birth = {switems.birth_year}
            hair = {switems.hair_color}
            skin = {switems.skin_color}
            eyes = {switems.eye_color}
          />
        }
        )
      }
      </ul>
    </div>
  );
}

export default App;
