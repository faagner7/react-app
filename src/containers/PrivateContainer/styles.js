export default () => ({
  nav: {
    backgroundColor: 'red',
  },
  navList: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    padding: 0,
  },
  li: {
    display: 'inline-block',
    // paddingLeft: '10px',
    position: 'relative',
    margin: 'auto',
    color: 'black',
    textAlign: 'center'
  },
  activeListItem: {
    backgroundColor: '#ffff',
    '& $listItemText': {
      color: '#f9f9f9',
    },
  },
})