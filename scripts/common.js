const handleLogin = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  window.location.href = `./index.html?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  return false;
};

const handleContactSubmit = () => {
  const email = document.getElementById("email").value;

  window.location.href = `./index.html?email=${encodeURIComponent(email)}`;
  return false;
};
