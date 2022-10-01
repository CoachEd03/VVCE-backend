import {useState} from 'react'
import "./meal_style.scss";
function getMeal() {
    const[meal,getMeal]= useState ({ 
        mealName: "",
        ingr1:"",
        ingr2:"",
        type:"",
        price:"",
        courseMeal:""
    })
    function getData(e) {
        e.preventDefault()
        console.log(meal)
        getMealApi();
    }
async function getMealApi() {
    await fetch("http://localhost:5001/api/meal", {
      method: "GET",
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
    </form>
        </div>
        
        </body>);
  }

export default CreateMeal;