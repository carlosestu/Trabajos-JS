// Using async and await, implement the necessary code to recover the Todo with ID 4 through the following URL:link. 
// Then create two elements: a <h2> element containing the Todo title (title property)
//  An <Input Type = "Checkbox"> with the Checked property set to the value present for the complete
//   property of the Todo Append the two elements previously created  inside the container.
async function recoverAndCrerate(url) {
  try {
      let response = await fetch(url)  
      if(response.ok){
          let jsonFormat = await response.json();
          return jsonFormat;
    }else{
      throw new Error('Error,request is not valid');}
  } catch (error) {
    
      throw new Error('unexpected error in request'+ error.message);
    
  }
}
  recoverAndCrerate("https://jsonplaceholder.typicode.com/todos/4")
  .then((jsonFormat) => {
    let title = jsonFormat.title
    let completed = jsonFormat.completed
    let h2El = document.createElement('h2')
    h2El.textContent = title
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = completed
    let container = document.getElementById("container")
    container.appendChild(h2El)
    container.appendChild(checkbox)
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("process ended"))
