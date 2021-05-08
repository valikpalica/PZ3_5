

let _data;
let _id;


window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    let id = document.getElementById('id').value;
    _id = id;
    fetch('/data/information',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({id})  
    }).then(res=>{
        return res.json();
    }).then(data=>{
        _data = data;
        createCardInformation(data);
    });
});

createCardInformation = (data) =>{
    let {dataWorker, dataPosada, dataPidrozdil} = data;
    document.getElementById('id').value = dataWorker.id;
    document.getElementById('name').innerHTML = `Name: ${dataWorker.name}`;
    document.getElementById('surname').innerHTML = `Surname: ${dataWorker.surname}`;
    document.getElementById('patronime').innerHTML = `Patronime: ${dataWorker.patronime}`;
    document.getElementById('rank').innerHTML = `Rank: ${dataWorker.rank}`;
    document.getElementById('date').innerHTML = `Date: ${dataWorker.date}`;
    document.getElementById('posada').innerHTML = `Posada: ${dataPosada.name}`;
    document.getElementById('pidrozdil').innerHTML = `Pidrozdil: ${dataPidrozdil.name}`;
}

document.getElementById('change').addEventListener('click',async(event)=>{
    // let pidrozdils = await get_pidrozdil();
    // let posadas = await get_posadas();
    // console.log(pidrozdils,posadas);
    event.preventDefault();
    let card = document.createElement('div');
    card.className = 'card border-success mb-3 center'
    card.style.maxWidth = '20rem'
    let card_header = document.createElement('div');
    card_header.className = 'card-header';
    card_header.textContent = 'Information';
    let card_body = document.createElement('div');
    card_body.className = 'card-body';
    let name = create_input('Name',_data.dataWorker.name,'name');
    let surname = create_input('Surname',_data.dataWorker.surname,'surname');
    let patronime = create_input('Patronime',_data.dataWorker.patronime,'patronime');
    let rank = create_input('Rank',_data.dataWorker.rank,'rank');
    let date = create_input('Date',_data.dataWorker.date,'date');
    let button_save = document.createElement('button');
    button_save.type = 'button';
    button_save.className = 'btn btn-success';
    button_save.style.width = '100%'
    button_save.style.margin = '10px auto';
    button_save.textContent = 'Save';
    button_save.addEventListener('click',save_changes)
    let array = [name,surname,patronime,rank,date,button_save];
    let element_body = append_elements(card_body,array);
    card.append(card_header);
    card.append(element_body);
    let body_change = document.getElementById('body_change');
    let body_info = document.getElementById('body_info');
    body_info.style.display = 'none';
    document.getElementById('btn_change').style.display = 'none';
    body_change.append(card);
})


const get_pidrozdil = async () =>{
    let response = await fetch('/data/pidrozdil');
    let pidrozdil = await response.json();
    return pidrozdil;
}

const get_posadas = async () =>{
    let response = await fetch('/data/posadas');
    let posada = await response.json();
    return posada;
}

const save_changes = () =>{
    let array = document.getElementsByClassName('change');
    let new_obj ={id:+_id};
    for (let index = 0; index < array.length; index++) {
        new_obj[array[index].id] = array[index].value;
    }
    let object = _data.dataWorker;
    for (const key in object) {
        console.log(object[key],new_obj[key]);
        if(object[key] !== new_obj[key]){
            console.log(true);
            //fetch update object
            let obj = {
                name:new_obj.name,
                surname:new_obj.surname,
                patronime:new_obj.patronime,
                rank:new_obj.rank,
                date:new_obj.date,
            };
            let id = new_obj.id;
            fetch('/data/updateWorker',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({id,obj})
            }).then(()=>{
                alert('update');
            }).catch(err=>{
                alert('error');
                console.log(err);
            });

        }
        else{
            console.log(false);
        }
    }
}

const append_elements = (element,array)=>{
    array.forEach(item => {
        element.append(item);
    });
    return element;
}

const create_input =(label,value,id)=>{
    let div = document.createElement('div')
    let lab = document.createElement('label');
    let inp = document.createElement('input'); 
    div.className = 'form-group';
    inp.type = 'text';
    inp.className = 'form-control change';
    inp.id = id;
    inp.value = value;
    lab.className = 'col-form-label mt-4';
    lab.textContent = label;
    lab.for = label;
    div.append(label);
    div.append(inp);
    return div;
}