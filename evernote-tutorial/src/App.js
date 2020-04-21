import React from 'react';
import './App.css';

import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';

const firebase = require('firebase');





class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      selectedNoteIndex:null,
      selectedNote:null,
      notes:null
    }
  }


  // app shuld pass delect select & new note as prop to sidebarcomponent
  render(){
    return(
        <div className="app-container">  
            <SidebarComponent
              selectedNoteIndex={this.state.selectedNoteIndex}
              notes={this.state.notes}
              deleteNote= {this.deleteNote}
              selectNote = {this.selectNote}
              newNote = {this.newNote}
              >

            </SidebarComponent>
            {
                this.state.selectedNote ?
                <EditorComponent selectedNote={this.state.selectedNote}
                selectedNoteIndex = {this.state.selectedNoteIndex}
                notes = { this.state.notes}
                noteUpdate = { this.noteUpdate}
                >

                </EditorComponent>
                : null
            }
           
        </div> 
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot( serverUpdate =>{
        const notes = serverUpdate.docs.map( _doc=> {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({notes:notes}); // this will re render sidebar 
      });
  }

  selectNote = (n,i)=> this.setState({
      selectedNoteIndex:i,
      selectedNote:n
  })

  deleteNote = ()=> {

  }
   
  newNote = ()=> {

  }

  noteUpdate = (id,note)=> {
      console.log(id,note)
  }
}

export default App;
 