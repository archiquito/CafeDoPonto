var showHideSocial = function (showSocial) {
	if (showSocial) {
		$(".showSocial").show();
		$(".showEmail").hide();
	} else {
		$(".showSocial").hide();
		$(".showEmail").show();
	}
}

var showHideDL = function (showNotdl) {
	if (showNotdl) {
		$(".dontshowdlonly").show();
		$(".showdlonly").hide();
	} else {
		$(".dontshowdlonly").hide();
		$(".showdlonly").show();
	}
}

var setSocial = null;
var setEmail = null;
var showpasswd = null;
var facebooklogin = null;
var googlelogin = null;
var formlogin = null;
var hideerror = null;
var signInWithEmail = false;

$(document).ready(function () {

	var mostraboxcadastro = $("#cadastrar").val();
	showHideSocial(true);

	setSocial = function () {
		showHideSocial(true);
	}

	setEmail = function () {
		showHideSocial(false);
	}

	$(".notificationbox .aguarde").hide();

	if ($("#error").val()) {
		$(".notificationbox .error").show();
		$(".notificationbox .error span.errormsg").text($("#error").val());
		if($("#signInWithEmail").val()){
			setEmail();
		}
	} else {
		$(".notificationbox .error").hide();
	}

	if(mostraboxcadastro == 'true'){
		$(".notificationbox .aguarde").hide();
		$(".notificationbox .cadastrar").show();
	}else{
		console.log(mostraboxcadastro); 
		$(".notificationbox .cadastrar").hide();
	}

	if(mostraboxcadastro != 'true' && !$("#error").val()){
		$(".notificationbox").hide();
	}

	// if (detectmobile()) {
	//   showHideDL(false);
	// } else {
		 showHideDL(true);
	// }

	/*showpasswd = function () {
		el = $("#password");
		if (el.attr('type') == 'password') {
			el.attr('type', 'text');
		} else {
			el.attr('type', 'password');
		}
	}*/

	facebooklogin = function () {
		$(".notificationbox").show();
		//$(".notificationbox .aguarde").show();
		var idfacebook = $("#idfacebook").val();
		var idurl = $("#myurl").val();
        var routerPath = $("#routerPath").val();
		//$.post(routerPath+"/BTNFCBK");

		//alert("https://www.facebook.com/v2.9/dialog/oauth?client_id=" + idfacebook + "&redirect_uri=" + idurl + "/facebooklogin");
		window.location.href = "https://www.facebook.com/v2.9/dialog/oauth?client_id=" + idfacebook + "&redirect_uri=" + idurl + "/facebooklogin";
	}

	googlelogin = function () {
		$(".notificationbox").show();
		//$(".notificationbox .aguarde").show();
		var googleurl = $("#googleurl").val();
        var routerPath = $("#routerPath").val();
		//$.post(routerPath+"/BTNGGLE");
		window.location.href = googleurl;
	}

	formlogin = function () {
		$(".notificationbox").show();
		$(".notificationbox .aguarde").show();
		console.log("pass"+$("#password").val());		
		$("#mailform").submit();
	}

	formcadastro = function () {
		$(".notificationbox").show();
		$(".notificationbox .aguarde").show();
		$(".notificationbox .cadastrar").hide();
		$("#cadastroform").submit();
	}

	hideerror = function () {
		$(".notificationbox .aguarde").hide();
		$(".notificationbox .error").hide();
		$(".notificationbox").hide();
	}
	hidecadastrar = function () {
		$(".notificationbox .aguarde").hide();
		$(".notificationbox .cadastrar").hide();
		$(".notificationbox").hide();
		setEmail();
	}
	
	
	//mostrar senha
	
	$('#showPassword').on('click', function(){

		var passwordField = $('#password');
		var passwordFieldType = passwordField.attr('type');

		if(passwordFieldType == 'password')
		{
			passwordField.attr('type', 'text');
		   $('#showPassword').html('<i class="material-icons">visibility_off</i>');
			console.log(passwordFieldType);
		} else {
			passwordField.attr('type', 'password');
			$('#showPassword').html('<i class="material-icons">visibility</i>');
			console.log(passwordFieldType);
		}
	  });
	
});