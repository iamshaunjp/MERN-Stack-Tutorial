import { RestaurantsContext } from "../context/RestaurantContext"
import { useContext } from "react"

export const useRestaurantsContext = ()=>{
  const context = useContext(RestaurantsContext)

  if(!context) {
    throw new Error("useRestaurantsContext must be used inside an RestaurantsContextProvider")
  }

  return context
}

