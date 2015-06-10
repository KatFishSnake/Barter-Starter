/**
 * Created by dd31andre on 5/14/2015.
 */
$(function(){


        var placeholder_val = ["ex.sexybenfranklin@mail.ca", "ex.sexybenfranklin", "ex.GoBanTalking"];
        var default_val = $("input").val();

//        FOCUS BLUR, values update

        $("input").focus(function(e){
            e.preventDefault();
            default_val = $(this).val();
            console.log(default_val);
            var check = $.inArray(default_val, placeholder_val);

            if(check>=0) {
                console.log("its the value from the array");
                $(this).val("");
            }

        }).blur(function(j){
            j.preventDefault();
            if(!$(this).val()) {
                $(this).val(default_val);

            }else{
                $(this).css({
                    fontFamily: "Roboto-Regular",
                    color: "#444",
                    fontSize: "1em",
                    borderBottom: "1px solid rgba(68, 168, 222, 0.7)"
                });
            }
        });

//       CHECK FOR VALUES than SUBMIT

        $("#signUp_form").submit(function(e){

            var  name = $("input[type='text']").val();
            var  email = $("input[type='email']").val();
            var  passw = $("input[type='password']").val();
            var present_values = [name, email, passw];

            var check = [];

            for (e = 0; e < 3; e++) {
                if ($.inArray(present_values[e], placeholder_val) >= 0) {
                    check.push(1);
                } else {
                    check.push(0);
                }
            }

            if(check[0]===1){
                $("#username").css("border-bottom", "1px solid #FF2424");
                $("#username").focus();
            }else
            if(check[1]===1){
                $("#email").css("border-bottom", "1px solid #FF2424");
                $("#email").focus();
            }else
            if(check[2]===1){
                $("#password").css("border-bottom", "1px solid #FF2424");
                $("#password").focus();
            }


            if($.inArray(1, check) === -1){
                console.log("form to submit");
                return true;
            }else{
                console.log("nope form is not ready");
                return false;
            }

        });

//        $(".under_panel_firstLine a:first").click(function(){
//
//            $(".changing_content_signUp").animate({
//                margin: "0 700px 0 -700px",
//                opacity: 0
//            }, "slow");
//
//            setTimeout(function(){
//                $(".changing_content_signUp").remove();
//            },1000);
//
//
//            $.ajax({
//                url:"index_LogIn.html",
//                dataType: "html",
//                success: function (response) {
//                    console.log(response);
//                    $(".cont_forChanges").hide().append(response);
//
//                    setTimeout(function(){
//                        $(".cont_forChanges").fadeIn();
//                    }, 1000);
//                },
//                error: function (xhr, status) {
//                    console.error(xhr +" "+ status);
//                }
//            });
//
//
//        });


});