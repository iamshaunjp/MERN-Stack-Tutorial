import { useEffect, useState } from "react"
import RestaurantDetail from "../components/restaurantDetail"

const Home = () =>{
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => {
    const fetchRestaurants = async() => {
      const res = await fetch("/restaurants")
      const json = await res.json()

      if(res.ok){
        setRestaurants(json)
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
    </div>
  )
}

export default Home
