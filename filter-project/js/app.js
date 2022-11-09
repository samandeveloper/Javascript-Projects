const all = document.querySelectorAll(".store-item-icon")
const allBtn = document.getElementById("all")

const sweets = document.querySelectorAll(".sweets")
const sweetsBtn = document.getElementById("sweets")

const cupcakes = document.querySelectorAll(".cupcakes")
const cupcakesBtn = document.getElementById("cupcakes")

const cakes = document.querySelectorAll(".cakes")
const cakesBtn = document.getElementById("cakes")

const doughnuts = document.querySelectorAll(".doughnuts")
const doughnutsBtn = document.getElementById("doughnuts")

//all button
allBtn.addEventListener("click" , function(){  
    console.log("all clicked")
    
    sweets.forEach(function(sweet){
        sweet.style.display = "block"
    })   

    cupcakes.forEach(function(cupcake){
        cupcake.style.display = "block"
    }) 

    cakes.forEach(function(cake){
        cake.style.display = "block"
    })

    doughnuts.forEach(function(doughnut){
        doughnut.style.display = "block"
    })
})

//sweet button
sweetsBtn.addEventListener("click" , function(){  
    sweets.forEach(function(sweet){
        sweet.style.display = "block"
    })   
    cupcakes.forEach(function(cupcake){
        cupcake.style.display = "none"
    }) 
    cakes.forEach(function(cake){
        cake.style.display = "none"
    })
    doughnuts.forEach(function(doughnut){
        doughnut.style.display = "none"
    })
})

//cakes button
cakesBtn.addEventListener("click" , function(){  
    cakes.forEach(function(cake){
        cake.style.display = "block"
    })   
    cupcakes.forEach(function(cupcake){
        cupcake.style.display = "none"
    }) 
    sweets.forEach(function(sweet){
        sweet.style.display = "none"
    })
    doughnuts.forEach(function(doughnut){
        doughnut.style.display = "none"
    })
})

//cupcakes button
cupcakesBtn.addEventListener("click" , function(){  
    cupcakes.forEach(function(cupcake){
        cupcake.style.display = "block"
    })   
    cakes.forEach(function(cake){
        cake.style.display = "none"
    }) 
    sweets.forEach(function(sweet){
        sweet.style.display = "none"
    })
    doughnuts.forEach(function(doughnut){
        doughnut.style.display = "none"
    })
})

//doughnuts button
doughnutsBtn.addEventListener("click" , function(){  
    doughnuts.forEach(function(doughnut){
        doughnut.style.display = "block"
    })   
    cakes.forEach(function(cake){
        cake.style.display = "none"
    }) 
    sweets.forEach(function(sweet){
        sweet.style.display = "none"
    })
    cupcakes.forEach(function(cupcake){
        cupcake.style.display = "none"
    })
})