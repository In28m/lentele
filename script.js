function pridetiIDuomenis() {
    var vardas = document.getElementById("vardas").value;
    var pavarde = document.getElementById("pavarde").value;
    var amzius = document.getElementById("amzius").value;
  
    if (vardas === "" || pavarde === "" || amzius === "") {
      alert("Įveskite visus duomenis");
      return;
    }

    if (parseInt(amzius) <= 0) {
        alert("Amžius turi būti didesnis nei nulis");
        return;
      }
  
    var lentele = document.getElementById("lentele");
    var naujaEilute = lentele.insertRow(-1);
    var celule1 = naujaEilute.insertCell(0);
    var celule2 = naujaEilute.insertCell(1);
    var celule3 = naujaEilute.insertCell(2);
    celule1.innerHTML = vardas;
    celule2.innerHTML = pavarde;
    celule3.innerHTML = amzius;

    document.getElementById("vardas").value = "";
    document.getElementById("pavarde").value = "";
    document.getElementById("amzius").value = "";
  }
  
  function istrintiPirma() {
    var lentele = document.getElementById("lentele");
    if (lentele.rows.length > 1) {
      lentele.deleteRow(1);
    }
  }
  
  function istrintiPaskutini() {
    var lentele = document.getElementById("lentele");
    var rowCount = lentele.rows.length;
    if (rowCount > 1) {
      lentele.deleteRow(rowCount - 1);
    }
  }
  

  