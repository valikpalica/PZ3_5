document.getElementById('save').addEventListener('click',()=>{
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let patronime = document.getElementById('patronime').value;
    let rank = document.getElementById('rank').value;
    let date = document.getElementById('date').value;
    fetch('/data/addWorker',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name,surname,patronime,rank,date})
    }).then(()=>{
        window.location.href = '/page/main';
    });
});