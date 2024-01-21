import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Note from './components/Note';
import Footer from './components/Footer';
import InputArea from './components/InputArea';
import { useState } from 'react';

function App() {
  const [notes,setNotes]=useState([])

  function AddItem(item)
  {
    setNotes(prev=>[...prev,item]);
  }

  function DeleteItem(delind)
  {
    setNotes((prev)=>
    {
      return(
      prev.filter((value,index)=>
      {
        return index!=delind;
      })
      )
    })
  }
  return (
    <div>
      <Header />
      <InputArea  add={AddItem}/>
      <div className="note-cont">
      {notes.map(
        (curr,index)=>  <Note key={index} id={index} title={curr.title} content={curr.content} delete={DeleteItem}/>
      )}
      </div>
      <Footer />
      <Footer/>
    </div>
  );
}

export default App;
