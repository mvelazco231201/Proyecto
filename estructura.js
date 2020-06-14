class Estructura{
    constructor(){
        this.estruct = new Array();
        this.total=0;
    }
    mostrar(){
    let salida ="";
    for(let i=0; i<this.estruct.length; i++){
        salida += "<p>" + this.estruct[i].TodaInfo() + "<p>";
    }
    return salida;
    }
    buscar(info){
        let nodo=null;
        let i=0;
        while(i<this.estruct.length && nodo===null){//recorre el array mientras i sea menor al array y nodo sea null
            if(this.estruct[i].id===info)//posicion de i en array es igual a la información
            nodo=this.estruct[i];//el nodo será igual a la estructura en posicion de i
            i++;//incrementa de uno en uno para que el while se detenga hasta que la condicion se cumpla
        }
        return nodo;
    }
    agregar(elemento){
        this.estruct.push(elemento);
        this.total++;
    }
    indice(num){//recibe el id y valida si existe para regresar la posición del elemento
        let indice=null;
        let i=0;
        while(i<this.estruct.length && indice===null){//recorre el array mientras i sea menor al array e indice sea null
            if(this.estruct[i].id===num)//posicion de i en array es igual a la información
            indice=i;//el nodo será igual a la estructura en posicion de i
            i++;//incrementa de uno en uno para que el while se detenga hasta que la condicion se cumpla
        }
        return indice;
    }
}

module.exports = Estructura;