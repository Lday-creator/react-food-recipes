import { API_URL } from './config';

const getMeailById = async (mealId) => {
    const responce = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await responce.json();
};

const getAllCategories = async () => {
    const responce = await fetch(API_URL + 'categories.php');
    return await responce.json();
};

const getFilteredCategory = async (catNane) => {
    const responce = await fetch(API_URL + 'filter.php?c=' + catNane);
    return await responce.json();
};

export { getMeailById, getAllCategories, getFilteredCategory };
