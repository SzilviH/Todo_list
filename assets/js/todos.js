//check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete todo item
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

//add new todo items from input
$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span> X </span>" + todoText + "</li>")
  };
});
