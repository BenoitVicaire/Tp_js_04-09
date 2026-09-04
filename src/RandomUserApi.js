const generateBtn=document.getElementById("generateBtn")
const data = await fetchUser()
const loader = document.getElementById("loader")


renderUser(data.results[0])

async function loadUser() {
    try{
        const fullCard=document.getElementById("fullCard")
        loader.classList.remove("hidden")   
        fullCard.classList.add("hidden")
        const data = await fetchUser()
        renderUser(data.results[0])
        loader.classList.add("hidden")
        fullCard.classList.remove("hidden")
    } catch (error){
        loader.classList.remove("active")
        console.error("Erreur API :", error)
    }
}

loadUser()

async function fetchUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data;
}

function renderUser(user){
    const name = document.getElementById("cardName")
    const email = document.getElementById("cardEmail")
    const adress = document.getElementById("cardAdress")
    const phone = document.getElementById("cardPhone")
    const picture = document.getElementById("cardPicture")

    name.textContent = user.name.first + " " + user.name.last
    email.textContent = user.email
    adress.textContent = user.location.city + ", " + user.location.country
    phone.textContent = user.phone
    picture.setAttribute("src",user.picture.medium)
}

generateBtn.addEventListener("click", async ()=>{
    loadUser()
})