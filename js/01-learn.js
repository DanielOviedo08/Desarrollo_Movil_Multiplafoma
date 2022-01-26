
//Hacer funcion 
//function save(){

//}mvn

//const save=function(){
 //   return 5 
//}

/*const save=()=> {
    const result = document.getElementById("result")
    const name=document.getElementById("name").value
    const username=document.getElementById("username").value

    result.innerHTML=`Hola ${name}, Tu nombre de usuario es: ${username} `
}*/

const jsonMovie=[
    {
    name:"Bob Esponja",
    createBy:"2002-12-01",
    author:"John Cena",
    address:{
        street:"Palo Escrito",
        number:8
    }
    },

    {
    name:"Spiderman",
    createBy:"2021-12-15",
    author:"Sony"
    }
]

//const author=jsonMovie.[0]
//let author;
//(author)
//console.log(jsonMovie[0].name);

/*const peticion=()=>{
    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(({data:{username},code,status}) => ({
        console.log(username);
        console.log(code);
        console.log(status);
    })
}*/ 

const profile={
    username:"DanielOr",
    name:"Daniel",
    surname:"Oviedo",
    secondSurname:"Roman",

    address:{
        street:"Juan Aldama",
        number:8,
        longitude:166123,
        latitude:153646,
    },

    school:{
        name:"Universidad Tecnologica Emiliano Zapata",
    },

    phone:"7771363523",
    email:"20203tn140@utez.edu.mx",
    photo:"https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_960_720.png"
}

        
        
        const {name,surname,secondSurname, address:{longitude,latitude},email,photo}=profile
        console.log(name);
        console.log(surname);
        console.log(secondSurname);
        console.log(longitude);
        console.log(latitude);
        console.log(email);
        console.log(photo);

/*Nombre
    apellido paterno, apellido materno,corro electronico,ubicacion(latitud y logitud)
    pintar photo*/

  /*const {name,surname,address:{street,number}}=profile;

  console.log(name);
  console.log(surname);
  console.log(street);
  console.log(phone);*/

  const save=()=> {
    //const {name,surname,secondSurname, address:{longitude,latitude},email,photo}=profile
    const name =document.getElementById("name")
    const surname =document.getElementById("surname")
    const secondSurname =document.getElementById("secondSurname")
    const longitude =document.getElementById("longitude")
    const latitude =document.getElementById("latitude")
    const email =document.getElementById("email")
    const photo =document.getElementById("photo").src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_960_720.png"

    name.innerHTML=`Nombre: ${profile.name}`
    surname.innerHTML=`Apellido Paterno: ${profile.surname}`
    secondSurname.innerHTML=`Apellido Materno: ${profile.secondSurname}`
    longitude.innerHTML=`Longitud: ${profile.address.longitude}`
    latitude.innerHTML=`Latitud: ${profile.address.latitude}`
    email.innerHTML=`Email: ${profile.email}`
    photo.innerHTML=`${profile.photo}`

}

/*async function peticion(){
    fetch('http://example.com/movies.json')
    const 
    .then(response => response.json())
    .then(data => console.log(data));
}
*/
