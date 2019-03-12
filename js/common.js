$("input[name=lusername]").keyup(function(){if(event.keyCode == 13){login_form($("input.loginbutton"))}});
$("input[name=lpassword]").keyup(function(){if(event.keyCode == 13){login_form($("input.loginbutton"))}});
$("input[name=rusername]").keyup(function(){if(event.keyCode == 13){reg_form($("input.regbutton"))}});
$("input[name=rpassword]").keyup(function(){if(event.keyCode == 13){reg_form($("input.regbutton"))}});
$("input[name=repassword]").keyup(function(){if(event.keyCode == 13){reg_form($("input.regbutton"))}});
$("form[name=loginform] input[name=email]").keyup(function(){if(event.keyCode == 13){searchpwd_form($("input.searchpwdbutton"))}});
$("form[name=loginform] input[name=checkcode]").keyup(function(){if(event.keyCode == 13){searchpwd_form($("input.searchpwdbutton"))}});
$("input.loginbutton").click(function(){login_form($(this))});
$("input.searchpwdbutton").click(function(){searchpwd_form($(this))});





function open_win(id) {var url = $(id).attr("aa") + "&postinfo=" + $(id).parent().parent().find("span#postinfo").text();window.open(url, "_blank" ,"toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=900，height=600");}
function isbnclick(id) {$(id).css("display", "none");$(id).next().css("display", "");$(id).next().find("input").eq(0).focus();}
function isbninputclick(id) {$(id).parent().parent().find("span").eq(0).html($(id).val());$(id).parent().parent().find("span").eq(1).css("display", "none");$(id).parent().parent().find("span").eq(0).css("display", "");}
function enter_login(k){if(event.keyCode == 13){login_form(document.getElementById(k))}}
function enter_reg(k){if(event.keyCode == 13){reg_form(document.getElementById(k))}}
// function login_form(k){$.post("Ajax.html","action=login.action"+$("input[name=lusername]").val()+"&password="+$("input[name=lpassword]").val()+"&returnurl="+$(document).find("input[name=returnurl]").val()+"&url="+$(k).attr("name"),function(data){if(data=="1"){alert("请输入登录账户！");}else if(data=="2"){alert("请输入登录密码！");}else if(data=="3"){alert("密码错误，请重新输入！");}else if(data=="4"){alert("该帐号不存在，请重新输入！");}else{location=data;}})}
function login_form(k){
    var username= Document.getElementById("#textname").val();
    var password= Document.getElementById("#textpwd").val();
    if(username==null || username== ""){
        alert("请输入用户名！");
    }
    if(password== null || password== ""){
        alert("请输入密码！");
        return false;
    }
    alert(username+password);
    $.post(
        "login.action",
        {
            username:$("#textnme").val(),
            password: $("#textpwd").val(),
        }
    ).then(data=>{
        if(data.ok==1){
            alert("登录成功");
            location=document.referrer;
        }
        else{
            alert("登录失败！"+data.msg);
        };
    });
}
function reg_form(k){$.post("/Ajax.html","action=reg&username="+$("input[name=rusername]").val()+"&password="+$("input[name=rpassword]").val()+"&repassword="+$("input[name=repassword]").val()+"&url="+$(k).attr("name"),function(data){eval(data)})}
function searchpwd_form(k){$.post("/Ajax.html","action=searchpwd&email="+$("input[name=email]").val()+"&checkcode="+$("input[name=checkcode]").val(),function(data){eval(data)})}

function make_select(selectobj,tid,str,selectid)
{
    $.post("/Ajax.html","action=selectoption&tid="+tid+"&str="+str,function(data){
        $(selectobj).empty();
        $("<option value=''>==请选择==</option>").appendTo(selectobj);
        if(data!=""){
            var arr=data.split(',');
            for(var i=0;i<arr.length;i++){
                $("<option value='"+arr[i].split('&')[0]+"'"+(selectid.indexOf("&")>=0?(selectid.indexOf(arr[i].split('&')[0])>=0?" selected":""):(selectid==arr[i].split('&')[0]?" selected":""))+">"+arr[i].split('&')[1]+"</option>").appendTo(selectobj);
            }
        }
    });
}
function POST(k) {
    if ($(k).parent().prev().find("input").val() == "") { alert("请输入单号/备注！"); $(k).parent().prev().find("input").focus(); return false; }$.post("/Ajax.html","action=delivery&ID="+$(k).attr("title")+"&alipayinfo="+$(k).attr("aa")+"&postinfo="+escape($(k).parent().prev().prev().prev().find("select").val())+"："+$(k).parent().prev().find("input").val()+"&bookNums="+$(k).attr("bookNums"), function(data) {});
    window.opener.document.getElementById($(k).attr("tid")).innerHTML = $(k).parent().parent().find("select").val()+"<br/>"+$(k).parent().prev().find("input").val();
    window.close();
}
function changePost(k) {
    if ($(k).parent().prev().find("input").val() == "") { alert("请输入单号/备注！"); $(k).parent().prev().find("input").focus(); return false; }
    var postinfo = escape($(k).parent().prev().prev().prev().find("select").val()) + "：" + $(k).parent().prev().find("input").val();
    $.post("/Ajax.html", "action=changePost&ID=" + $(k).attr("title") + "&postinfo=" + postinfo, function(data) {$(k).close();});
}






