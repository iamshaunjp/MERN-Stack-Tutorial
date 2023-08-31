import {useState} from "react"
import { useRestaurantsContext } from "../hooks/useRestaurantsContext"

const RestaurantForm = () =>{
  const {dispatch} = useRestaurantsContext()
  const [title, setTitle] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  const handleSubmit = async(e) =>{
    e.preventDefault()

    const restaurant = {title, cuisine}
    const res = await fetch("/restaurants", {
      method: "POST",
      body: JSON.stringify(restaurant),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const json = await res.json()

    // set the same value in server
    if(!res.ok){
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if(res.ok){
      setTitle('')
      setCuisine('')
      setError(null)
      setEmptyFields([])
      console.log("new restaurant added", json.msg)
      dispatch({type:"CREATE_RESTAURANT", payload: json.msg})
    }
  }
  return (
    <form
     className="create"
     onSubmit={handleSubmit}
    >
     <h3>Add a New Restaurant</h3>
     <label>Restaurant Title</label>
     <input type="text"
     onChange = {(e) => setTitle(e.target.value) }
     value={title}
     className={emptyFields.includes("title") ? "error" : ""}
     />
     <label>Restaurant Cuisine</label>
     <input type="text"
     onChange = {(e) => setCuisine(e.target.value) }
     value={cuisine}
     className={emptyFields.includes("cuisine") ? "error" : ""}
     />
     <button>Submit Restaurant</button>
    {error && <div className="error">{error}</div>}
    </form>
  )
}

export default RestaurantForm
