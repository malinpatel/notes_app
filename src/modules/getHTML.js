(function (controller) {
  function getHTML (view) {
    var elem = document.getElementById('app');
    elem.innerHTML = htmlList(view.list);
  }

    controller.getHTML = getHTML;

})(this);
