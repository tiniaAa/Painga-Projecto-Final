
//Declaracion variables
let Catalogo=[];
const URLcatalogo ="../db/data.json";


const rowContainer = document.getElementById("fila-catalogo")
//

function ObtenerDatos(){
    fetch(URLcatalogo)
         .then(response => response.json())
         .then(data => {
            Catalogo=data;
            renderProductos(Catalogo)
         });
}


function renderProductos(listaProductos) {
    if (!rowContainer) return;
    rowContainer.innerHTML = "";

    listaProductos.forEach(producto => {
        const columna = document.createElement("div");
        columna.className = "col-md-3"; 

        // 2. El innerHTML arranca directo desde la card (sin envolverlo en otra columna)
        columna.innerHTML = `
        <div class="card h-100">
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <p>${producto.nombre}</p>
                <p class="card-text">${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <div>
                    <button class="agregarCarrito" data-id="${producto.id}">Agrega al carrito</button>
                </div>
            </div>
        </div>
    `
        rowContainer.appendChild(columna);
    });
}

ObtenerDatos();
