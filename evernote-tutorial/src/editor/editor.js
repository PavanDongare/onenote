import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';


class EditorComponent extends React.Component {
  constructor(){
        super();
        this.state ={ 
           text: '',
           title: '',
           id: ''
        };    

        this.modules = {
            toolbar: [
              [{ 'font': [] }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              ['bold', 'italic', 'underline'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{ 'align': [] }],
              [{ 'color': [] }, { 'background': [] }],
              ['clean']
            ],

            clipboard : { matchVisual: false }
        };
    
        this.formats = [
            'font',
            'size',
            'bold', 'italic', 'underline',
            'list', 'bullet',
            'align',
            'color', 'background'
          ];
  }

  setValues=()=>{
    this.setState({
        text: this.props.selectedNote.body,
        title:this.props.selectedNote.title,
        id:this.props.selectedNote.id
    })
  }
  componentDidMount=()=>{ this.setValues();}
  
  componentDidUpdate=()=> {
      if(this.props.selectedNote.id!==this.state.id)
            this.setValues();
    }

  render() {
          const { classes } = this.props;
          return (
            <div>
                     <BorderColorIcon 
                     className={classes.editIcon} 
                    
                     > </BorderColorIcon>
                     <input
                      className = {classes.titleInput}
                      placeholder  ='Note Title...'
                      value={this.state.title?this.state.title:''}
                      onChange= { (e)=> this.updateTitle(e.target.value) }
                      >
                     </input>
                     <DeleteIcon className={classes.deleteIcon}
                         onClick = {()=> this.deleteNote(this.props.selectedNote) }
                        >  </DeleteIcon>
                     
                     <div classes = { classes.editorContainer } >
                             <ReactQuill value={this.state.text}
                                         onChange={this.updateBody}
                                         modules = {this.modules}
                             >
                             </ReactQuill>
                     </div>
            </div>
          );

  }

  updateTitle = async (val) => {
        await this.setState({title:val});
        this.update();
  }

  updateBody = async (val) => {
          await this.setState({text:val});
          this.update();
  }

  update = debounce(
          ()=>{
                 this.props.noteUpdate(this.state.id, {
                     title: this.state.title,
                     body: this.state.text
                 })
        },2000);

  deleteNote(note){
    if(window.confirm(`Is "#${note.title}#" your own note , are you sure you want to delete?`)){
        this.props.deleteNote(note);
    }
  }

} // component close bracket


export default withStyles(styles)(EditorComponent);