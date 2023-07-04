# DOM
- Document Object Model
- Created by the browser when a web  page is loaded
- looks more like a tree

# Manipulating DOM
- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- querySelector ()
    - it returns first element that has the specific CSS selector passed.
- querySelectorAll()
    - returns all elements that match with the CSS selector passed.
- append()
    - will append anything
- appendChild()
    - only append elements
- document.createElement()
    - document.createElement("div")
    - div.innerText = "some text" // only prints out exactly what you see on the screen. like if the display is set to none for some text tag then it wont print it.
    - div.textContent = "some text" //more like copies all the text from html
    -  div.innerHTML //add html to an element
    - div.remove() 
    - div.removeChild()
    - div.getAttribute()
    - div.setAttribute("attribute" , "value")
    - div.classList.add() //add a class
    - div.classList.remove() // remove a class
    - div.classList.toggle() // remove the class if it doesnt exist else adds that class
    - div.style.property // change the style
        