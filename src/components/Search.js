import React, { useState } from 'react';
import './css/Search.css'

import TextField from "@mui/material/TextField";

function SearchBar(){

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="search">
            <TextField
                className='border-black'
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> 
    );
}



export default SearchBar;