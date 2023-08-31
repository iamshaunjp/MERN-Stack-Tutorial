import { createContext, useReducer } from "react"

export const RestaurantsContext = createContext()

export const restaurantsReducer = (state, action) => {
  switch(action.type){
    case "SET_RESTAURANTS":
      return {
        restaurants: action.payload
      }
    case "CREATE_RESTAURANT":
      return {
        restaurants: [action.payload, ...state.restaurants]
      }
    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter((w)=> w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const RestaurantsContextProvider = ({ children }) =>{
  const [ state, dispatch ] = useReducer(restaurantsReducer, {
    restaurants: null
  })

  return(
    <RestaurantsContext.Provider value={{...state, dispatch}}>
    { children }
    </RestaurantsContext.Provider>
  )
 }
