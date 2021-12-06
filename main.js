let db = new Localbase('db');

function doStuff() {
    db.collection('users').get().then(users => {
        console.log(users)
    })
}
btn = document.getElementById("btn");
btn.addEventListener('click', doStuff);