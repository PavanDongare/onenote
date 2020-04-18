import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';


class SidebaritemComponent extends React.Component {
        constructor(){
                super();
        }
        render(){
                return (<div>Hello SidebarItem  </div>)
        } 
}

// can access classes through this.props.classes.className
export default withStyles(styles)(SidebaritemComponent);