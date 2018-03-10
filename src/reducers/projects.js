const initialState = {
  list: [
    { name: 'Aurora' },
    { name: 'Menu' }
  ]
};
 
export default (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};
