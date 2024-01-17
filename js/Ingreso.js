class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get id() {
        return this._id;
    }
}

const cargarIngresos = () =>{
    let ingresosHTML="";

    for (const ingresos of ingresos){
        ingresosHTML += crearIngresosHTML(ingresos)
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `
    <div class="lista-ingresos">
        <div class="elemnto-descripcion">${ingreso.descripcion}</div>
        <div class="elemento-valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="icono close-circle-outline=" onclik="eliminarIngreso('${ingreso.id}'"></div>
    </div>
    `
    return ingresoHTML;
}