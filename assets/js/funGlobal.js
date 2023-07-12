function popup(mypage, myname, w, h, scroll)
{
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',status=no,scrollbars='+scroll+''
	win = window.open(mypage, myname, winprops)
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}
function funGlobal_frmAjaxPostJson(frmNameId,CheckRecaptcha)
{
	var CheckRecaptcha = CheckRecaptcha;
	var preloader1 = 'Aguarde..';
	$('#'+frmNameId+'BtnSave').click(function(e){		
		
		funGlobal_AlertPersonaliza('loading',preloader1);
		
		//$('#'+frmNameId+'Preloader').html(preloader1).show();
		$('#'+frmNameId+'BtnSave').hide();
		$('#'+frmNameId+'Retorno').hide();
		
		var frmModal = $('#'+frmNameId);
		$.ajax({
			type: frmModal.attr('method'),
			url: frmModal.attr('action'),
			data: frmModal.serialize(),
			dataType:"json",
			success: function (data)
			{
				var msgStatus = data.status;				
				var msgTexto = data.msg;								
				if (typeof data.urlReturn === 'undefined')
				{
					var urlReturn = '';									
				}
				else
				{
					var urlReturn = data.urlReturn;				
				}
				funGlobal_AlertPersonaliza(msgStatus,msgTexto);
				if(msgStatus=='success')
				{
					$('#'+frmNameId).trigger("reset");					
				}
				$('#'+frmNameId+'BtnSave').show();
				
				if(urlReturn!='')
				{					
					setTimeout(function(){ window.location.href=""+urlReturn+""; }, 1000);
				}
				else
				{
					funGlobal_frmAjaxCsrf();	
				}				
			},
			error: function(xhr, error){
				//console.debug(xhr); console.debug(error);
				funGlobal_frmAjaxCsrf();
				$('#'+frmNameId+'BtnSave').show();
			}
			//funGlobal_frmAjaxCsrf();
		});
		
		if(CheckRecaptcha=='s')
		{
			grecaptcha.reset();
		}
		e.preventDefault();
	});
}

function funGlobal_frmAjaxCsrf()
{
	var inputCSRFNameForm = $('input[name="MEUSITECSRFName"]');
	var inputCSRFTokenForm = $('input[name="MEUSITECSRFToken"]');
	$.ajax({
		type: 'POST',
		url: '../meusite/ajax/csrf.php',		
		data: '',
		dataType:"json",
		success: function (data)
		{
			inputCSRFNameForm.val(data.n);
			inputCSRFTokenForm.val(data.t);
			 $.cookie("csrf_n", data.n); 
			 $.cookie("csrf_v", data.t); 
			
		},
		error: function(xhr, error){
			//console.debug(xhr); console.debug(error);
		}
	});	
}
function funGlobal_frmAjaxPost(frmNameId)
{
	var preloader1 = 'Aguarde..';
	$('#'+frmNameId+'BtnSave').click(function(e) {
		//$('#'+frmNameId).submit();	
	//});	
	//$('#'+frmNameId).submit(function(e) {		
		$('#'+frmNameId+'Preloader').html(preloader1).show();
		$('#'+frmNameId+'BtnSave').hide();
		$('#'+frmNameId+'Retorno').hide();
		var frmModal = $('#'+frmNameId);
		$.ajax({
			type: frmModal.attr('method'),
			url: frmModal.attr('action'),
			data: frmModal.serialize(),
			success: function (data)
			{			
				$('#'+frmNameId+'Retorno').html(data).show();
				$('#'+frmNameId+'Preloader').hide();
				$('#'+frmNameId+'BtnSave').show();	
			},
			error: function(xhr, error){
				console.debug(xhr); console.debug(error);
			}
		});
		grecaptcha.reset();
		e.preventDefault();
	});
}

function funGlobal_AlertPersonaliza(status,msg)
{
	if(status=='error')
	{ 
		
		swal({
		  type: 'error',
		  title: msg,
		  text: ''
		});
	
	}
	
	if(status=='success'){ 
		swal({
		  //position: 'top-end',
		  type: 'success',
		  title: msg,
		  showConfirmButton: false,
		  timer: 2000
		});
	}
	
	if(status=='loading')
	{
		
		swal({		  
		  type: 'info',
		  title: msg,
		  onOpen: () => {
				swal.showLoading()				
			  },
			  onClose: () => {
				
			  }
		});
		
	}
}
