// new promise ((res,rej)=>{})
// .then()
// .catch()
let btn = document.querySelector('button')
let div = document.querySelector('div')


// let cart = ["item1","item2","item3","item4","item5","item6",]
// let promise = new Promise((res,rej)=>{
//     if(cart.length>0){
//         res(cart)
//     }else{
//         rej("error")
//     }
//     rej("promise rejected")
// })
// console.log(promise)

// promise
// .then((data)=>{return data})
// .then((data)=>{console.log(data, "total amount : 200")})
// .catch((data)=>{console.log(data)})


function apiCall(url){
    let xhr = new XMLHttpRequest()
    console.log(xhr)

    xhr.responseType = 'json'
    xhr.onprogress = function () {
        console.log("loading...")
    }

    let promise = new Promise(function (resolve, reject) {
        xhr.onload = function () {
            resolve(xhr.response)
        }
        xhr.onerror = function () {
            reject("err")
        }
    })

    xhr.open('GET', url)
    xhr.send()

    return promise

}
btn.addEventListener('click',function(){
apiCall('https://dummyjson.com/carts')
.then((data)=>{ return data })

.then((data) => {return apiCall(`https://dummyjson.com/carts/${data.carts[1].id}`)})
.then((data) => { console.log(data);})
// .then(data => { return 
.then((cartsdata) => {return  apiCall(`https://dummyjson.com/carts/5`)})
.then((data)=>{ console.log(data); })
.catch((err) => {console.log("Entered url doesnot exist...");})

Promise.all([apiCall('https://dummyjson.com/carts/1'),apiCall('https://dummyjson.com/carts/2')])  
.then(([data1,data2]) => { 
    console.log("total amount of carts:", data1.total);
    console.log(data2.total);
    console.log("sum of the total amount of carts:",data1.total+data2.total);
})  
    
})

  
Promise.all([apiCall('https://dummyjson.com/carts/1'),apiCall('https://dummyjson.com/carts/2')])  
.then(([data1,data2]) => { 
    console.log("total amount of carts:", data1.total);
    console.log(data2.total);
    console.log("sum of the total amount of carts:",data1.total+data2.total);
})  