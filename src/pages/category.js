import {useState, useEffect} from "react";
import {useParams, useNavigate } from "react-router-dom";
import {getFilteredCategory} from "../api";

import {Preloder} from "../components/preloder";
import {MealList} from "../components/mealList";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    useEffect(() => {
        getFilteredCategory(name)
            .then(data => setMeals(data.meals));
    }, [name])

    return <>
        {!meals.length ? <Preloder /> : <MealList meals={meals} /> }
        <div className="btn-wrap">
            <button className="btn" onClick={goHome}>Go home</button>
        </div>
    </>

}

export {Category}