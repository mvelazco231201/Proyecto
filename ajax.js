const muestra = document.getElementById("btnMostrar");
muestra.addEventListener('click', () => {
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/peliculas/", true);
    http.send();
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);

            let details = document.getElementById("details");
            data.estruct.forEach(element => {
                details.innerHTML += `<div class="card border-primary mb-3" style="max-width: 18rem;">
                <h3 class="card-header">ID: ${element.id} </h3>
                <p class="card-text"><strong>Nombre: </strong> ${element.nombre} </p>
                <p class="card-text"><strong>Director: </strong> ${element.director}</p>
                <p class="card-text"><strong>Año: </strong> ${element.año} </p>
                <p class="card-text"><strong>Calificación: </strong> ${element.calificacion}</p>
                 </div>`;
            });
            console.log(data);
        }
        else {
            details.innerHTML += "Error en la llamada a la API"
        }
    }
});

const agrega = document.getElementById("btnAgregar");
agrega.addEventListener('click', () => {
    console.log("hecho");
    let id = parseInt(document.getElementById("txtId").value);
    let nombre = document.getElementById("txtNombre").value;
    let director = document.getElementById("txtDirector").value;
    let año = document.getElementById("txtAño").value;
    let calificacion = document.getElementById("txtCalificacion").value;

    const http = new XMLHttpRequest();
    http.open("POST", "http://localhost:3000/peliculas/new");
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(JSON.stringify({ "id": id, "nombre": nombre, "director": director, "año": año, "calificacion": calificacion }));
    
});

const elimina = document.getElementById("btnEliminar");
elimina.addEventListener('click', () => {
    console.log("hecho");
    let id = parseInt(document.getElementById("txtId").value);

    const http = new XMLHttpRequest();
    http.open("DELETE", "http://localhost:3000/peliculas/" + id);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send();
});

const actualiza = document.getElementById("btnActualizar");
actualiza.addEventListener('click', () => {

    let id = parseInt(document.getElementById("txtId").value);
    let nombre = document.getElementById("txtNombre").value;
    let director = document.getElementById("txtDirector").value;
    let año = document.getElementById("txtAño").value;
    let calificacion = document.getElementById("txtCalificacion").value;

    const http = new XMLHttpRequest();
    http.open("PUT", "http://localhost:3000/peliculas/" + id);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(JSON.stringify({"nombre": nombre, "director": director, "año": año, "calificacion": calificacion }));
});










/*const agrega = document.getElementById("btnAgregar");
agrega.addEventListener('click', () => {
    console.log("hecho");
    let id = parseInt(document.getElementById("txtId").value);
    let nombre = document.getElementById("txtNombre").value;
    let director = document.getElementById("txtDirector").value;
    let año = document.getElementById("txtAño").value;
    let calificacion = document.getElementById("txtCalificacion").value;

    const http = new XMLHttpRequest();
    http.open("POST", "http://localhost:3000/peliculas/new",true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DOM && this.status === 200){
            let details = document.getElementById("details");
            details.innerHTML += `
            <div> 
              <p><strong>${this.response}</p>
            </div>`
        }
    }
   http.send(("ID:"+ id, "nombre:"+ nombre, "director:"+ director, "año:"+ año, "califiacion:"+ calificacion));
});*/