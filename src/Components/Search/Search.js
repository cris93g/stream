import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [search,useSearch]=useState("")

    setEffect(()=>{
        axios.post('/api/streams/search',{
            Id:
        }).then(results =>{
            useSearch({search:results.data})
        })
    },[])
  return (
    <>
     
    </>
  );
}
export default Search;
