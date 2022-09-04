const testButton = document.querySelector('.test-button')
const fileList = document.querySelector('.file-list')

const host = 'localhost:3000'
const url = 'http://' + host + '/data'
let files = []

async function sendGet() {
    try {
        const response = await axios.get(url);
        files = response.data

        function displayFileList() {
            for(let i = 0; i < files.length; i++) {
                const file = document.createElement('div')
                file.classList.add('file')
                const fileName = document.createTextNode(files[i])
                file.appendChild(fileName)
                fileList.appendChild(file)
            }
        } displayFileList()
    } catch (error) {
        console.error(error);
    }
}

testButton.addEventListener("click", sendGet)