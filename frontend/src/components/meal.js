import {useState} from 'react'
//import "./meal_style.scss";
export default function CreateMeal() {
    const ingredientList =[
      "Chicken",
      "Mutton",
      "Paneer",
      "fish",
      "egg"
];
    const sauces=["chilly sauce","hot sauce"];
    const mealType=["veg","non-veg"];
    const course=["appetizer","starters","Maincourse","desserts"];
    const[meal,setMeal]= useState ({ 
        mealName: "",
        ingr1:"",
        ingr2:"",
        type:"",
        price:"",
        courseMeal:"",
        
    });
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
          setMeal({
            mealName:"",
            ingr1:"Chicken",
            ingr2:"chilly sauce",
            type:"veg",
            price:"",
            courseMeal:"appetizer",

          });
      }
    return (
        
        <div>   
        <form onSubmit={(e) => Continue(e)}>
            
           <h1><b>CREATE YOUR MEAL!</b></h1><br/>
            <div>
           <label> Meal Name: </label>
            <input type="text" name={meal.mealName}
             onChange={(e) => setMeal({ ...meal,mealName: e.target.value }) }
              required/>
        </div>
        <br/>
        <div>
            <label> Main Ingredient:</label>
        <select value={meal.ingr1}
        onChange={(e) => setMeal({ ...meal,ingr1: e.target.value }) }
            >
                {ingredientList.map((option,index)=>(
                    <option value={option} key={index}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
        <br/>

        <div>
            <label>Sauce:</label>
        <select value={meal.ingr2}
        onChange={(e) => setMeal({ ...meal,ingr2: e.target.value }) }
            >
                {sauces.map((option,index)=>(
                    <option value={option} key={index}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
        <br/>

        <div>
        <label>Type:</label>
        <select value={meal.type}
        onChange={(e) => setMeal({ ...meal,type: e.target.value }) }
            >
                {mealType.map((option,index)=>(
                    <option value={option} key={index}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
        <br/>

        <div>
        <label>Course meal:</label>
        <select value={meal.courseMeal}
        onChange={(e) => setMeal({ ...meal,courseMeal: e.target.value }) }
            >
                {course.map((option,index)=>(
                    <option value={option} key={index}>
                        {option}
                    </option>
                ))}
            </select>
       </div>
       <br/>
       <div>
       <label>Price:</label>
        <input type="number" name={meal.price} 
        onChange={(e) => setMeal({ ...meal,price: e.target.value }) }
        required/>
        </div>
        <button type="submit" value="Submit">
            Continue
        </button>
        </form>
        </div>
        
        );
  }

//export default CreateMeal;
