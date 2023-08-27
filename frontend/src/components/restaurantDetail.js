const RestaurantDetail = ({ restaurant })=>{
  return (
      <div className="restaurant-details">
        <h4>Title: {restaurant.title}</h4>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Updated: {restaurant.updatedAt}</p>
      </div>
  )
}

export default RestaurantDetail
