import mongoose from "mongoose";
const mealChoice=mongoose.Schema({
        mealName: String,
        ingr1:String,
        ingr2:String,
        type:String,
        price:Number,
        courseMeal:String,
        createdAt:{
                type:Date,
                default:new Date(),
        },
});

const mealSchema=mongoose.model("meal",mealChoice);
export default mealSchema;
