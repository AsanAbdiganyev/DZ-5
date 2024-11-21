// //T.S
const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

let currentTab = 0

const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = "none";
    });
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = "block";
    tabs[id].classList.add('tab_content_item_active');
}


const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length;
    showTabContent(currentTab);
}

hideTabContent();
showTabContent();
setInterval(switchTab, 3000);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent();
                currentTab = tabIndex;
                showTabContent(currentTab);
            }
        });
    }
};




//CONVERT
// const usdInput = document.querySelector("#usd");
// const somInput = document.querySelector("#som");
// const euroInput = document.querySelector("#euro");
//
// somInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", '../data/converter.json');
//     request.setRequestHeader('Content-type', 'application/json');
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//         usdInput.value = (somInput.value / data.usd).toFixed(2);
//         euroInput.value = (somInput.value / data.euro).toFixed(2);
//     }
// }
// usdInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", '../data/converter.json');
//     request.setRequestHeader('Content-type', 'application/json');
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//         somInput.value = (usdInput.value * data.usd).toFixed(2);
//     }
// }
// euroInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", '../data/converter.json');
//     request.setRequestHeader('Content-type', 'application/json');
//     request.send();
//
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//         const somValue = euroInput.value * data.euro;
//         somInput.value = somValue.toFixed(2);
//         usdInput.value = (somValue / data.usd).toFixed(2);
//     }
// };
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur"); // Новый инпут для EUR


somInput.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", '../data/converter.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.onload = () => {
        const data = JSON.parse(request.response);
        usdInput.value = (somInput.value / data.usd).toFixed(2);
        eurInput.value = (somInput.value / data.eur).toFixed(2); // Конвертация в EUR
    }
}

usdInput.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", '../data/converter.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.onload = () => {
        const data = JSON.parse(request.response);
        somInput.value = (usdInput.value * data.usd).toFixed(2);
        eurInput.value = ((usdInput.value * data.usd) / data.eur).toFixed(2); // Конвертация в EUR
    }
}

eurInput.oninput = () => { // Новая логика для ввода в EUR
    const request = new XMLHttpRequest();
    request.open("GET", '../data/converter.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.onload = () => {
        const data = JSON.parse(request.response);
        somInput.value = (eurInput.value * data.eur).toFixed(2);
        usdInput.value = ((eurInput.value * data.eur) / data.usd).toFixed(2); // Конвертация в USD
    }
}




//DRY - don`t repeat yourself
//KISS - keep it super stupid

//CARD SWITCHER

 const nextButton = document.querySelector("#btn-next");
 const prevButton = document.querySelector("#btn-prev");
 const cardBlock = document.querySelector(".card");
 let cardIndex = 0;

 nextButton.onclick = () => {
     cardIndex++
     fetch(`https://jsonplaceholder.typicode.com/todos/${cardIndex}`)
         .then((response) => response.json())
         .then((data) => {
             cardBlock.innerHTML = `
             <p>${data.title}</p>
             <p>${data.completed}</p>
             <span>${data.id}</span>
             
             `
         })
}

