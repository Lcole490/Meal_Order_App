import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);


  // The useEffect Hook is implemented here to avoid infinite loop. meals are only fetched once and are not retriggered by component rerender
  // when fetchMeals function is called.

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        ///..
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);



  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
