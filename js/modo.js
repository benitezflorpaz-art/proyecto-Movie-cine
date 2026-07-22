function cambiarModo(){
    document.body.classList.toggle("light");
    const btn = document.getElementById("Claro");

    if(document.body.classList.contains("light")){
        localStorage.setItem("modo","light");
        btn.textContent = "🌙 Modo Oscuro";
    }else{
        localStorage.setItem("modo","dark");
        btn.textContent = "☀️ Modo Claro";
    }
}

window.onload = function(){
    let modo = localStorage.getItem("modo");

    if(modo === "light"){
        document.body.classList.add("light");
        document.getElementById("Claro").textContent = "🌙 Modo Oscuro";
    }else{
        document.getElementById("Claro").textContent = "☀️ Modo Claro";
    }
}