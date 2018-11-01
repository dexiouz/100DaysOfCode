// delete a book


// let deleteBtns = document.querySelectorAll('#book-list .delete');
// Array.from (deleteBtns)
//     .forEach( deleteBtn => {
//     deleteBtn.addEventListener('click', function(e){
//         const clickedButtonParent = e.target.parentElement;
//         clickedButtonParent.parentNode.removeChild(clickedButtonParent);
//     })
// })

// delete using events bubbling

// first lets grab the parentElement which is a "ul"

let ul = document.querySelector("#book-list ul");
ul.addEventListener('click', function(e){
    if( e.target.className == 'delete'){
        const clickedButtonParentElement = e.target.parentElement;
        ul.removeChild( clickedButtonParentElement )
    }
})

// PREVENT DEFAULT BEHAVIOUR AND EXTRACT THE VALUE OF WHAT HAS BEEN TYPED

    // first lets grab the form
const addForm = document.forms['add-book'];
    // lets attach a submit event and a listener to the form
addForm.addEventListener('submit', function(e){
    // lets prevent default so the page doesn't refrresh
    e.preventDefault();
    // lets grab what is typed into the form and save it as value
    const value = addForm.querySelector('input[type = "text"]').value;
    // lets console the value and type something
    console.log(value)

});