var Fecha = new Date();
var Hoy = new Date();
var Manana = Hoy + 86400000;
var Ayer = Hoy - 86400000;
var Mes= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var IMG = ["Imagenes/2.gif","Imagenes/1.gif","Imagenes/0.gif","Imagenes/55.gif","Imagenes/54.gif","Imagenes/53.gif","Imagenes/52.gif","Imagenes/51.gif","Imagenes/50.gif","Imagenes/49.gif","Imagenes/48.gif","Imagenes/47.gif","Imagenes/46.gif","Imagenes/45.gif","Imagenes/44.gif","Imagenes/43.gif","Imagenes/42.gif","Imagenes/41.gif","Imagenes/40.gif","Imagenes/39.gif","Imagenes/38.gif","Imagenes/37.gif","Imagenes/36.gif","Imagenes/35.gif","Imagenes/34.gif","Imagenes/33.gif","Imagenes/32.gif","Imagenes/31.gif","Imagenes/30.gif","Imagenes/29.gif","Imagenes/28.gif","Imagenes/27.gif","Imagenes/26.gif","Imagenes/25.gif","Imagenes/24.gif","Imagenes/23.gif","Imagenes/22.gif","Imagenes/21.gif","Imagenes/20.gif","Imagenes/19.gif","Imagenes/18.gif","Imagenes/17.gif","Imagenes/16.gif","Imagenes/15.gif","Imagenes/14.gif","Imagenes/13.gif","Imagenes/12.gif","Imagenes/11.gif","Imagenes/10.gif","Imagenes/9.gif","Imagenes/8.gif","Imagenes/7.gif","Imagenes/6.gif","Imagenes/5.gif","Imagenes/4.gif","Imagenes/3.gif","Imagenes/2.gif","Imagenes/1.gif","Imagenes/0.gif","Imagenes/55.gif","Imagenes/54.gif","Imagenes/53.gif"];
var Primer_luna_nueva = new Date(2014, 0, 1, 12, 44, 2);
var Milisegundos_Primer_luna_nueva= Primer_luna_nueva.getTime();
var Ciclo_lunar = 2551442780;






window.onload= function(){

  document.getElementById("ccl").onclick= function(){ Selector_Calendario(Fecha) };
  document.getElementById("cml").onclick= function(){ Selector_Flecha("cml") };
  document.getElementById("cmr").onclick= function(){ Selector_Flecha("cmr") };
  document.getElementById("cal").onclick= function(){ Selector_Flecha("cal") };
  document.getElementById("car").onclick= function(){ Selector_Flecha("car") };
  document.getElementById("ccl").onclick= function(){ Mostrar_calendario()};
  document.getElementById("mco").onclick= function(){ Mostrar_opciones()};
  document.getElementById("mca").onclick= function(){ Mostrar_calcular()};
  //document.getElementById("mcr").onclick= function(){ Mostrar_resultado()};
  document.getElementsByName("Selecf").onclick= function(){Radioboton()};





  for(var x=10; x<52; x++){
    document.getElementsByTagName("td")[x].onclick= function(){ Selector_Click(this) };
    document.getElementsByTagName("td")[x].ondblclick= function(){Selector_Dbclick(this)};

  }

  document.getElementsByTagName("td")[x].ondblclick= function(){Mostrar_calendario()};

  
//hay que obtener pro

Calcular_luna_hoy();
}

function Selector_Calendario(Obj){//funciona
  var Fecha_Aux= new Date(Obj);
  
  Fecha_Aux.setDate(1);
  Fecha_Aux.setTime(Fecha_Aux.getTime() - 86400000 * Fecha_Aux.getDay());
  
  for(var i=10; i<52; i++){
    document.getElementsByTagName("td")[i].innerHTML= Fecha_Aux.getDate();
    Fecha_Aux.setTime(Fecha_Aux.getTime() + 86400000);
  }

  document.getElementById("mes").innerHTML= Mes[Obj.getMonth()];
  document.getElementById("anio").innerHTML= Obj.getFullYear();

}


