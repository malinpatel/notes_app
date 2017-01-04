(function (view) {

  function htmlList (list) {
    if (list.notes.length === 0 ) return;

    var output = ["<ul>"];
    displayNotes(list).forEach (function (note) {
      output.push("<li><div>"+note.text.substring(0,20)+"</div></li>");
    });
    output.push("</ul>");
    console.log(output.join(""));
    return output.join("");
  }

  view.htmlList = htmlList;

})(this);
