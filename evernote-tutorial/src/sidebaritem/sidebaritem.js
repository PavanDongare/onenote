import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';


class SidebarItemComponent extends React.Component {
        // constructor(){
        //         super(); // not required, stateless component, only props
        // }

        render(){
         const {_index,_note,classes,selectedNoteIndex} = this.props; // notice, delete note , select note skipped
         return (
             <div key={_index}>
                <ListItem
                 className = {classes.listItem } 
                 selected = { selectedNoteIndex === _index }
                 alignItems= 'flex-start'
                 onClick={ ()=>this.selectNote(_note,_index) } >
                     <div className={classes.textSelection} 
                         >
                            <ListItemText
                                primary= {_note.title}>
                            </ListItemText>
                        
                    </div>
                    {
                        !_note.title.includes('pavan') ?
                        <DeleteIcon 
                        onClick = {()=> this.deleteNote(_note) }
                        className= { classes.deleteIcon }
                        >  </DeleteIcon>
                        :
                        null
                    }
                   
                </ListItem>
             </div>)
        } 


        selectNote = (n,i) =>  this.props.selectNote(n,i);

        deleteNote = (n) => {
            if(window.confirm(`Is "#${n.title}#" your own note , are you sure you want to delete?`)){
                this.props.deleteNote(n);
            }
        }; 
}



// can access classes through this.props.classes.className
export default withStyles(styles)(SidebarItemComponent);