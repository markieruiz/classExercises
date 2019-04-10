
console.log("connection");



  var config = {
    apiKey: "AIzaSyCG_zomLfp_cZuNWf4SnfzugeuBrA5tpko",
    authDomain: "employeemanagement-24ed5.firebaseapp.com",
    databaseURL: "https://employeemanagement-24ed5.firebaseio.com",
    projectId: "employeemanagement-24ed5",
    storageBucket: "employeemanagement-24ed5.appspot.com",
    messagingSenderId: "445753157839"
  };


  firebase.initializeApp(config);

var database= firebase.database();

var employeeName;
var role = "";
var startDate = "";
var monthsWorked = "";
var monthlyRate = "";
var totalBilled ="";
  
  $(".btn").on("click", function(event) {
    event.preventDefault();
    console.log("click");

    employeeName = $("#employeeName").val().trim();
    console.log(employeeName);
    role = $("#employeeRole").val().trim();
    startDate = $("#startDate").val().trim();
    monthsWorked = $("#monthsWorked").val().trim();
    monthlyRate = $("#monthlyRate").val().trim();
    totalBilled = $("#totalBilled").val().trim();


    database.ref().push({
      employeeName: employeeName,
      role: role,
      startDate: startDate,
      monthsWorked: monthsWorked,
      monthlyRate: monthlyRate,
      totalBilled: totalBilled
    });

  });

  database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val())

    console.log(snapshot.val().employeeName);
    console.log(snapshot.val().role);
    console.log(snapshot.val().startDate);
    console.log(snapshot.val().monthsWorked);
    console.log(snapshot.val().monthlyRate);
    console.log(snapshot.val().totalBilled);

    // Change the HTML to reflect
    $("#employeeName").text(snapshot.val().employeeName);
    $("#employeeRole").text(snapshot.val().role);
    $("#startDate").text(snapshot.val().startDate);
    $("#monthsWorked").text(snapshot.val().monthsWorked);
    $("#monthlyRate").text(snapshot.val().monthlyRate);
    $("#totalBilled").text(snapshot.val().totalBilled);


  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
    