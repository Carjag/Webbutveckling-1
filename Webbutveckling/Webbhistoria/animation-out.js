
window.addEventListener("beforeunload", function (event) {
   document.body.classList.add("animate-out");
   event.returnValue = "Write something clever here..";
  
});
