let db = new Localbase('db');

function doStuff() {
    db.collection('users').add({
        id: 0,
        name: 'Sharvil',
        age: 12
    })
    db.collection('users').add({
        id: 1,
        name: 'Shanvika',
        age: 6
    })
}
btn = document.getElementById("btn");
btn.addEventListener('click', doStuff);