
async function getdata() {
let a = await fetch('http://jsonplaceholder.typicode.com/posts')
const result = await a.json(); 
  // .then((response) => response.json())
  // .then((data) => {obj=data});
  // Получим ответ [{...}, {...}, {...}, ...]
console.log(result);
}

getdata();