document.querySelector(".btn-calculer").addEventListener("click", () => {
let a= Number(document.querySelector(".age").value);

let b= Number(document.querySelector(".knowledge").value);

let resultat = a * b;
document.querySelector(".resultat").value = resultat;
console.log(resultat);

if (resultat>10){
    document.querySelector(".resultat").style.backgroundColor = "violet";
}else{
    document.querySelector(".resultat").style.backgroundColor = "blueviolet"
}
console.log("okk")
})
document.querySelector(".btn-reset").addEventListener("click", () => {
    document.querySelector(".age").value = ""
    
    document.querySelector(".knowledge").value = ""
    
    document.querySelector(".resultat").value = ""
    console.log("okk")
    })