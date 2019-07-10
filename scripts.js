window.onload = function() {
   tempo = document.getElementById("tempo");
   total = document.getElementById("total");
   qtdCigarros = document.getElementById("qtdCigarros");
   tempoMedio = document.getElementById("tempoMedio");
   dinheiro = document.getElementById("dinheiro");
   pulmao = document.getElementById("pulmao");
   horas = 0;
   minutos = 0;
   segundos = 0;
   cigarros = 0;
   mediaCigarro = 0;
}

var iniciou = false;
var acumularTime = 0;
function start () {
  if (iniciou == false) {
    cigarros = cigarros + 1;
    qtdCigarros.innerHTML = cigarros;
    timeInicial = new Date();
    control = setInterval(cronometro,10);
    iniciou = true;
  }
}

function cronometro () {
  timeActual = new Date();
  acumularTime = timeActual - timeInicial;
  acumularTime2 = new Date();
  acumularTime2.setTime(acumularTime);
  ss = acumularTime2.getSeconds();
  mm = acumularTime2.getMinutes();
  hh = acumularTime2.getHours()-21;
  if (ss < 10) {ss = "0"+ss;}
  if (mm < 10) {mm = "0"+mm;}
  if (hh < 10) {hh = "0"+hh;}
  tempo.innerHTML = hh+" : "+mm+" : "+ss;
}

function stop () {
  if (iniciou == true) {
    clearInterval(control);
    iniciou = false;
    acumularTime = 0;
    atualizaTotal(hh, mm, ss);
    tempo.innerHTML = "00 : 00 : 00";
    }
}

function atualizaTM(){
  tempoMedio.innerHTML = tempoSegundos/cigarros;
  console.log(tempoSegundos);
}

function atualizaDinheiro(){
  dinheiro.innerHTML = "R$ " + (cigarros*9.45).toFixed(2);
}

function atualizaTotal(hh, mm, ss){
  horas = Number(horas + Number(hh));
  minutos = Number(minutos + Number(mm));
  segundos = Number(segundos + Number(ss));
  //
  if (segundos >= 60){
    minutos = minutos + 1;
    segundos = segundos - 60;
  }
  //
  tempoSegundos = (horas * 3600) + (minutos * 60) + (segundos);
  //
  if(tempoSegundos >= 3){
    pulmao.classList.remove("p1");
    pulmao.classList.add("p2");
  } else if(tempoSegundos >= 6){
    pulmao.classList.remove("p2");
    pulmao.classList.add("p3");
  } else if(tempoSegundos >= 9){
    pulmao.classList.remove("p3");
    pulmao.classList.add("p4");
  } else if(tempoSegundos >= 12){
    pulmao.classList.remove("p4");
    pulmao.classList.add("p5");
  } else if(tempoSegundos >= 15){
    pulmao.classList.remove("p5");
    pulmao.classList.add("p6");
  } else if(tempoSegundos >= 18){
    pulmao.classList.remove("p6");
    pulmao.classList.add("p7");
  } else if(tempoSegundos >= 21){
    pulmao.classList.remove("p6");
    pulmao.classList.add("p8");
  }
  //
  var saida = "";
  var h=horas, m=minutos, s=segundos;
  if (segundos < 10) {s = "0"+segundos;}
  if (minutos < 10) {m = "0"+minutos;}
  if (horas < 10) {h = "0"+horas;}
  total.innerHTML = h+" : "+m+" : "+s;
  atualizaTM();
  atualizaDinheiro();
}
