// delete a book


// let deleteBtns = document.querySelectorAll('#book-list .delete');
// Array.from (deleteBtns)
//     .forEach( deleteBtn => {
//     deleteBtn.addEventListener('click', function(e){
//         const clickedButtonParent = e.target.parentElement;
//         clickedButtonParent.parentNode.removeChild(clickedButtonParent);
//     })
// })

// delete using bubbling

// first lets grab the parentElement which is a "ul"

let ul = document.querySelector("#book-list ul");
ul.addEventListener('click', function(e){
    if( e.target.className == 'delete'){
        const clickedButtonParentElement = e.target.parentElement;
        ul.removeChild( clickedButtonParentElement )
    }
})
