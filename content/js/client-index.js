const testButton = document.querySelector('.test-button')

const host = 'localhost:3000'
const url = 'http://' + host + '/data'

const sendGet = () => {
    axios.get(url).then((response) => {
        console.log(response.data)
    })
}

testButton.addEventListener("click", sendGet)