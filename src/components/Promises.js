/* Back End */

function APICall () {

    let error = false;

    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            if (error !== true)
            resolve({
                id: "",
                name: "",
                descripcion:"",
                stock: 1, 
            });
            else {
                reject ("Error en la API");
            }
        },2000);


    });
}

/* Front End */
console.log ("App iniciada");

let promiseAPI = APICall();

promiseAPI.then((res)=> {
    console.log ("Llegamos", res);
}).catch((resError)=> {
    console.log ("Error: ", resError)
})