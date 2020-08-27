// Age in Days Calculator
function ageindays() {
  var birthday = prompt("When were you born (day month year) ?");
  var yeartodays = (2020 - birthday.substring(6, 10)) * 365;
  var monthtoday = (birthday.substring(3, 5) - 1) * 30;
  var day = birthday.substring(0, 2) * 1;
  var h2 = document.createElement("h2");
  var textanswer = document.createTextNode(
    "You are " + (yeartodays - monthtoday + day) + " days old!!"
  );
  h2.setAttribute("id", "ageindays");
  h2.appendChild(textanswer);
  document.getElementById("flex-box-result").appendChild(h2);
  console.log(ageindays);
}
function reset() {
  document.getElementById("ageindays").remove();
}
