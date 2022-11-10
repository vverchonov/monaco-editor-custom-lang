
import './App.css';
import 'react-dropdown/style.css';


import { useState } from 'react';

import ItemList from './components/ItemList';
import SearchBar from './components/Search';
import CustomEditor from './components/Editor';

import {Button} from '@mui/material';


function App() {

  const [ language, setLanguage ] = useState('javascript')
  const [ showDiff, setShowDiff] = useState(false)

  const options = [
    'javascript', 'css', 'html'
  ];

  const defaultOption = options[0];

  function selectLanguage(e) { 
    setLanguage(e.value)
  }

  function showDifference() {
    setShowDiff(!showDiff)
  }

  return (
    <div className="App">
      <h1>Monaco</h1>
      
      <div style={{ backgroundColor: "white", width: "95%", margin: "0 auto" }}>
        {/* <Dropdown options={options} onChange={selectLanguage} value={defaultOption} placeholder="Select an option" /> */}
        <div style={{ backgroundColor: "", width: "20%", float: "left" }}>
          <SearchBar></SearchBar>
          <ItemList />
          <Button onClick={showDifference} variant="contained" color="success" style={{ width: "100%", marginTop: "5%", border: "1px solid black" }} size="large">{ !showDiff ? "See difference" : "Go back to edit"}</Button>
        </div>
        <div style={{ backgroundColor: "white", width: "78%" ,float:"right"  }}>
            <CustomEditor showDiff={showDiff} language={language} vale />
        </div>
      </div>
    </div>
  );
}

export default App;
