import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';

import { MealList } from '../components/MealList';

function Category() {
    const { goBack } = useHistory();

    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className='btn' onClick={goBack}>
                GO BACK
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };
