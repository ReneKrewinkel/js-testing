const fetchData = () => new Promise( (resolve, reject) => {

    fetch('https://een-of-ander-url')
    .then( response => response.json() )
    .then( data => resolve(data) )
    .catch( (err) => reject(err) )

})


const ophalen = async () => {
    try {
        data = await fetchData()
        /// ...
    } catch(e) {
        console.log(e)
    }
}