import {useState} from 'react';

function GetMeal() {
  const [isMessage, setIsMessage] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [messagedata, setMessageData] = useState({});
  const [id,setID]=useState("");
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
    await fetch("http://localhost:5001/api/meal")
      .then((res) => {
        console.log(res.json());
      })
      .catch((err) => console.log(err));
  }
  return (
    
    <div>   
    <button onClick={(e) => getData(e)




    }>
      GETDATA
      </button> 
    
        </div>
        
        );
  }

export default GetMeal;