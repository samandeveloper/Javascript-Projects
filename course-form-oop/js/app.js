const form = document.getElementById("customer-form")
const customerName = document.getElementById("name")
const course = document.getElementById("course")
const author = document.getElementById("author")
const list = document.querySelector(".row")

form.addEventListener("submit" , function(e){       //Note: submit NOT click
    e.preventDefault()
    if(customerName.value && course.value && author.value){     //condition: all of the 3 inputs should be field
        //create single customor
        const element = document.createElement("div")
        element.classList.add("col-11", "mx-auto", "col-md-6", "col-lg-4", "my-3")
        const random = Math.floor(Math.random()*5)+1    //random should be written here NOT outside the form
        //add children to the parent div
        element.innerHTML = `<div class="card text-left">
        <img src="./img/cust-${random}.jpg" class="card-img-top" alt="">
        <div class="card-body">
        <!-- customer name -->
        <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name"> ${customerName.value}</span></h6>
        <!-- end of customer name -->
        <!-- customer name -->
        <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
        ${course.value}
        </span></h6>
        <!-- end of customer name -->
        <!-- customer name -->
        <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author"> ${author.value}</span></h6>
        <!-- end of customer name -->
        </div>
        </div>`
        list.appendChild(element)

        //after submitting all the three values should be removed
        customerName.value = ""
        course.value = ""
        author.value = ""
    }  
})      

//feedback & loading
const feedback = document.querySelector(".feedback")
const loading = document.querySelector(".loading")
//after clicking submit button, 3 field should be brown again
const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener("click" , function(){
    console.log("clicked")
    author.classList.remove("complete")
    course.classList.remove("complete")
    customerName.classList.remove("complete")
    //if 3 fields completed
    if(customerName.value && course.value && author.value){
        console.log("3 full")
        feedback.classList.remove("feedback")
        loading.classList.remove("loading")
        //make the calculating text green
        feedback.classList.add("showItem" , "alert" , "alert-success")
        setTimeout(() => {
            feedback.classList.add("feedback")
            loading.classList.add("loading")
            feedback.classList.remove("showItem" , "alert" , "alert-success")
        }, 3000);
    }
})

//alerts
function alert(){
    customerName.addEventListener("blur" , function(){
        if(customerName.value){
            customerName.classList.add("complete")
        }
    
        else{
            customerName.classList.add("fail")
        }
    })
    
    course.addEventListener("blur" , function(){
        if(course.value){
            course.classList.add("complete")
        }
            // course.classList.remove("complete")
        else{
            course.classList.add("fail")
        }
    })

    author.addEventListener("blur" , function(){
        if(author.value){
            author.classList.add("complete")
        }else{
            author.classList.add("fail")
        }
    })

}

alert()
