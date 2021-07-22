let nomeUser;
let mail;
let feedback;

function getName() {
    nomeUser = document.getElementById("name").value;
}

function getEmail() {
    mail = document.getElementById("email").value;
}

function getFeedback(){
    feedback = document.getElementById("feedback").value;
}

$(document).ready(function(){

    $("#buttonEnviar").click(function(){
        $(".feedbacks").append(
            "<p class='feedbacks'>" + "Name: " + nomeUser + "<br><br>" + "Email: " + mail + "<br><br>" + "Message: " + feedback + "</p>"
        );
    });
});