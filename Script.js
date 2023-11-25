const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes) // fire out event when we want to scroll 

checkBoxes() // intiall show first
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    //. It might be associated with determining a specific scroll position or triggering an action when the user scrolls to a certain point on the page, perhaps around 80% from the top.

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // method returns dom rect obj which is basically ka
        // rectangle which describes the size and position of the rectangle relative viewport


        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
        // if top is less than trigger bottom if it is we want to add the class of show 
        // else if it is more we want to remove the class 
    })
}
