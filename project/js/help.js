
const confirmButton = document.getElementById('confirmButton');
const inputBox = document.getElementsByClassName('adding__input');
// console.log(inputBox[0]);

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    // inputBox.forEach((item) => {
    //     inputBox = item;
    // });
    let newEntry = inputBox[0].value;
    newEntry = String(newEntry);
    if (newEntry.lengh >= 6){ 
        newEntry.slice(-1,);
        newEntry += '...';
    // } else if(true){
    //     movieDB.movies.push(inputBox[0].value);
    }
    console.log(newEntry);
    // console.log(typeof(newEntry.lengh));
});