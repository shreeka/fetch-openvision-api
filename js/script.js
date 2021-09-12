const input = document.getElementById('chooseFile');
const form = document.getElementById('e_form');
const api_url = 'https://cors.bridged.cc/https://api.openvisionapi.com/api/v1/detection';
const result= document.getElementById('result');


form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
    event.preventDefault();

    var formData = new FormData();
    formData.append('model','yolov4');
    formData.append('image', input.files[0]);

    fetch(api_url, {
        method: 'POST',
        body: formData
    }).then(
        response => response.json()
    ).then(data => {
            for(const prediction of data.predictions){
                const listItem = document.createElement('li');
                listItem.textContent = `${prediction.label}:${prediction.score}`;
                result.appendChild(listItem);
            }
        }


    ).catch(
        error => console.log(error)
    );



}

