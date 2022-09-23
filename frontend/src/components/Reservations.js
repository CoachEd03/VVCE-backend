import {useState} from 'react'
function CreateMeal() {
    const[selection,setSelection]= useState ({ 
        mealName: "",
        add_ingredients:"",
        type:"",
        price:"",
        courseMeal:""
    })
    function Continue(e) {
        e.preventDefault()
        console.log("Creating the best meal option!")
    }
    return (
        <div>
        <form onClick={Continue}>
            
            <b>MEAL SELECTION FORM</b><br/>
            <label> Meal Name: <input type="text" name={selection.mealName} required/>
            </label><br/>

            <label> Ingredients:</label><br/>
             <input type="checkbox" name="ing1" value="chilly"/><br/>
             <input type="checkbox" name="ing2" required/>fish<br/>
             <input type="checkbox" name={selection.add_ingredients} required/>mushroom<br/>
             <input type="checkbox" name={selection.add_ingredients} required/>paneer<br/>
             <input type="checkbox" name={selection.add_ingredients} required/>chicken<br/>
             <input type="checkbox" name={selection.add_ingredients} required/>mutton<br/>
             <input type="checkbox" name={selection.add_ingredients} required/>garlic<br/>
             <input type="checkbox" name={selection.add_ingredients} required/>egg<br/>
            
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

            <label>Price:<input type="number" name={selection.price} required/></label><br/>
            
            <input type="submit" value="CONTINUE" />
        </form>
        </div>);
  }

export default CreateMeal;