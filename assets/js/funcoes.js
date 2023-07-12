$(function($) {


	$("select").change(function(){
		
		$("#price1").html($("#plan1").val());
		$("#price2").html($("#plan2").val());
		$("#price3").html($("#plan3").val());
		
	});

});

novo = 0;
total = 1;
function paginacao(value){
	$(".more").css("display", "none");
	novo++;
	
	$("<div id='conteudo"+novo+"'></div>").appendTo("#conteudo");
	$("#conteudo"+novo+"").load(value);	
	total = 600 * novo;
	$('aside').animate({scrollTop:total}, 600);
	
}






function loadCity(uf){
	page = "includes/cidade.php?uf="+uf;
	$("#carrega_cidade").load(page);
}

/*Mascaras -----------------------------------------------------------------------------------*/
    function Mascara(o,f){
        v_obj=o
        v_fun=f
        setTimeout("execmascara()",1)
    }
    
    /*FunÃ§Ã£o que Executa os objetos*/
    function execmascara(){
        v_obj.value=v_fun(v_obj.value)
    }
    
    /*FunÃ§Ã£o que Determina as expressÃµes regulares dos objetos*/
    function leech(v){
        v=v.replace(/o/gi,"0")
        v=v.replace(/i/gi,"1")
        v=v.replace(/z/gi,"2")
        v=v.replace(/e/gi,"3")
        v=v.replace(/a/gi,"4")
        v=v.replace(/s/gi,"5")
        v=v.replace(/t/gi,"7")
        return v
    }
    
    /*FunÃ§Ã£o que permite apenas numeros*/
    function Integer(v){
        return v.replace(/\D/g,"")
    }
    
    /*FunÃ§Ã£o que padroniza telefone (11) 4184-1241*/
    function Telefone(v){
        v=v.replace(/\D/g,"")                 
        v=v.replace(/^(\d\d)(\d)/g,"($1) $2") 
        v=v.replace(/(\d{4})(\d)/,"$1-$2")    
        return v
    }
    
    /*FunÃ§Ã£o que padroniza telefone (11) 41841241*/
    function TelefoneCall(v){
        v=v.replace(/\D/g,"")                 
        v=v.replace(/^(\d\d)(\d)/g,"($1) $2")    
        return v
    }
    
	
	function Celular(v){
			
			 v=v.replace(/\D/g,"");             //Remove tudo o que nÃ£o Ã© dÃ­gito

			v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parÃªnteses em volta dos dois primeiros dÃ­gitos
		
			v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hÃ­fen entre o quarto e o quinto dÃ­gitos
		
			return v;
			
    }
	
    /*FunÃ§Ã£o que padroniza CPF*/
    function Cpf(v){
        v=v.replace(/\D/g,"")                    
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       
                                                 
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") 
        return v
    }
	
	
	function Rg(v){
        v=v.replace(/\D/g,"")                    
        v=v.replace(/(\d{2})(\d)/,"$1.$2")       
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       
        v=v.replace(/(\d{3})(\d)/,"$1-$2")                                           
        
        return v
    }
    
    /*FunÃ§Ã£o que padroniza CEP*/
    function Cep(v){
					   v=v.replace(/\D/g,"")
        v=v.replace(/D/g,"")                
        v=v.replace(/^(\d{5})(\d)/,"$1-$2") 
        return v
    }
    
    /*FunÃ§Ã£o que padroniza CNPJ*/
    function Cnpj(v){
        v=v.replace(/\D/g,"")                   
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")     
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           
        v=v.replace(/(\d{4})(\d)/,"$1-$2")              
        return v
    }
    
    /*FunÃ§Ã£o que permite apenas numeros Romanos*/
    function Romanos(v){
        v=v.toUpperCase()             
        v=v.replace(/[^IVXLCDM]/g,"") 
        
        while(v.replace(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,"")!="")
            v=v.replace(/.$/,"")
        return v
    }
    
    /*FunÃ§Ã£o que padroniza o Site*/
    function Site(v){
        v=v.replace(/^http:\/\/?/,"")
        dominio=v
        caminho=""
        if(v.indexOf("/")>-1)
            dominio=v.split("/")[0]
            caminho=v.replace(/[^\/]*/,"")
            dominio=dominio.replace(/[^\w\.\+-:@]/g,"")
            caminho=caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g,"")
            caminho=caminho.replace(/([\?&])=/,"$1")
        if(caminho!="")dominio=dominio.replace(/\.+$/,"")
            v="http://"+dominio+caminho
        return v
    }

    /*FunÃ§Ã£o que padroniza DATA*/
    function Data(v){
        v=v.replace(/\D/g,"") 
        v=v.replace(/(\d{2})(\d)/,"$1/$2") 
        v=v.replace(/(\d{2})(\d)/,"$1/$2") 
        return v
    }
    
    /*FunÃ§Ã£o que padroniza HORA*/
    function Hora(v){
        v=v.replace(/\D/g,"") 
        v=v.replace(/(\d{2})(\d)/,"$1:$2")  
        return v
    }
    
    /*FunÃ§Ã£o que padroniza valor monÃ©tario*/
    function Valor(v){
        v=v.replace(/\D/g,"") //Remove tudo o que nÃ£o Ã© dÃ­gito
        v=v.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/,"$1.$2");
        //v=v.replace(/(\d{3})(\d)/g,"$1,$2")
        v=v.replace(/(\d)(\d{2})$/,"$1,$2") //Coloca ponto antes dos 2 Ãºltimos digitos
        return v
    }
    
    /*FunÃ§Ã£o que padroniza Area*/
    function Area(v){
        v=v.replace(/\D/g,"") 
        v=v.replace(/(\d)(\d{2})$/,"$1.$2") 
        return v
        
    }
	
	function Peso(v){
		v=v.replace(/\D/g,"") //Remove tudo o que nÃ£o Ã© dÃ­gito
        v=v.replace(/^([0-9]{3}\.?){3}-[0-9]{3}$/,"$1.$2");
        v=v.replace(/(\d)(\d{3})$/,"$1,$2") //Coloca ponto antes dos 2 Ãºltimos digitos
        return v
    }