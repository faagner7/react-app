export default () => ({
  nav: {
    backgroundColor: 'red',
    padding: '20px',
  },
  navList: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
  },
  li: {
    display: 'inline-block',
    paddingLeft: '10px',
    position: 'relative',
    margin: 'auto',
    color: 'black'
  },
  activeListItem: {
    backgroundColor: '#ffff',
    '& $listItemText': {
      color: '#f9f9f9',
    },
  },
})