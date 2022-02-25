
function updataWebpage(){
    try {

        fetch("https://temperio.lyepedro.studio/data").then(resposta =>{
          return resposta.json()
        }).then(valor =>{
            date = valor.date.slice(0, 8)
            hour = valor.date.slice(10, 14)
            date = date.replace(/[,]/g,'/')
            hour = hour.replace(/[,]/g,':')
            completedate = date + " " + hour
            

            document.getElementById("temperature").innerHTML = valor.temperature + "°C"
            document.getElementById("humidity").innerHTML = valor.humidity + "%"
            document.getElementById("date").innerHTML = completedate
        })
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }

}


updataWebpage()