import { useEffect } from "react"
import RestaurantDetail from "../components/restaurantDetail"
import RestaurantForm from "../components/RestaurantForm"
import { useRestaurantsContext } from "../hooks/useRestaurantsContext"

const Home = () =>{
  const {restaurants, dispatch} = useRestaurantsContext()

  useEffect(() => {
    const fetchRestaurants = async() => {
      const res = await fetch("/restaurants")
      const json = await res.json()

      if(res.ok){
        dispatch({type: "SET_RESTAURANTS", payload:json})
      }
    }

    fetchRestaurants()
  }, [])

  return (
    <div className="home">
      <div className="restaurants">
      {restaurants && restaurants.map((restaurant)=>(
        <RestaurantDetail key={restaurant._id}
        restaurant={restaurant} />
      ))}
      </div>
    <RestaurantForm />
    </div>
  )
}

export default Home
