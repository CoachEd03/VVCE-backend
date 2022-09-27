import mongoose from "mongoose";
const meal=mongoose.Schema({
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

const MealSchema=mongoose.model("meal",user);
export default MealSchema;