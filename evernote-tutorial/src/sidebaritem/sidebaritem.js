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
                 alignItems= 'flex-start' >
                     <div 
                        className={classes.textSelection} 
                        onClick={ ()=>this.selectNote(_note,_index) } >
                            <ListItemText
                                primary= {_note.title}>
                            </ListItemText>
                            <DeleteIcon 
                                onClick = {()=> this.deleteNote(_note) }
                                className= { classes.deleteIcon }
                            >  </DeleteIcon>
                    </div>
                </ListItem>
             </div>)
        } 

        deleteNote = ()=> {}
        selectNote = ()=> {}
}



// can access classes through this.props.classes.className
export default withStyles(styles)(SidebarItemComponent);