function Selector_Click(Obj){
  Fecha.setDate(Obj.innerHTML);
}


function Selector_Flecha(Id){
  if(Id.charAt(1)=="a"){
    if(Id.charAt(2)=="l"){
      Fecha.setFullYear(Fecha.getFullYear()-1);
    }else{
      Fecha.setFullYear(Fecha.getFullYear()+1);
    }
  }else{
    if(Id.charAt(2)=="l"){
      Fecha.setMonth(Fecha.getMonth()-1);  
    }else{
      Fecha.setMonth(Fecha.getMonth()+1);
    }
  }  
    Selector_Calendario(Fecha);//Es importante no borrar!!!
}


function Calcular_luna_hoy(){//funciona
  var Fecha_selec = Hoy.getTime();
  var Diferencia = Milisegundos_Primer_luna_nueva - Fecha_selec;
  var Ciclos = (Diferencia / Ciclo_lunar).toString();
  var Decimal = Ciclos.split('.');
  var Porcentaje = Number('0.'+ Decimal[1]);
  var Luna = Ciclo_lunar * Porcentaje;
  var resulhoy = "";
  var resulayer = "";
  var resulmaniana = "";
  for (var lu = 1; lu<56; lu++) {
    if (Luna > (45561478 * (lu-1)) && Luna < (45561478 * lu)) {
      var indice = (lu-1)+3;
      resulayer = IMG[indice - 1];
      resulhoy = IMG[indice];
      resulmaniana = IMG[indice + 1];
      document.getElementById("imgHoy").src = resulhoy;
      document.getElementById("imgAyer").src = resulayer;
      document.getElementById("imgManiana").src = resulmaniana;
    }
  }

}


function Calcular_luna_select(){//funciona
  var Fecha_selec_s = Fecha.getTime();
  var Diferencia_s = Milisegundos_Primer_luna_nueva - Fecha_selec_s;
  var Ciclos_s = (Diferencia_s / Ciclo_lunar).toString();
  var Decimal_s = Ciclos_s.split('.');
  var Porcentaje_s = Number('0.'+ Decimal_s[1]);
  var Luna_s = Ciclo_lunar * Porcentaje_s;

  for (var lu_s = 1; lu_s < 56; lu_s++) {
    
    if (Luna_s > (45561478 * (lu_s-1)) && Luna_s < (45561478 * lu_s)) {
      var indice_sel = (lu_s-1)+3;
      var Sel_3 = IMG[indice_sel - 3];
      var Sel_2 = IMG[indice_sel - 2];
      var Sel_1 = IMG[indice_sel - 1];
      var Sel0 = IMG[indice_sel];
      var Sel1 = IMG[indice_sel+1];
      var Sel2 = IMG[indice_sel + 2];
      var Sel3 = IMG[indice_sel + 3];
      document.getElementById("Img-3").src = Sel_3;
      document.getElementById("Img-2").src = Sel_2;
      document.getElementById("Img-1").src = Sel_1;
      document.getElementById("ImgCentral").src = Sel0;
      document.getElementById("Img+1").src = Sel1;
      document.getElementById("Img+2").src = Sel2;
      document.getElementById("Img+3").src = Sel3;
    };
    }
  }

