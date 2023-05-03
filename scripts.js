let listOfProducts = [001, 002, 333];
let cartContent = 0;

function extendedMenu(){
    var menu = document.getElementById('extendedMenu')
    if (menu.style.display == 'flex'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function cartClicked(){
    let x = document.getElementById('popoutCheckout');
    if(x.style.display == 'none'){
        x.style.display = 'flex';
    }
    let y = document.getElementById('setCartItems');
    y.innerText = cartContent;
}

function exitPopup(){
    let x = document.getElementById('popoutCheckout');
    if(x.style.display == 'flex'){
        x.style.display = 'none';
    }
}

function addToCartClicked(){
    let x = document.getElementById('displayCartNumero')
    cartContent++
    x.innerText = cartContent + " Items"
}

