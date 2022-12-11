function getList(data) {

    return fetch('http://universities.hipolabs.com/search?country='+data)
    .then(data => data.json())
}

// function getList(data) {

//     return fetch('https://rickandmortyapi.com/api/character')
//     .then(data => data.json())
// }


export default getList;