const guardar = function(){
    const form = document.querySelector("#formCrear");

    const boton = document.querySelector("#submit");
    boton.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const recetas = {};
    let valid = true;
    formData.forEach((valor, clave) => {
    if (valor.trim() === "") {
    valid = false;
    }
    recetas[clave] = valor;
    });
    if (!valid) {
    alert("Debes completar todas las casillas");
    return; 
    };
    let save = JSON.parse(localStorage.getItem("formCrear")) || [];
    save.push(recetas);
    localStorage.setItem("formCrear", JSON.stringify(save));
    alert("Tu receta ha sido guardada")
    return
   }) 
}

guardar()

const recetas = function(){
    const contenedor = document.getElementById("lista")
    let card = JSON.parse(localStorage.getItem("formCrear")) || [];
    if (card.length === 0){
        []
        return
    }


    card.forEach((receta)=>{
        const div = document.createElement("div");
        div.classList.add("div_contenedor")
        
        const nombreReceta= document.createElement("h1");
        nombreReceta.textContent= receta.nombre

        const ingredientes= document.createElement("p");
        ingredientes.textContent= receta.ingredientes

        const instrucciones= document.createElement("p");
        instrucciones.textContent= receta.instrucciones

        const tiempoPreparacion= document.createElement("p");
        tiempoPreparacion.textContent= receta.tiempo

        const porciones= document.createElement("p");
        porciones.textContent= receta.porciones

        const categoria= document.createElement("p");
        categoria.textContent= receta.categoria

        const dificultad= document.createElement("p");
        dificultad.textContent= receta.dificultad

        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Delete";
        eliminarBtn.addEventListener("click", () => {
        card = card.filter(t => t.name !== card.name);
        localStorage.setItem("formCrear", JSON.stringify(card));
        div.remove();})

        const editar = document.createElement("button");
        editar.textContent="Editar";
        editar.addEventListener("click",()=>{
            card = card.filter(t => t.name !== card.name);
            
        })

        div.append(nombreReceta, ingredientes, instrucciones, tiempoPreparacion, porciones, categoria, dificultad, eliminarBtn,editar);

        contenedor.appendChild(div)
        
    })
}
recetas()

const busqueda = function(){
    
    const formBusqueda = document.querySelector("busqueda");
    let card = JSON.parse(localStorage.getItem("formCrear")) || [];
    const botonBUsqueda = document.getElementById("botonBuscar")
    
    
    botonBUsqueda.addEventListener("click", (e)=>{
        card.forEach((receta)=>{
            e.preventDefault();
            const formData = new FormData(formBusqueda);
            const recetas = {};
            let valid = true;
            formData.forEach((valor, clave) => {
            if (valor.trim() === "") {
            valid = false;
            }
            recetas[clave] = valor;
            });
            
            
            let save = JSON.parse(localStorage.getItem("busqueda")) || [];
            save.push(recetas);
            localStorage.setItem("busqueda", JSON.stringify(save));

            
        
        })
    })

}
console.log(busqueda());
