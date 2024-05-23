// Using async and await, implement the necessary code to recover the Todos list present in the following URL
//  through an http request: link: https://jsonplaceholder.typicode.com/todos
async function recoverApi(url) {
    try {
       let response = await fetch(url)
        if  (response.ok) {
            let json = await response.json();
            return json
        } else {
            throw new error("error, url doesnt exist")
        }
    } catch (error) {
        console.error("error, check your url and try again", error.message);
    }
}
recoverApi("https://jsonplaceholder.typicode.com/todos")
.then((val) => console.log(val))
.catch((err) => console.error(err.message))
.finally(() => console.log("process ended"));