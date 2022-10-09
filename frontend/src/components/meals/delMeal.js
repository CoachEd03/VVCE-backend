import {useState} from 'react';

function DelMeal() {
    const[meal,getMeal]= useState ({ 
        mealName: "",
        ingr1:"",
        ingr2:"",
        type:"",
        price:"",
        courseMeal:""
    })
    function delData(e) {
       e.preventDefault()
        console.log(meal)
        delMealApi();
    }
async function delMealApi(id) {
 
  await fetch("http://localhost:5001/api/meal?id="+id,
  {
    method:'DELETE',
  })
  
  .then((res) => {
          console.log("delete");
        })
        .catch((err) => console.log(err));
         
  }
  return (
    
    <div>   
    <button onClick={(e) => delData(e)}>
      DELETE
      </button> 
    
        </div>
        
        );
  }

export default DelMeal;