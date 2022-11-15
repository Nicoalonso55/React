/* Back End */
import Item from "../components/Item";
import products from "../data/data";
function getItems () {

    let error = false;

    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            if (error !== true)
            resolve(products);
            else {
                reject ("Error en la API");
            }
        },2000);


    });
}  

export function getSingleItem (idParam) {

    let error = false;

    return new Promise ((resolve, reject) => {
        let itemRequested = products.find ( ( Item) => Item.id === parseInt (idParam) )
        setTimeout (()=> {
            if (error !== true)
            resolve(itemRequested);
            else {
                reject ("Error en la API");
            }
        },2000);


    });
}

/* Front End 
console.log ("App iniciada");

let promiseAPI = getItems();

promiseAPI.then((res)=> {
    console.log ("Llegamos", res);
}).catch((resError)=> {
    console.log ("Error: ", resError)
})
*/
export default getItems;
