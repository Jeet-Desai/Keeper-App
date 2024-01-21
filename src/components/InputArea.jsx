import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
import Fab from '@mui/material/Fab';
import { yellow } from "@mui/material/colors";

function InputArea(props) {


    const [noteitem,setNoteItem]=useState({title:"", content:""})
    const [isvisible,show]=useState(false);

    function handleChange(e)
    {
        const {name,value}=e.target;
        setNoteItem(prev=>
            {
                return {...prev,[name]:value};
            } )
    }

    function handleClick()
    {
      props.add(noteitem);
      setNoteItem({title:"",content:""});
    }
  return (
    <div>
      <form className="create-note" onSubmit={(e)=>e.preventDefault()}>
        <input style={{display: isvisible  ? "block" : "none"}} onChange={handleChange} name="title" placeholder="Title" value={noteitem.title}/>
        <textarea onClick={()=>show(true)} onChange={handleChange} name="content" placeholder="Take a note..." rows={isvisible ? 3 : 1}  value={noteitem.content}/>
        <Fab sx={{
        '&:hover': {
          bgcolor:"orange",
        },
      }} onClick={handleClick}>
              <AddIcon />
              </Fab>
      </form>
    </div>
  );
}

export default InputArea;
