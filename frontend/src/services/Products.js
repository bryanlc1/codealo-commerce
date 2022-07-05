const url = 'https://codealo-commerce-cms.onrender.com';

export const getCategories = async () => {
    let categories =[];
    const list = await fetch(`${url}/categories`)
        .then(response =>response.json())
        .then(response => {return categories = response.map(cat => cat.name)})
        .catch(error => []);
        
        return categories = list;
}