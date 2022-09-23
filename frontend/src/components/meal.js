import {useState} from 'react'
import "./meal_style.scss";
function CreateMeal() {
    const[selection,setSelection]= useState ({ 
        mealName: "",
        ingr1:"",
        ingr2:"",
        type:"",
        price:"",
        courseMeal:""
    })
    function Continue(e) {
        e.preventDefault()
        console.log("Creating the best meal option!")
    }
    return (
        <body>
        <div>
            
        <form onClick={Continue}>
            
           <h1><b>CREATE YOUR MEAL!</b></h1><br/>
            <label> Meal Name: </label><br/>
            <input type="text" name={selection.mealName} required/>
            <br/>

            <label>Main Ingredient:</label><br/>
            <select name={selection.ingr1}>
                <option>Chicken</option>
                <option>Mutton</option>
                <option>Paneer</option>
                <option>Fish</option>
                <option>Egg</option>
                <option>Mushroom</option>
            </select><br/>

            <label>Sauce:</label><br/>
            <select name={selection.ingr2}>
                <option>Chilly sauce</option>
                <option>Schezwan sauce</option>
                <option>Sweet chilly sauce</option>
            </select><br/>
             
            <label>Type of meal:</label><br/>
               <select name={selection.type}>
                <option>Veg</option>
                <option>Non-Veg</option>
               </select><br/>
            
            <label>Course Meal:</label><br/>
               <select name={selection.courseMeal}>
                <option>Appetizers</option>
                <option>Starters</option>
                <option>Main course</option>
                <option>Dessert</option>
               </select><br/>

            <label>Price:</label><br/>
            <input type="number" name={selection.price} required/><br/>
            <br/>
            <input type="submit" value="CONTINUE" />
        </form>
        </div>
        
        </body>);
  }

export default CreateMeal;
  