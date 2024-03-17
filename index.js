var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none" || !content.style.display) {
      content.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.display = "none";
      content.style.maxHeight = null;
    }
  });
}