function Formato(Dato){//funciona !!!!!!!!!!!!!!!!
    var lufenacha = Fecha.getTime();
    var lufeanterior3 = new Date(lufenacha-259200000);
    var lufeanterior2 = new Date(lufenacha-172800000);
    var lufeanterior1 = new Date(lufenacha-86400000);
    var lufe = new Date(lufenacha);
    var lufesiguiente1 = new Date(lufenacha+86400000);
    var lufesiguiente2 = new Date(lufenacha+172800000);
    var lufesiguiente3 = new Date(lufenacha+259200000);
  if (Dato == "Fecha1") {

    document.getElementById("fecha").value=(lufe.getDate())+"/"+(lufe.getMonth()+1)+"/"+lufe.getFullYear();

    document.getElementById("I-3").innerHTML=lufeanterior3.getDate()+"/"+(lufeanterior3.getMonth()+1)+"/"+lufeanterior3.getFullYear()
    document.getElementById("I-2").innerHTML=lufeanterior2.getDate()+"/"+(lufeanterior2.getMonth()+1)+"/"+lufeanterior2.getFullYear()
    document.getElementById("I-1").innerHTML=lufeanterior1.getDate()+"/"+(lufeanterior1.getMonth()+1)+"/"+lufeanterior1.getFullYear()
    document.getElementById("Ic").innerHTML=lufe.getDate()+"/"+(lufe.getMonth()+1)+"/"+lufe.getFullYear()
    document.getElementById("I+1").innerHTML=lufesiguiente1.getDate()+"/"+(lufesiguiente1.getMonth()+1)+"/"+lufesiguiente1.getFullYear()
    document.getElementById("I+2").innerHTML=lufesiguiente2.getDate()+"/"+(lufesiguiente2.getMonth()+1)+"/"+lufesiguiente2.getFullYear()
    document.getElementById("I+3").innerHTML=lufesiguiente3.getDate()+"/"+(lufesiguiente3.getMonth()+1)+"/"+lufesiguiente3.getFullYear()
  };

  if (Dato == "Fecha2") {
    document.getElementById("fecha").value=(lufe.getMonth()+1)+"/"+(lufe.getDate())+"/"+lufe.getFullYear();

    document.getElementById("I-3").innerHTML=(lufeanterior3.getMonth()+1)+"/"+lufeanterior3.getDate()+"/"+lufeanterior3.getFullYear()
    document.getElementById("I-2").innerHTML=(lufeanterior2.getMonth()+1)+"/"+lufeanterior2.getDate()+"/"+lufeanterior2.getFullYear()
    document.getElementById("I-1").innerHTML=(lufeanterior1.getMonth()+1)+"/"+lufeanterior1.getDate()+"/"+lufeanterior1.getFullYear()
    document.getElementById("Ic").innerHTML=(lufe.getMonth()+1)+"/"+lufe.getDate()+"/"+lufe.getFullYear()
    document.getElementById("I+1").innerHTML=(lufesiguiente1.getMonth()+1)+"/"+lufesiguiente1.getDate()+"/"+lufesiguiente1.getFullYear()
    document.getElementById("I+2").innerHTML=(lufesiguiente2.getMonth()+1)+"/"+lufesiguiente2.getDate()+"/"+lufesiguiente2.getFullYear()
    document.getElementById("I+3").innerHTML=(lufesiguiente3.getMonth()+1)+"/"+lufesiguiente3.getDate()+"/"+lufesiguiente3.getFullYear()
  };
  if (Dato == "Fecha3") {
    document.getElementById("fecha").value=lufe.getFullYear()+"/"+(lufe.getMonth()+1)+"/"+(lufe.getDate());
    document.getElementById("I-3").innerHTML=lufeanterior3.getFullYear()+"/"+(lufeanterior3.getMonth()+1)+"/"+lufeanterior3.getDate()
    document.getElementById("I-2").innerHTML=lufeanterior2.getFullYear()+"/"+(lufeanterior2.getMonth()+1)+"/"+lufeanterior2.getDate()
    document.getElementById("I-1").innerHTML=lufeanterior1.getFullYear()+"/"+(lufeanterior1.getMonth()+1)+"/"+lufeanterior1.getDate()
    document.getElementById("Ic").innerHTML=lufe.getFullYear()+"/"+(lufe.getMonth()+1)+"/"+lufe.getDate()
    document.getElementById("I+1").innerHTML=lufesiguiente1.getFullYear()+"/"+(lufesiguiente1.getMonth()+1)+"/"+lufesiguiente1.getDate()
    document.getElementById("I+2").innerHTML=lufesiguiente2.getFullYear()+"/"+(lufesiguiente2.getMonth()+1)+"/"+lufesiguiente2.getDate()
    document.getElementById("I+3").innerHTML=lufesiguiente3.getFullYear()+"/"+(lufesiguiente3.getMonth()+1)+"/"+lufesiguiente3.getDate()
  };
  if (Dato == "Fecha4") {
    document.getElementById("fecha").value=lufe.getFullYear()+"/"+(lufe.getDate())+"/"+(lufe.getMonth()+1);
    document.getElementById("I-3").innerHTML=lufeanterior3.getFullYear()+"/"+lufeanterior3.getDate()+"/"+(lufeanterior3.getMonth()+1)
    document.getElementById("I-2").innerHTML=lufeanterior2.getFullYear()+"/"+lufeanterior2.getDate()+"/"+(lufeanterior2.getMonth()+1)
    document.getElementById("I-1").innerHTML=lufeanterior1.getFullYear()+"/"+lufeanterior1.getDate()+"/"+(lufeanterior1.getMonth()+1)
    document.getElementById("Ic").innerHTML=lufe.getFullYear()+"/"+lufe.getDate()+"/"+(lufe.getMonth()+1)
    document.getElementById("I+1").innerHTML=lufesiguiente1.getFullYear()+"/"+lufesiguiente1.getDate()+"/"+(lufesiguiente1.getMonth()+1)
    document.getElementById("I+2").innerHTML=lufesiguiente2.getFullYear()+"/"+lufesiguiente2.getDate()+"/"+(lufesiguiente2.getMonth()+1)
    document.getElementById("I+3").innerHTML=lufesiguiente3.getFullYear()+"/"+lufesiguiente3.getDate()+"/"+(lufesiguiente3.getMonth()+1)
  };
};


