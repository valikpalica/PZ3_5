document.getElementById('save').addEventListener('click',()=>{
    let name = document.getElementById('name').value;
    fetch('/data/addPidrozdil',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name})
    }).then(()=>{
        window.location.href = '/page/main';
    });
});