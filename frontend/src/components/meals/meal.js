import { useState, useEffect } from "react";

import "./meal_style.scss";

export default function CreateMeal() {
  const [isMessage, setIsMessage] = useState([]);
  const [id, setID] = useState("");

  const ingredientList = ["----", "Chicken", "Mixed vegetables","Mutton", "Paneer", "fish", "egg"];

  const sauces = ["----", "chilly sauce", "hot sauce","tomato sauce","chutney"];
  const mealType = ["----", "veg", "non-veg"];
  const course = ["----", "appetizer", "starters", "Maincourse", "desserts"];
  const [meal, setMeal] = useState({
    mealName: "",
    ingr1: "",
    ingr2: "",
    type: "",
    price: "",
    courseMeal: "",
  });

  useEffect(() => {
    getMealApi();
  }, [id]);

  function Continue(e) {
    e.preventDefault();
    //post the form data to backend
    callMealApi();
  }

  function getData(e) {
    e.preventDefault();
    //get all of the data from backend
    getMealApi();
  }
  async function updateMeal(e) {
    e.preventDefault();
    await fetch("http://localhost:5001/api/updateMeal?id=" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meal),
    })
      .then((res) => {
        console.log(res.text());
      })
      .catch((err) => console.log(err));

    setID("");
    setMeal({
      mealName: "",
      ingr1: "Chicken",
      ingr2: "chilly sauce",
      type: "veg",
      price: "",
      courseMeal: "appetizer",
    });
  }
  async function deleteMessage(
    id,
    mealName,
    ingr1,
    ingr2,
    type,
    price,
    courseMeal
  ) {
    try {
      await fetch("http://localhost:5001/api/deleteMeal?id=" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application?json",
        },
      }).then((res) =>
        console.log(res.text()).catch((err) => console.log("error:" + err))
      );
    } catch (err) {
      console.log("Some error", err);
    }
    setID(id);
    // setMessageData([id, mealName, ingr1, ingr2, type, price, courseMeal]);
  }

  async function getMealApi() {
    await fetch("http://localhost:5001/api/meal")
      .then((response) => response.json())
      .then((res) => setIsMessage(res))
      .catch((err) => console.log(err));
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
      mealName: "",
      ingr1: "Chicken",
      ingr2: "chilly sauce",
      type: "veg",
      price: 0,
      courseMeal: "appetizer",
    });
  }

  return (
    <div>
      <form onSubmit={(e) => (id ? updateMeal(e) : Continue(e))}>
        <h1>
          <b>{id ? "CREATE" : "UPDATE"} YOUR MEAL!</b>
        </h1>
        <br />
        <div>
          <label> Meal Name: </label>
          <input
            type="text"
            name={meal.mealName}
            value={meal.mealName}
            onChange={(e) => setMeal({ ...meal, mealName: e.target.value })}
            required
          />
        </div>
        <br />
        <div>
          <label> Main Ingredient:</label>
          <select
            value={meal.ingr1}
            onChange={(e) => setMeal({ ...meal, ingr1: e.target.value })}
          >
            {ingredientList.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <br />

        <div>
          <label>Sauce:</label>
          <select
            value={meal.ingr2}
            onChange={(e) => setMeal({ ...meal, ingr2: e.target.value })}
          >
            {sauces.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <br />

        <div>
          <label>Type:</label>
          <select
            value={meal.type}
            onChange={(e) => setMeal({ ...meal, type: e.target.value })}
          >
            {mealType.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <br />

        <div>
          <label>Course meal:</label>
          <select
            value={meal.courseMeal}
            onChange={(e) => setMeal({ ...meal, courseMeal: e.target.value })}
          >
            {course.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label>Price:</label>
          <input
            type="number"
            name={meal.price}
            value={meal.price}
            onChange={(e) => setMeal({ ...meal, price: e.target.value })}
            required
          />
        </div>
        <br />
        <button type="submit" value="Submit">
          CONTINUE
        </button>
        <br />
      </form>
      <center>
      <button type="submit" onClick={(e) => getData(e)}>
        GET UPDATED DATA
      </button>
      </center>
      <div>
        {isMessage.map((meal, index) => (
          <div className="messages" style={{ margin: "20px" }} key={meal._id}>
            <div className="messages__show">
              <h3>{meal.mealName}</h3>
              <span>
                {meal.ingr1}, {meal.ingr2}, {meal.type}, {meal.courseMeal}
                <p>{meal.price}</p>
              </span>
            </div>
            <div>
              <button
                className="messages__button"
                onClick={() => {
                  setID(meal._id);
                  setMeal(meal);
                }}
              >
                UPDATE
              </button>
              <button
                className="messages__button"
                type="submit"
                style={{ backgroundColor: "rgb(173, 30, 30)" }}
                onClick={() =>
                  deleteMessage(
                    meal._id,
                    meal.mealName,
                    meal.ingr1,
                    meal.ingr2,
                    meal.type,
                    meal.price,
                    meal.courseMeal
                  )
                }
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}