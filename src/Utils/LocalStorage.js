export const loadState = () => {
    try {
      const localState = localStorage.getItem('reduxState');
      return localState ? JSON.parse(localState) : undefined;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };
  
  export const saveState = state => {
    try {
      const localState = JSON.stringify(state);
      localStorage.setItem('reduxState', localState);
    } catch (err) {
      console.log(err);
    }
  };