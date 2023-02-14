let formContainer = document.querySelector(".form-container");
let confirmationText = document.querySelector(".confirmation-text");
let form = document.querySelector("form");
let nameInput = document.getElementById("name");

form.addEventListener('submit', (e)=>{
    e.preventDefault();


    setTimeout(()=>{
        form.classList.add("hidden");
        formContainer.classList.add("bg-white");
        formContainer.classList.add("rounded");
        formContainer.classList.add("p-10");
        confirmationText.innerText = `Thank you for signing up with MI 449 ESports ${nameInput.value}! A representative will be with you shortly`
        confirmationText.classList.remove("hidden");
    }, 1000);
})