$(document).ready(function(){

   
    $("#search").click(function(){
         //get search input
        var searchTerm = $("#searchTerm").val();
       
        // add searchTerm into url
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&callback=?";
        // get json using ajax
        $.ajax({
            type    : "GET",
            url     : url,
            async   : false,
            dataType:"json",
            success : function(data){
            //    console.log(data[1][0]);
            //    console.log(data[2][0]);
            //    console.log(data[3][0]);
           $("#output").html("");
            for(var i = 0; i< data[1].length; i ++)
                {
                    $("#output").prepend("<div class='margin-center'><div class='btn-primary fix-result' ><a class='content text-center' href='"+data[3][i]+"' target='blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></div></div>");
                }
            $("#searchTerm").val("");
            },
            error   : function(errorMessage){
                alert(errorMessage);
            }
    });
    })

});