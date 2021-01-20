export class Heroe {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;

    constructor(nombre: string,bio: string,img: string, aparicion: string,casa: string) { 
        // Initialization inside the constructor
        this.nombre = nombre;
        this.bio = bio;
        this.img = img;
        this.aparicion = aparicion;
        this.casa = casa;
    }
    
}

