//set up the event listener as step 1
window.addEventListener('keydown', function(e,keyCode){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 console.log(audio)
})