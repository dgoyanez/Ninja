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
    drinkSake(salud){this.salud+=10;}
}

class Sensei extends Ninja {
    constructor(nombre,salud,velocidad,fuerza){
        super(nombre,salud,velocidad,fuerza);
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
    }

}

const superSensei = new Sensei("Rochi,");

console.log(superSensei);

