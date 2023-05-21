function ingresarlista(){

    //variable para cada casilla

    var paciente = document.getElementById("paciente").value;
    var enfermedad = document.getElementById("enfermedad").value;
    var condicion = document.getElementById("condicion").value;
    var diagnostico = document.getElementById("diagnostico").value;
    var fecha = document.getElementById("fecha").value;
    var tratamiento = document.getElementById("tratamiento").value;

    //crear cada elemento

    var lista = document.getElementById("bodytable");
    var newtr = document.createElement("tr");
    var newth = document.createElement("th");
    var newtd1 = document.createElement("td");
    var newtd2 = document.createElement("td");
    var newtd3 = document.createElement("td");
    var newtd4 = document.createElement("td");
    var newtd5 = document.createElement("td");
    var newtd6 = document.createElement("td");

    newtd1.textContent = paciente;
    newtd2.textContent = enfermedad;
    newtd3.textContent = condicion;
    newtd4.textContent = diagnostico;
    newtd5.textContent = fecha;
    newtd6.textContent = tratamiento;

    lista.appendChild(newtr);
    newtr.appendChild(newth);
    newtr.appendChild(newtd1);
    newtr.appendChild(newtd2);
    newtr.appendChild(newtd3);
    newtr.appendChild(newtd4);
    newtr.appendChild(newtd5);
    newtr.appendChild(newtd6);

}