import { useRestaurantsContext } from "../hooks/useRestaurantsContext"

const RestaurantDetail = ({ restaurant })=>{
  const { dispatch } = useRestaurantsContext()

  const handleClick = async () =>{
    const res = await fetch("/restaurants/" + restaurant._id, {
      method: "DELETE"
    })
    const json = await res.json()

    if(res.ok){
      dispatch({type: "DELETE_RESTAURANT", payload: json })
    }
  }
  return (
      <div className="restaurant-details">
        <h4>Title: {restaurant.title}</h4>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Updated: {restaurant.updatedAt}</p>
        <span onClick={handleClick}>delete</span>
      </div>
  )
}

export default RestaurantDetail
