// Using async and await, implement the necessary code to perform an HTTP POST rteques. To create a new post,
//  use the following URL: link (Method: Post). The body of the request must contain a post object with the following 
//  information: title and Flag Completed. The post data must be transmitted following the compilation of a form.
async function createObj(url, userData) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: 'application/x-www-form-urlencoded',
            body: userData})
        if (response.ok) {
            let jsonFormat = await response.json();
            return jsonFormat;
        } else {
            throw new Error('Error in post request');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function sendForm(form) {
    const formData = new FormData(form);

    createObj("https://jsonplaceholder.typicode.com/posts", formData)
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
    .finally(() => console.log("precces ended"))
}
