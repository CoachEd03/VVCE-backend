import {useState} from 'react'
import "./meal_style.scss";
function CreateMeal() {
    const[meal,setMeal]= useState ({ 
        mealName: "",
        ingr1:"",
        ingr2:"",
        type:"",
        price:"",
        courseMeal:""
    })
    function Continue(e) {
        e.preventDefault()
        console.log(meal)
        callMealApi();
    }
    async function callMealApi() {
        await fetch("http://localhost:5001/api/meal", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(meal),
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    return (
        <body>
        <div>   
        <form onClick={(e) => Continue(e)}>
            
           <h1><b>CREATE YOUR MEAL!</b></h1><br/>
            <label> 
            {" "}
            Meal Name: {" "}</label><br/>
            <input type="text" name={meal.mealName}
             onChange={(e) => setMeal({ ...meal,mealName: e.target.value })}
              required/>
            <br/>

            <label>
                {" "}
                Main Ingredient: {" "}</label><br/>
            <select name={meal.ingr1}>
                <option>Chicken</option>
                <option>Mutton</option>
                <option>Paneer</option>
                <option>Fish</option>
                <option>Egg</option>
                <option>Mushroom</option>
            onChange={(e) => setMeal({ ...meal,ingr1: e.target.value })}
            </select><br/>

            <label>
                {" "}
                Sauce:{" "}</label><br/>
            <select name={meal.ingr2}>
                <option>Chilly sauce</option>
                <option>Schezwan sauce</option>
                <option>Sweet chilly sauce</option>
                onChange={(e) => setMeal({ ...meal,ingr2: e.target.value })}
            </select><br/>
             
            <label>
                {" "}
                Type of meal:{" "}</label><br/>
               <select name={meal.type}>
                <option>Veg</option>
                <option>Non-Veg</option>
                onChange={(e) => setMeal({ ...meal,type: e.target.value })}
               </select><br/>
            
            <label>
                {" "}
                Course Meal:{" "}</label><br/>
               <select name={meal.courseMeal}>
                <option>Appetizers</option>
                <option>Starters</option>
                <option>Main course</option>
                <option>Dessert</option>
                onChange={(e) => setMeal({ ...meal,courseMeal: e.target.value })}
               </select><br/>

            <label>
                {" "}
                Price:{" "}</label><br/>
            <input type="number" name={meal.price} required/><br/>
            <button type="submit" value="Submit">Continue</button> 
            
        </form>
        </div>
        
        </body>);
  }

export default CreateMeal;
  