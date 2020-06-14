class Pelicula{
    constructor(id, nombre, director, año, calificacion){
        this.id=id;
        this.nombre=nombre;
        this.director=director;
        this.año=año;
        this.calificacion=calificacion;
    }
    TodaInfo(){//json
        return {
            id: this.id, 
            nombre: this.nombre, 
            director: this.director,
            año: this.año, 
            calificacion: this.calificacion
        };
    }
}
module.exports = Pelicula;