class Egreso extends Dato {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }

    get id() {
        return this._id;
    }
}
const cargarEgresos = () => {
    let egresosHTML = "";

    for (const egreso of egreso) {
        egresosHTML += crearEgresoHTML(egresos)
    }
    document.getElementById(" lista-egresos").innerHTML=egresosHTML;
}
const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
      <div class="lista-egresos">
         <div class="elemento-descripcion">${egreso.descripcion}</div>
         <div class="elemento-valor">${formatoMoneda(egreso.valor)}</div>
         <div class="icono close-circle-outline" onclick="eliminarEgreso('${egreso.id}')"></div>
      </div>`;
   
    return egresoHTML;
   }
   function eliminarEgreso(id){
    const indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    if (indiceEliminar !== -1) {
        egresos.splice(indiceEliminar, 1);
        calcularTotal();
        mostrarEgresos();

    }
   }