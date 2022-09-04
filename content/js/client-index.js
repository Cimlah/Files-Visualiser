const sendGetRequestButton = document.querySelector('.send-get-request')
const fileList = document.querySelector('.file-list')

const host = 'localhost:3000'
const url = 'http://' + host + '/get-data'
let files = []

async function sendGet() {
    try {
        const response = await axios.get(url);
        files = response.data

        function displayFileList() {
            let file, fileName = null

            if(fileList.childElementCount <= files.length) {
                fileList.replaceChildren('')

                for(let i = 0; i < files.length; i++) {
                    file = document.createElement('div')
                    file.classList.add('file')
                    fileName = document.createTextNode(files[i])
                    file.appendChild(fileName)
                    fileList.appendChild(file)
                }
            }
            else {
                fileList.replaceChildren('')
                displayFileList()
            }

            console.log(fileList.childElementCount)
        } displayFileList()
    } catch (error) {
        console.error(error);
    }
}

sendGetRequestButton.addEventListener("click", sendGet)