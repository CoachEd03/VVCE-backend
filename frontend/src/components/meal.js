import {useState} from 'react'
function CreateMeal() {
    const[selection]= useState<{mealName:String,add_ingredients:[],type:String,price:Number,courseMeal:String}> ({
        mealName: "",
        add_ingredients:"",
        type:"",
        price:"",
        courseMeal:""
    })
    function Continue(e) {
        e.preventDefault()
        console.log("Finding the best meal option!")
    }
    return (
        <div>
        <form onClick={CreateMeal}>
            <b>MEAL SELECTION FORM</b><br/>
            <label> Meal Name: <input type="text" name="{selection.mealName}" required/>
            </label><br/>

            <label> Ingredients:</label><br/>
             <input type="checkbox" name={selection.add_ingredients} required/>Chilly<br/>
             <input type="checkbox" name={selection.add_ingredients} required/>fish<br/>
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
               </select>
            
            <label>Course Meal:</label><br/>
               <select name={selection.courseMeal}>
                <option>Appetizers</option>
                <option>Starters</option>
                <option>Main course</option>
                <option>Dessert</option>
               </select>

            <label>Price:<input type="number" name={selection.price} required/></label><br/>
            
            <input type="submit" value="CONTINUE" />
        </form>
        </div>);
  }

export default Register;
  