import React, { useEffect, useState } from 'react'

import {ListSubheader} from '@mui/material';
import {List} from '@mui/material';

import Item from './Item'

function ItemList() { 

    const [data] = useState([{ name: "first obj", location: "location1", subMuns: [{ name: "sub first obj", location: "location1" }, { name: "sub second obj", location: "location2", subMuns: [{ name: "first obj", location: "location1" }]},{name:"sub third obj",location:"location3"}]},{name:"second obj",location:"location2"},{name:"third obj",location:"location3"}])

    useEffect(() => { 
        console.log('getting data...')
    },[])

    return (
        <List
            sx={{ width: '100%', maxWidth: '98%', bgcolor: 'background.paper', borderRadius:"2%" }}
            style={{border:"3px solid black"}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                MUNs
                </ListSubheader>
            }
        >
            {data.map((item,index) => {
                return(<Item key={index} item={item}></Item>)
            })}
            
        </List>
    );
}

export default ItemList;