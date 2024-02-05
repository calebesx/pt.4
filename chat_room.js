const firebaseConfig = {

    apiKey: "AIzaSyC7hMC1ohthgQyAtPzVHG3FUCPpryzm71g",
  
    authDomain: "newagent-ijts.firebaseapp.com",
  
    databaseURL: "https://newagent-ijts-default-rtdb.firebaseio.com",
  
    projectId: "newagent-ijts",
  
    storageBucket: "newagent-ijts.appspot.com",
  
    messagingSenderId: "932347766532",
  
    appId: "1:932347766532:web:93f0803750e6863aba5251",
  
    measurementId: "G-9KKV4B5XE6"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  userName=localStorage.getItem("userName");
  document.getElementsByID("userName").innerHTML = "bem-vindo(a)" + userName + "!";

  function addRoom()
  {
    roomName = document.getElementById("roomName").value;

    firebase.database().ref("/").child(roomName).update({
      purpose : "adicionar nome da sala"
    });

    localStorage.setItem("roomName", roomName);

    window.location = "kwitterPage.html";
  }

  function getData()
{
firebase.database (). ref ("/").on('value' , function(snapshot){document.getElementbyId ("output").innerHTML = "";snapshot.forEach(function(childSnapshot)  {childkey = childSnapshot.key;
         Room_names = childKey;
       //Comece a progamar aqui
      console.log("nome da sala - " + Room_names);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
       //termine de progamar aqui
       });
   });
}
     getData();

     function redirectToRoomName(name)
     {
      console.log(name);
      localStorage.setItem("roomName",name);
      window.location="kwiterPage.html";
     }

     function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
         window.location = "index.html";
     }