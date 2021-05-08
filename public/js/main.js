window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    fetch('/data/main').then(res=>{
        return res.json();
    }).then(data=>{
        createTable(data);
    })
});


const createTable = (data) =>{
    let body = document.getElementById('tbody');
    let innerHTML = ``;
    for (const item of data) {
        innerHTML+=`<tr class="table-info"><td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.rank}</td>
        <td>
        <button type="button" class="btn btn-danger" onclick=Delete(${item.id})>Delete</button>
        <button type="button" class="btn btn-success" onclick=Information(${item.id})>Info</button>
        </td>
        </tr>`;
    }
    body.innerHTML = innerHTML;
}

const Delete = (id) =>{
    console.log(id);
}
const Information = (id) =>{
    window.location.href = `/page/information/${id}`;
}