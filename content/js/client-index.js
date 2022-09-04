const sendGetRequestButton = document.querySelector('.send-get-request')
const fileList = document.querySelector('.file-list')
const sendPostRequestInput = document.querySelector('.current-path')

const host = 'localhost:3000'

async function sendGet() {
    const getUrl = 'http://' + host + '/get-data'
    let files = []

    try {
        const response = await axios.get(getUrl);
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

function sendPost() {
    const postUrl = 'http://' + host + '/send-data'

    axios.post(postUrl, {
        path: sendPostRequestInput.value
    })
}

sendGetRequestButton.addEventListener("click", sendGet)
sendPostRequestInput.addEventListener("blur", sendPost)