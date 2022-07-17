class Ninja {
    constructor(nombre,salud,velocidad,fuerza){
        this.nombre = nombre;
        this.fuerza = 3;
        this.velocidad = 3;
        this.salud = salud;
    }
    sayName(){
        (this.nombre);
    }

    showStats(){
        this.nombre, this.fuerza, this.velocidad, this.salud;
    }
    drinkSake(){
        this.salud += 10;
    }
}

const ninja1 = new Ninja("hakuzi");

console.log(ninja1);
