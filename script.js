$(document).ready(function(){
    // on addUser 
    $(document).on('click',"#addUser",(e)=>
    {
        e.preventDefault();
        const form = document.querySelector("form");
        const formData = new FormData(form);
        let tbody="";
        tbody+=`<tr>`;
        for(item of formData)
        {
            tbody+=`<td><input type='text' value='${item[1]}' disabled></td>`;
        }
        tbody+=`<td><button class='edit' data-toggle='tooltip'>Edit</button><button class='update' data-toggle='tooltip'>Update</button><button class='delete' data-toggle='tooltip'>DELETE</button></td></tr>`; 
        $("#id").val("");
        $("#name").val("");
        $("#price").val("");
        $(".tbody").append(tbody);
    
    }) ;

    // when u click on edit
    $(document).on('click',".edit",function(){
        var currentRow = $(this).closest("tr");
        currentRow.find(".edit").css("display", "none");
        // var name = currentRow.find("td:eq(0)").text();
        // var email = currentRow.find("td:eq(1)").text();
        var input = currentRow.find("input[type ='text']");
        input.each(function() {
            $(this).removeAttr('disabled');
        });
      currentRow.find(".update", ".edit").toggle();
    }) ;

    // when u click on update
    $(document).on('click',".update",function(){
        var currentRow = $(this).closest("tr");
        currentRow.find(".update").css("display", "none");
        var input = currentRow.find("input[type ='text']");
        input.each(function() {
            $(this).attr('disabled',true);
        });
       currentRow.find(".edit", ".update").toggle();
    }) ;

      // Delete Row
  $(document).on("click", ".delete", function() {
    $(this).closest("tr").remove();
  });

   
})