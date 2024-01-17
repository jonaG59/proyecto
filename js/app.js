const cargarCabecero = () =>{
    var ingresos = [ 20000, 50000,];
    var egresos = [4000,800];

    const totalIngresos = () =>{
        var totalIngresos = 0;
        for (let ingreso of ingresos) {
            totalIngresos += ingreso;
         }
         return totalIngresos;
        }

        const totalEgresos = () =>{
            var totalEgresos =0;
            for (let egreso of egresos) {
                totalEgresos += egreso;
             }
             return totalEgresos;
            }

    var presupuesto = totalIngresos()-totalEgresos()
    var porcentajeEgreso = totalEgresos()/totalIngresos()

    console.log("Presupuesto:", presupuesto);
    console.log("Porcentage del Egreso:", porcentajeEgreso);
    console.log("Total Ingresos:", totalIngresos());
    console.log("Total Egresos:", totalEgresos());
}

cargarCabecero();
        ////
        const formatoMoneda = (valor) =>{
            return valor.toLocaleString('es-MX', {
                style: 'currency',
                currency: 'MXN',
                minimumFractionDigits: 2
             });
            }
            const formatoPorcentaje = (valor) => {
                return valor.toLocaleString('es-MX', {
                   style: 'percent',
                   minimumFractionDigits: 2
                });
               }
           const valor = 0.123456;

        console.log(formatoMoneda(valor)); 
        console.log(formatoPorcentaje(valor)); 

        ///
        function cargarApp() {
            cargarCabecero();

            
          function cargarApp() {
            
            cargarCabecero();
            cargarIngresos();
           }

           function cargarApp() {
            cargarCabecero();
            cargarEgreso();
           }

          }

        ///
const agregarDato = (event) => {
    event.preventDefault();

    const forma = document.getElementById('forma');
    const tipo = forma.elements['tipo'].value;
    const descripcion = forma.elements['descripcion'].value;
    const valor = forma.elements['valor'].value;
   
  
    if (descripcion && valor) {
       
       if (tipo === 'ingreso') {
         const ingresos = [];
         ingresos.push(new Ingreso(descripcion, valor));
   
         cargarCabecero();
         cargarIngreso();
       }
    }
   };
   
   // Asocia la función agregarDato al evento submit del formulario
   document.getElementById('forma').addEventListener('submit', agregarDato);

        
        

        