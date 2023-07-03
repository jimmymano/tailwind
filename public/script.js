document.addEventListener('DOMContentLoaded', function(){
    
    // ******* Hide/Show start *******//
    const form = document.getElementById('form');
    const submitButton = document.getElementById('button2');
    const messageContainer = document.getElementById('errorcontainer');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const button = document.querySelector("#button");
    const field = document.querySelector("#field");
    const closeButtons = document.getElementsByClassName('closebtn');
    const cards = document.getElementsByClassName('card')



    
  console.log(closeButtons)
  console.log(cards)
//   closeBtn[0].addEventListener('click', closeCard)
    for(const closeButton of closeButtons){
        closeButton.addEventListener('click', closeCard)
    }

    // closeBtn.addEventListener('click',closeCard)

    
  
    
    let isValid = false;
    let passwordsMatch = false;
    
    function validateForm(){
    //Constraint API to checkValidity()
    //checkValidity() API is run on the form and returns boolean
    isValid = form.checkValidity();
    console.log(isValid)
    if(!isValid ){
        messageContainer.classList.remove('hidden');
        messageContainer.textContent = "Password Not Valid"
        messageContainer.style.borderColor ='red';
        return
    }
    //Password match validation
    if( password1.value === password2.value){
        passwordsMatch = true;
        messageContainer.style.borderColor = 'red'
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    }else{
        passwordsMatch = false;
        messageContainer.textContent = "Password Invalid "
        messageContainer.style.borderColor = 'red';
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return
        
    }
    //If form is valid and passwords match
    if(isValid && passwordsMatch){
        messageContainer.classList.remove('hidden');
        messageContainer.textContent = "Successful Registration !";
        messageContainer.style.borderColor = 'green';
        
    }
    
}



function storeFormData(){
        const user = {
            password: form.password2.value,
        }
        // Do something with user data
        console.log(user);
    }
    
    function processFormData (e){
        e.preventDefault();
        console.log(e)
        validateForm();
        //Submit data if valid
        if(isValid && passwordsMatch){
            storeFormData();
        }
    }
    
    // ******* Hide/Show end *******//
    form?.addEventListener('submit', processFormData)
    // ******* Javascript Validation end *******//
    
    //Add Click event to button
    button?.addEventListener('click', ()=>{
        if(field.classList.contains('hidden')){
            field.classList.remove('hidden');
        }else{
            field.classList.add('hidden')
        }
    })
    

}    
)






