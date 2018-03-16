var cpf = '';
var termosdeuso = false;

var desativaBt = function(disabled){
	$("#submit").prop('disabled', disabled);
}

$(document).ready(function () {

	$("#cpf").mask('000.000.000-00');

	$("#cpf").on('input', function(e){
		cpf = $("#cpf").val();

		if(cpf.length === 14 && termosdeuso){
			desativaBt(false);
		}else{
			desativaBt(true);
		}
	})

	$("#termosdeuso").change(function(){
		termosdeuso = $("#termosdeuso").is(":checked");
		if(cpf.length === 14 && termosdeuso){
			desativaBt(false);
		}else{
			desativaBt(true);
		}
	})
 	
})