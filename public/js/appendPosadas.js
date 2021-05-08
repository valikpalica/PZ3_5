window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    fetch('/data/main').then(res=>{
       return res.json()
    }).then(data=>{
        let div = document.getElementById('worker');
        let value = create_input(data);
        div.appendChild(value);
    })
    fetch('/data/pidrozdil').then(res=>{
        return res.json();
    }).then(data=>{
        let div = document.getElementById('pidrozdil');
        let value = create_input_pidr(data);
        div.appendChild(value);
    })
});


const create_input = (data) =>{
    let div = document.createElement('div');
    div.className = 'form-group';
    let select = document.createElement('select');
    select.className = 'form-select';
    select.id = 'selector_1';
    for (let index = 0; index < data.length; index++) {
        let option = document.createElement('option');
        option.id = data[index].id;
        option.style.color = 'black';
        option.value=data[index].id
        option.textContent = `${data[index].name} ${data[index].surname} ${data[index].patronime}`
        select.appendChild(option);
    }
    div.appendChild(select);
    return div;
}

const create_input_pidr = (data) =>{
    let div = document.createElement('div');
    div.className = 'form-group';
    let select = document.createElement('select');
    select.className = 'form-select';
    select.id = 'selector_2';
    for (let index = 0; index < data.length; index++) {
        let option = document.createElement('option');
        option.id = data[index].id;
        option.style.color = 'black';
        option.value=data[index].id;
        option.textContent = `${data[index].name}`
        select.appendChild(option);
    }
    div.appendChild(select);
    return div;
}

document.getElementById('save').addEventListener('click',(event)=>{
    event.preventDefault();
    let name  = document.getElementById('name').value;
    let selectElement_1 = document.getElementById('selector_1');
    let id_worker = +selectElement_1.options[selectElement_1.selectedIndex].value;
    let selectElement_2 = document.getElementById('selector_2');
    let id_pidrozdil = +selectElement_2.options[selectElement_2.selectedIndex].value;
    fetch('/data/addPosada',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name,id_worker,id_pidrozdil})
    })
    window.location.href = '/page/main';
})