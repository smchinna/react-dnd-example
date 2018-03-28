import { createSelector } from 'reselect';


const InitialData = () => (state) =>  {
    console.log(state)
 return state.get('tasty');
}

const fetchData = () => createSelector(
InitialData(),(
    (data) => {
        console.log("data",data)
        return data;
    }
)
)

const makeSelectLocationState = () => {
    let prevRoutingState;
    let prevRoutingStateJS;
  
    return (state) => {
      const routingState = state.get('route'); // or state.route
  
      if (!routingState.equals(prevRoutingState)) {
        prevRoutingState = routingState;
        prevRoutingStateJS = routingState.toJS();
      }
  
      return prevRoutingStateJS;
    };
  };
  
  export {
    makeSelectLocationState,
    fetchData
  };