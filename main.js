const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

// Switch to sign-up form
signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

// Switch to sign-in form
signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Dummy functions for Google and Facebook sign-ups (replace with real implementations)
document.getElementById('googleSignUp').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Google Sign Up clicked');
});

document.getElementById('facebookSignUp').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Facebook Sign Up clicked');
});

document.getElementById('googleLogin').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Google Login clicked');
});

document.getElementById('facebookLogin').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Facebook Login clicked');
});

// Redirect to main page on successful login (replace with actual login logic)
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'main.html';
});
