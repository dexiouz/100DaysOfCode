// delete a book
//  first target the delete buttons and save them in deleteBtns variable
let deleteBtns = document.querySelectorAll('#book-list .delete');

// Next lets convert the collection of the buttons into an array using array.from() 
Array.from (deleteBtns)

// Next we use Array.forEach to loop through each of the individual button
    .forEach( deleteBtn => {
        // ForEach of the individual button we add an event "click" and an event listener, a callBack function
    deleteBtn.addEventListener('click', function(e){
        // The first thing the callBack function will do is create a variable and save the clicked button parent element in the variable. In our case we save the parent Element as "clickedButtonParent". The parent Element of the clicked button is gotten by e.target.parentElement.
        // Here, e is the event, target is the element that emitted the event, parentElement is the parent of the element that emitted the target
        const clickedButtonParent = e.target.parentElement;
            // Now to delete the Element. 
        // One of the ways of deleting an element is through its parent like so: If p tag is what I want to remove, I will simply do:
        // p.parentNode.removeChild(p);
        // But clickedButtonParent is what we want to remove so we do
        clickedButtonParent.parentNode.removeChild(clickedButtonParent);
        // And thats it. Go ahead and try it out
    })

})