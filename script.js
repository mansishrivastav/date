

function clickYes(){
    const image = document.getElementById('img');
    const h1 = document.getElementById('text'); 
    const myImage = "https://media.tenor.com/Doz_0PR3GQkAAAAi/cat-cats.gif";
    image.src = myImage;
    document.body.style.backgroundImage= 'url(https://images.unsplash.com/photo-1517867065801-e20f409696b0?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
    document.body.style.backgroundSize = 'cover';
    h1.innerHTML="Yayy!! call me to fix the date baby."
    h1.style.color = '#f53b57';
    h1.style.fontFamily = 'Pacifico, cursive';

    h1.style.animation = 'dancing 0.7s infinite alternate'; 

    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes dancing {
        0% { transform: translateX(0); }
        50% { transform: translateX(10px);  }
        100% { transform: translateX(0); }
    }
    `;
    document.head.appendChild(style);
}
const noButton = document.getElementById('no-button');

function moveButton(){
const noButton = document.getElementById('no-button');
const horizontal = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth))
const vertical =  Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight))
noButton.style.left = `${horizontal}px`
noButton.style.top= `${vertical}px`
}


