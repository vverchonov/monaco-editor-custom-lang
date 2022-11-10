import React, { useEffect } from 'react'

import {breadcrumbsClasses, List} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import './css/Item.css'


function Item(props) {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('')
    const [mun, setMun] = React.useState('')
    const [muns, setMuns] = React.useState([])

    function handleClick() {
        setOpen(!open);
    };

    useEffect(() => {
        Object.entries(props.item).map((key, item) => {
            if (key[0] === "name") {
                setName(key[1])
            } 
            if (key[0] === "location") {
                setMun(key[1])
            } 
            if (key[0] === "subMuns") {
                setMuns(key[1])
            } 
        })
    },[])


    return (

        <div style={{marginLeft:"5px"}}>
            {muns.length !== 0 ?
                <div>
                    <ListItemButton >
                    <ListItemIcon >
                    
                    </ListItemIcon>
                    <ListItemText primary={name} />
                    {open ? <p className="p-styled" onClick={handleClick} >-</p> : <p className="p-styled" onClick={handleClick} >+</p>}
                </ListItemButton>
          
                <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                            {muns.map((item, index) => {
                                return(<Item key={index} item={item}></Item>)
                            })}
                </List>
                </Collapse>
                </div>
                :
                <div>
                    <ListItemButton  >
                    <ListItemIcon >
                    
                    </ListItemIcon>
                    <ListItemText primary={name} />

                </ListItemButton>
                </div>
            }
        </div>
      
    );
}

export default Item;