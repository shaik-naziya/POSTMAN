let btn = document.querySelector('button')

function apiCall(url){
    let xhr = new XMLHttpRequest()
    console.log(xhr)

    xhr.responseType = 'json'
    xhr.onprogress = function () {
        console.log("loading...")
    }
    xhr.open('GET', url)
    xhr.send()

}
btn.addEventListener('click',function(){
    apiCall('https://restcountries.com/v2/all', (data) => {
        console.log(data);
    })
    // fetch('https://restcountries.com/v2/all')
    // .then((fetchData) => {return fetchData})
    // .then((fetchData) => { console.log(fetchData);})
    
})

