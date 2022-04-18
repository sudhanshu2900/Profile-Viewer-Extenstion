function getLinkedinUsername() {
  var username = document.getElementById("linkedinValue").value;
  var url = "https://www.linkedin.com/in/" + username;
  window.open(url);
}

function getGithubUsername() {
  var username = document.getElementById("githubValue").value;
  var url = "https://www.github.com/" + username + "/";
  window.open(url);
}

function getTwitterUsername() {
  var username = document.getElementById("twitterValue").value;
  var url = "https://www.twitter.com/" + username;
  window.open(url);
}

function getInstagramUsername() {
  var username = document.getElementById("instaValue").value;
  var url = "https://www.instagram.com/" + username + "/";
  window.open(url);
}
