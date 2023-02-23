import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Preloader } from '../components/Preloader';
import { getMeailById } from '../api';

function Recipe() {
    const { goBack } = useHistory();
    const { idMeal } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getMeailById(idMeal)
            .then((data) => setRecipe(data.meals[0]))
            .then();
    }, [idMeal]);

    return (
        <>
            <button className='btn' onClick={goBack}>
                GO BACK
            </button>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className='recipe'>
                    <div className='row recipe-main'>
                        <img className='recipe-thumbnail' src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <div>
                            <div className='recipe-name'>{recipe.strMeal}</div>
                            <div className='recipe-category'>
                                <span>Category: </span>
                                {recipe.strCategory}
                            </div>
                            {recipe.strArea ? (
                                <div className='recipe-area'>Country: {recipe.strArea}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className='row recipe-description'>
                        <div className='recipe-instructions'>
                            <div>{recipe.strInstructions}</div>
                            {recipe.strYoutube ? (
                                <div>
                                    <h5 className='center'>Video</h5>
                                    <div className='video-container'>
                                        <iframe
                                            title={idMeal}
                                            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                                -11
                                            )}`}
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div className='recipe-ingredients'>
                            <table className='centered'>
                                <thead>
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Measure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(recipe).map((key) => {
                                        if (key.includes('Ingredient') && recipe[key]) {
                                            return (
                                                <tr key={key}>
                                                    <td>{recipe[key]}</td>
                                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                                </tr>
                                            );
                                        }
                                        return null;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export { Recipe };
