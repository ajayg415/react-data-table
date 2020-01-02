import React, { useState, useEffect } from "react";

import DataTable from "react-data-table-component";
import axios from 'axios';

import { Address, Tellno, Email } from './Components/Childs';

const Table = () =>{
  const [tdata, setTdata] = useState([]);

  //Similar to componentDidMount
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      let d = [];
      for(let i=0;i<res.data.length;i++){
        if( i === 0 || i%5 === 0){
          d.push({
            name:'Header 1', email: 'header 1', 
            haveBold: true, haveBorder: false});
          d.push({
            name:'Header 2', email: 'header 2', 
            haveBold: true, haveBorder: true});
        }
        d.push(res.data[i])
      }
      console.log(d)
      setTdata(d);
    });
  },[])

  const handleClick = (obj) => {
    const data = [...tdata]
    data.forEach((o)=>{
      if(obj.id === o.id){
        o.selected = true;
      }else{
        o.selected = false;
      }
    })
    setTdata(data);
  }

  const conditionalRowStyles = [
    {
      when: row => row.selected,
      style: {
        backgroundColor: '#d7d7d7',
      },
    },
    {
      when: row => row.haveBold,
      style: {
        fontWeight: 'bold'
      }
    },
    {
      when: row => row.haveBorder,
      style: {
        borderBottom: '1px solid black'
      }
    }
  ]

  const columns = [
    { name: "Name", selector: "name", sortable: true },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      cell: row => <Email row={row} />
    },
    {
      name: "Mobile",
      selector: "phone",
      sortable: true,
      cell: row => <Tellno row={row} />
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
      maxWidth: "250px",
      cell: row => <Address row={row} />
    }
  ];

  return (
    <DataTable
      title="Movie List"
      columns={columns}
      data={tdata}
      fixedHeader
      dense
      fixedHeaderScrollHeight="300px"
      highlightOnHover
      className='testing-component'
      onRowClicked = {handleClick}
      conditionalRowStyles={conditionalRowStyles}
    />
  );
}



export default Table;