//hacer funcionar los radio botones de mostrar las lunas!!!!!!

function Cantidad_lunas(Moon){
  ////Hacer cantidad de lunas mostradas!!
/*
document.getElementById("pos-3").className= "classtres" ;
document.getElementById("pos-2").className= "classtres";
document.getElementById("pos-1").className= "classtres";
document.getElementById("posc").className= "classtres";
document.getElementById("pos+1").className= "classtres";
document.getElementById("pos+2").className= "classtres";
document.getElementById("pos+3").className= "classtres";
*/
if (Moon == "Lunas3") {
  document.getElementById("pos-3").style.display = 'none';
  document.getElementById("pos-2").style.display = 'none';
  document.getElementById("pos-1").style.display = 'block';
  document.getElementById("posc").style.display = 'block';
  document.getElementById("pos+1").style.display = 'block';
  document.getElementById("pos+2").style.display = 'none';
  document.getElementById("pos+3").style.display = 'none';

  document.getElementById("pos-3").className= "classtres";
  document.getElementById("pos-2").className= "classtres";
  document.getElementById("pos-1").className= "classtres";
  document.getElementById("posc").className= "classtres";
  document.getElementById("pos+1").className= "classtres";
  document.getElementById("pos+2").className= "classtres";
  document.getElementById("pos+3").className= "classtres";
  };
if (Moon == "Lunas5") {
  document.getElementById("pos-3").style.display = 'none';
  document.getElementById("pos-2").style.display = 'block';
  document.getElementById("pos-1").style.display = 'block';
  document.getElementById("posc").style.display = 'block';
  document.getElementById("pos+1").style.display = 'block';
  document.getElementById("pos+2").style.display = 'block';
  document.getElementById("pos+3").style.display = 'none';

  document.getElementById("pos-3").className= "classcinco" ;
  document.getElementById("pos-2").className= "classcinco";
  document.getElementById("pos-1").className= "classcinco";
  document.getElementById("posc").className= "classcinco";
  document.getElementById("pos+1").className= "classcinco";
  document.getElementById("pos+2").className= "classcinco";
  document.getElementById("pos+3").className= "classcinco";
  };
if (Moon == "Lunas7") {
  document.getElementById("pos-3").style.display = 'block';
  document.getElementById("pos-2").style.display = 'block';
  document.getElementById("pos-1").style.display = 'block';
  document.getElementById("posc").style.display = 'block';
  document.getElementById("pos+1").style.display = 'block';
  document.getElementById("pos+2").style.display = 'block';
  document.getElementById("pos+3").style.display = 'block';

  document.getElementById("pos-3").className= "classsiete" ;
  document.getElementById("pos-2").className= "classsiete";
  document.getElementById("pos-1").className= "classsiete";
  document.getElementById("posc").className= "classsiete";
  document.getElementById("pos+1").className= "classsiete";
  document.getElementById("pos+2").className= "classsiete";
  document.getElementById("pos+3").className= "classsiete";
  };
}



