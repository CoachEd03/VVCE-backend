# RestaurantForms
This project is admin side portal where booking a reservation, create meals &amp; edit, delete them, as well as a message added on experience of the customer will be handled..

Introduction:

Register and Login page will be created and will only able to register if domain is @coached.com

Form 1: Book a reservation, edit & cancel .
A reservation button will be available to book reservations on behalf of customer. It will open a form contains all these fields:

- number of guests —> type : Number
- Guests name —> type : String
- Phone number —> type : Number 
- Email optional —> type : email
- Continue —> type : submit button

- On the page, all the reservations will be displayed with Edit and Cancel button, to modify and cancel reservations.

Form 2: Create meals, edit and delete.

A create Meal button on click a form will be opened with heading — Create a Meal. It will open a form contains all these fields.  

- Meal heading —> type : String
- Ingredients —> type : Array
- Price —> type : Number 
- Course meal —> type: Array, dropdown (breakfast, lunch, snack, dinner)
- Type —> Veg/non-veg/vegan (prefilled veg)
- Continue —> type : submit button

- On the page, all the meals will be displayed under their respective category. Their will be seprate icons to edit and delete meals.

##How to use in development

Clone the project
```
git clone url
```

To start backend, go to backend folder 
```
cd frontend
npm install
npm start
```

To start frontend, go to frontend folder 
```
cd backend
npm install
npm start
```

