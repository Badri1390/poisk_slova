
let input = document.querySelector('.txt');
document.querySelector(".btn").addEventListener('click',() =>{
    var search=input.value
    input.value = ""
    wiki(search)
})



async function wiki (searchTerm) {
    const response = await fetch(`https://ru.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=1&prop=pageimages|extracts&exintro&explaintext&exlimit=max&format=json&origin=*`)
    const data = await response.json()
    const result = await data.query.pages//[2603].extract
    document.querySelector('.header').textContent = result[Object.keys(result)].extract
    //console.log(result[Object.keys(result)].extract);
}