function Radioboton(){
  for (var R = 0; R<document.getElementsByName("Selecf").length; R++){
    if (document.getElementsByName("Selecf")[R].checked) {
      Formato(document.getElementsByName("Selecf")[R].value)
    };
  }
  for (var RL=0; RL<document.getElementsByName("Selecl").length; RL++){
    if (document.getElementsByName("Selecl")[RL].checked) {
      Cantidad_lunas(document.getElementsByName("Selecl")[RL].value)
    };
  }
}


////////////////////////////////////////////////////////////////////////////////////
function Selector_Dbclick(Obj){

  document.getElementById("fecha").value=(Fecha.getDate())+"/"+(Fecha.getMonth()+1)+"/"+Fecha.getFullYear();
  document.getElementById("calendario").style.display= "none";
  Calcular_luna_select();
  Radioboton();
  Mostrar_resultado();

}


function Mostrar_calendario(){
  var mocal = document.getElementById("calendario");//se crea una variable con la seleccion del id
  var stylemocal = window.getComputedStyle(mocal).display;//variable con el valor del estilo display

  if (stylemocal == 'none') {//se compara el estilo obtenido del elemento DOM señalado
  document.getElementById("calendario").style.display= "block";
} else {
  document.getElementById("calendario").style.display= "none";
} 
}


function Mostrar_opciones(){
  var op = document.getElementById("Contenedor-opciones");//se crea una variable con la seleccion del id
  var styleop = window.getComputedStyle(op).display;//variable con el valor del estilo display

  if (styleop == 'none') {//se compara el estilo obtenido del elemento DOM señalado
  document.getElementById("Contenedor-opciones").style.display= "block";
  document.getElementById("mco").innerHTML="----";
} else {
  document.getElementById("Contenedor-opciones").style.display= "none";
  document.getElementById("mco").innerHTML="+++";
} 
}


function Mostrar_calcular(){
  var ca = document.getElementById("Contenedor-calcular");//se crea una variable con la seleccion del id
  var styleca = window.getComputedStyle(ca).display;//variable con el valor del estilo display

  if (styleca == 'none') {//se compara el estilo obtenido del elemento DOM señalado
    document.getElementById("Contenedor-calcular").style.display = 'block';
    document.getElementById('mca').innerHTML='----';
  } else {
    document.getElementById("Contenedor-calcular").style.display = 'none';
    document.getElementById('mca').innerHTML='+++';    
  }
}


function Mostrar_resultado(){
  var ca = document.getElementById("Contenedor-resultado");//se crea una variable con la seleccion del id
  var styleca = window.getComputedStyle(ca).display;//variable con el valor del estilo display

  if (styleca == 'none') {//se compara el estilo obtenido del elemento DOM señalado
    document.getElementById("Contenedor-resultado").style.display = 'block';
    document.getElementById('mca').innerHTML='----';
  } 
}
/*
function Cantidad_lunas(CLM){
  if (CML == "Lunas3") {
    document.getElementById("")
  };
}*/