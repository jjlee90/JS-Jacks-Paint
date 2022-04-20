function configureListeners() {
    // select img elements  
    let images = document.getElementsByTagName('img')

    // iterate over images and add mouseover event listeners  
    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener("mouseover", addOpacity)
        document.getElementById(images[i].id).addEventListener("mouseleave", removeOpacity)

    }
}

function addOpacity(event) {
    let images = document.getElementsByTagName('img')
    for (var i = 0; i < images.length; i++) {
        // when mouse is over an image, that image opacity will reduce
        if (document.getElementById(images[i].id) === event.target) {
            document.getElementById(images[i].id).style.opacity = ".5"
        }
    }
    // when mouse is over an image, the product info will appear
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    let images = document.getElementsByTagName('img')
    for (var i = 0; i < images.length; i++) {
        // when mouse leaves the image the opacity will increase
        if (document.getElementById(images[i].id) === event.target) {
            document.getElementById(images[i].id).style.opacity = "1"
        }
    }
    // when mouse leaves the image, the text content will become a empty string
    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}

// setting product info and invoking updateprice
function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            // set variables for price and color name and invoke a function to update the price     
            colorName = "Lime Green"
            price = "$14.99"
            updatePrice(colorName, price)
            break;
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            colorName = "Medium Brown"
            price = "$11.14"
            updatePrice(colorName, price)
            break;
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            colorName = "Royal Blue"
            price = "$22.99"
            updatePrice(colorName, price)
            break;
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            colorName = "Solid Red"
            price = "$13.42"

            updatePrice(colorName, price)
            break;
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price 
            colorName = "Solid White"
            price = "$21.98"

            updatePrice(colorName, price)
            break;
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price    
            colorName = "Solid Black"
            price = "$4.99"

            updatePrice(colorName, price)
            break;
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            colorName = "Solid Cyan"
            price = "8.22"

            updatePrice(colorName, price)
            break;
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price  
            colorName = "Solid Purple"
            price = "$11.99"
            updatePrice(colorName, price)
            break;
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            colorName = "Solid Yellow"
            price = "$14.99"
            updatePrice(colorName, price)
            break;
        default:
    }

    function updatePrice(colorName, price) {
        // select element with corresponding id
        let colorPrice = document.getElementById("color-price")
            // display price
        colorPrice.textContent = price


        // select element with corresponding id
        let color = document.getElementById("color-name")
            //display color name
        color.textContent = colorName
    }

}