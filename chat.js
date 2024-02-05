// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {

    apiKey: "AIzaSyDCHeNX7PwGmfBl37jNrLNqBysiASDwwkM",
  
    authDomain: "web-projeto-644b2.firebaseapp.com",
  
    projectId: "web-projeto-644b2",
  
    storageBucket: "web-projeto-644b2.appspot.com",
  
    messagingSenderId: "758079795969",
  
    appId: "1:758079795969:web:1b3845681ceb1d7dd8e100"
  
  };
  
  

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name",user_name);

    window.location="chat_room.html";
    

}



