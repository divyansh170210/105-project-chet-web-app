var firebaseConfig = {
  apiKey: "AIzaSyDpVy9jQDWpTvQZgth-aWcb_cyL1IFQ6rE",
  authDomain: "project-chat-105.firebaseapp.com",
  databaseURL: "https://project-chat-105-default-rtdb.firebaseio.com",
  projectId: "project-chat-105",
  storageBucket: "project-chat-105.appspot.com",
  messagingSenderId: "45607628884",
  appId: "1:45607628884:web:64b13207c7bdfb96de3dc1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick=''redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function addRoom()
{
 room_name = document.getElementById("room_name").value;
  
 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 })

 localStorage.setItem("room_name", room_name);
 window.location = "kwitter_message.html";
}

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_message.html";
}

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
}