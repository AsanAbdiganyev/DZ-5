const button = document.querySelector('button');

button.onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.addEventListener('load', () => {
        console.log(xhr.response)
    })

    xhr.onload = () => {
        const data = JSON.parse (xhr.response);
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    }
}
