function user(state = {userId: null, name:null}, action) {
  switch (action.type) {
    case 'ADD_USER':
      console.log("Added User reducer");
      return {
        userId: action.userId,
        name: action.name
      };
    case 'REMOVE_USER':
      console.log('Removed User');
      return {
        userId: null,
        name: null
      };
    default:
      return state;
  }
  return state;
}

export default user;
