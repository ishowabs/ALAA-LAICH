//let jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
//for (let j=0 ; j<= (jours.length -1);j++) {
    //console.log(jours[i])
//}
// for in

//for (let jr in jours){
    //console.log(jours[jr])
//}

// for / of

//for (let jour of jours){
    //console.log(jour)
//}

//while loop
//let n;
//n = 10
//while(n>=0){
    //console.log(n)
    //n -= 1
//}

//let m = -1;
//do {
    //console.log(m)
    //m -= 1
//}
//while(m>=0)

//for each



//for (let i = 0; i < jours.length; i++) {
    //if (jours[i] === "Mercredi") {
        //console.log("stop");
        //continue;
    //}
    //console.log("Today's " + jours[i] + ".");
//}

//for (let i = 0; i < jours.length; i++) {
    //console.log("Today's " + jours[i] + ".");
    //if (jours[i] === "Jeudi") {
        //console.log("stop");
        //break;
 //   }
//}

// les expressions lambdas 
// const jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]

// jours.map(item) => {
//     if (item === "jeudi"){
//         item=item+ "* jour fevrier"
//     }
//     return console.log(jours)
// }
// let somme = function(a,b){
//     return a + b
// }

// let sm = somme(5,9)

// console.log(sm)

// // les function flechess(arrow function)
//  let a= function(){
//     return console.log("hello !!")
//  };

//  let great = () => {
//      return console.log("hello !!")
//  };
//  or 
// let great2 = () => console.log("hello !!")

// let nomcomplet = (nom,prenom) => {

//     let fullname = nom + " " + prenom

//     return fullname
// }

// console.log(nomcomplet("ALAA","LAICHh"))

// great2()

// // les exepressions lambdas
// // map(il retourn un nouveau tableau)

// let jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","demanche"];

// // jours.map( function(item){

// //     return console.log(item)
// // })

// jours.map((item) => {

//     return console.log(item)
// })

// jours.map((item) => {
    
//     return console.log(item)
// })
// console.log(jours)



// // const stagiaires = [
// //   { nom: "alaa", prenom: "laich", age: 19 },
// //    { nom: "ahmed", prenom: "akrami", age: 19 },
// //    { nom: "bota", prenom: "too", age: 19 }
// // ];

// // const nomsEtPrenoms = stagiaires.map(stagiaire => ({ nom: stagiaire.nom, prenom: stagiaire.prenom }));

// // console.log(nomsEtPrenoms);

const stagiaires = [
    { nom: "alaa", prenom: "laich", age: 19 },
    { nom: "ahmed", prenom: "akrami", age: 19 },
    { nom: "bota", prenom: "boti", age: 19 }
  ];
  
  const nomsEtPrenoms = stagiaires.map(stagiaire => ({ nom: stagiaire.nom, age: stagiaire.age }));
  
  console.log(nomsEtPrenoms);
// let somme = (a,b) => {
//          return a+b
//      };
// let sm = somme(9,10);
// console.log(sm)
