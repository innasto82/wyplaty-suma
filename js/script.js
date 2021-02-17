$(document).ready(function(){
        $("#count-sum").click(function() {
            let sum = 0;
            $('.salary').each(function() {
                sum += parseInt($(this).text());
            })
            $('#sum').text(sum);
       })
    })
    	