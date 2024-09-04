function newItem(){
   let li = $('#list')
   let inputValue = $('#input').val();
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
        $('#list').append(li);
   }

   function crossOut() {
    li.toggleClass("strike");
}
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.on("click", deleteListItem);

     function deleteListItem(){
        li.addClass("delete")
    }

    $('#list').sortable();

}