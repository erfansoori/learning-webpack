import profileStyles from '../assets/css/profile.css'
const profilePage = ()=>{
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class','profile-wrapper')
    const title = document.createElement('h4')
    title.setAttribute('class',profileStyles.title)
    title.appendChild(document.createTextNode('Profile Page'))
    const body = document.createElement('div')
    body.setAttribute('class',profileStyles.body)
    body.appendChild(document.createTextNode('this is a simple profile page '))
    wrapper.appendChild(title)
    wrapper.appendChild(body)
    return wrapper
}

document.querySelector('#root').appendChild(profilePage())