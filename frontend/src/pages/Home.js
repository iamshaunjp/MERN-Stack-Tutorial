import { useEffect, useState } from "react"

const Home = () =>{
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => {
    const fetchRestaurants = async() => {
      const res = await fetch("http://localhost:5000/restaurants")
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
      <div key={restaurant._id}>
        <p>{restaurant.title}</p>
        <p>{restaurant.cuisine}</p>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Home
