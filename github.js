const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
getUser()
async function getUser(username){
    try{
        const { data } = await axios(APIURL + username)
        craeteUserCard(data)
    }catch(err){
        if(err.response.status == 404){
            createErrorCard('No user profile found')
        }
    }
}
function craeteUserCard(user){
    const cardHTML = `
    <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>followers</strong></li>
            <li>${user.following} <strong>following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos">
        </div>
    </div>
</div>
    `
    main.innerHTML = cardHTML
}
function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </di>
    `
    main.innerHTML = cardHTML
}
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const user = search.value
    if(user){
        getUser(user)
        search.value = ''
    }
})