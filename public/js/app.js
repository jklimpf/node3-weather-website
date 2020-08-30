console.log('Client side javaScript file is loaded!')


fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }
        else
        console.log(data.location + '\n' + data.forecast)
    })
    
})

const weatherForm = document.querySelector('form')
const searchButton = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = searchButton.value

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }
        else
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
    })
    

   
})
})