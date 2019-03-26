function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}
function getName(id){
    return fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`)
        .then(handleErrors)
        .catch(error=>console.log(error))
        .then(response => response.json())
        .then(json => json.map(a => a.name))
        .then(result=>console.log(...result))
}
getName(3);
