const styles = theme => ({
        listItem: {
          cursor: 'pointer',
          padding: '0px 5px 0px 5px',
          fontSize: '0.5'
        },
        textSection: {
          maxWidth: '85%'
        },  
        deleteIcon: {
          position: 'absolute',
          right: '5px',
          top: 'calc(50% - 15px)',
          '&:hover': {
            color: 'red'
          }
        }
});
      
export default styles;