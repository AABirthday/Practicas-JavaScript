(function(){
//------------------------------------------------------------------------------------------Variables
    var lista = document.getElementById("lista"),// Estan en la etiqueta ul
        tareaInput = document.getElementById("tareaInput"),// Es el TextField
        btnNuevaTarea = document.getElementById("btn-agregar");// id del boton agregar

//------------------------------------------------------------------------------------------Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,//Para almacenar el texto
            nuevaTarea = document.createElement("li"),//Creamos un elemento con la etiqueta li
            enlace = document.createElement("a"),//Se coloca el texto en un elemento de etiqueta a
            contenido = document.createTextNode(tarea);//Creamos un nodo de tipo texto

        //If para comprobar que existe contenido
        if(tarea == ""){
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;//Para salirse de la función agregarTarea
        }

        enlace.appendChild(contenido);//Se agrega el contenido al enlace
        enlace.setAttribute("href", "#");//Se le agrega un atributo al elemento etiqueta a
        nuevaTarea.appendChild(enlace);//Se agrega el elemento a DENTRO del elemento etiqueta li    
        lista.appendChild(nuevaTarea);//Se agrega la nueva tarea a la lista li
        
        tareaInput.value = "";//Se limpia el TextField

        //For para agregarle evento al nuevo elemento
        for (var i=0; i<=lista.children.length-1; i++){
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);//Este elemento accede al elemento padre
            });                                   //Y luego lo remueve de la lista este mismo elemento
        }
    };

    var comprobarInput = function(){
        tareaInput.className = "";//Se le quita el evento de advertencia al ser clickeado el TextField
        tareaInput.setAttribute("placeholder", "Agrega tu tarea"); //Se restaura el estado inicial del TextField
    };

    var eliminarTarea = function(){
        this.parentNode.removeChild(this);//Se accede al elemento padre (ul)
    };//Al acceder al elemento hijo del (ul), el elemento hijo que haya sido clickeado
//------------------------------------------------------------------------------------------Eventos
    //Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);//Cuando se de click click

    //Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    //For para recorrer todos los elementos de la lista y borrarlo al hacer click
    for (var i=0; i<=lista.children.length-1; i++){
        lista.children[i].addEventListener("click", eliminarTarea);//Se le asigna un evento a cada elemento de la lista
    }

    }());