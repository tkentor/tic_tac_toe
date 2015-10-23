$(document).ready(function(){
  alert("Welcome to the Tic-Tac-Thunderdome.")

  $("#box1").click(function(event){
    $("#box1").toggleClass("player1")
  });

  $("#box1").click(function(event){
    $(".player1").toggleClass("player2")
  });

  $("#box2").click(function(event){
    $("#box2").css("background","blue")
  });

  $("#box3").click(function(event){
    $("#box3").css("background","blue")
  });

  $("#box4").click(function(event){
    $("#box4").css("background","blue")
  });

  $("#box5").click(function(event){
    $("#box5").css("background","blue")
  });

  $("#box6").click(function(event){
    $("#box6").css("background","blue")
  });

  $("#box7").click(function(event){
    $("#box7").css("background","blue")
  });

  $("#box8").click(function(event){
    $("#box8").css("background","blue")
  });

  $("#box9").click(function(event){
    $("#box9").css("background","blue")
  });

});
