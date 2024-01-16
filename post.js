let btn = document.querySelector('button')
let data1 = document.querySelector('.data1')
let products = document.querySelector('.products')
let naa = document.querySelector('.naa')
let UserId = document.querySelector('input[placeholder=UserId]')
let btn1 = document.querySelector('.btn1')
let emp1 = document.querySelector('.emp1')
let emp2 = document.querySelector('.emp2')
 console.log(UserId);
function apiCall(url,callBack){
    let xhr = new XMLHttpRequest()
    console.log(xhr)

    xhr.responseType ='json'
    xhr.onprogress = function(){
        console.log("loading...")
    }
    xhr.onload = function(){
        callBack(xhr.response)
        console.log(xhr.response);
                //    li.innerHTML = dd.join('')
        
        }
        xhr.onerror = function(){
            naa.innerHTML = "<h3>Entered URL is wrong.cross check your URL</h3>"
        }
    xhr.open('GET',url)
    xhr.send()
    return xhr

}

btn.addEventListener('click',function(){
    // console.log("asdc");

    let api = apiCall('https://dummyjson.com/products',(data)=>{
        // console.log(data)

        let list = data.products
         list.map((elem)=>{
            let ele = `<li>${elem.id}</li>`
                 emp1.innerHTML = ele
                return ele
         })
            apiCall(`https://dummyjson.com/products/${data.products[1].id}`,(productsdata)=>{
            console.log(productsdata.id)
       
                let ele1 = `<li><b>ID</b>:${productsdata.id} <br> <b>Title</b>:${productsdata.title} <br> <b>Description</b>:${productsdata.description} <br> <b>Price</b>:${productsdata.price}</li>`
               emp2.innerHTML = ele1   
            }) 
            apiCall('https://dummyjson.com/products',(data)=>{

            })

    })
    // console.log(api);
    // if(api.status == 200){
    //     console.log("status code is 200");
    // }
})
// apiCall(`https://dummyjson.com/products/${productsdata.id}/list`,(productslist)=>{
    // console.log(productslist)
   
// })
let inpVal
let listVal = []
UserId.addEventListener('keyup',function(e){
    inpVal = e.target.value
})
btn1.addEventListener('click',function(e){
    let objVal = {"inpVal": inpVal}
    listVal.push(objVal)

    var id = listVal[0].inpVal

    apiCall('https://dummyjson.com/products',(data)=>{
        // console.log(data)

        let list = data.products
         list.map((elem)=>{
            let ele = `<li>${elem.id}</li>`
                 data1.innerHTML = ele
                return ele
         })
         apiCall(`https://dummyjson.com/products/${id}`,(productsdata)=>{
            // console.log(productsdata)
       
                let ele2 = `<li><b>ID</b>:${productsdata.id} <br> <b>Title</b>:${productsdata.title} <br> <b>Description</b>:${productsdata.description} <br> <b>Price</b>:${productsdata.price}</li>`
               products.innerHTML = ele2   
            }) 


        })
    

})