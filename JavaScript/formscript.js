function validateForm1(){
	var name=document.getElementById("name").value;
	var fname=document.getElementById("fname").value;
	if(name == "" || fname == "")
		alert("All Fields Are Mandatory");
	else
		alert("Registered Successfully");
}

function validateFormByName(){
	var flag =false;
	var temp;
	var inputvalues=document.getElementsByName("register");
	for(var i=0;i<inputvalues.length;i++){
		if(inputvalues[i].value == ""){
			flag = true;
			temp=inputvalues[i].id;
			break;
		}
	}
	if(flag)
		document.getElementById("error").innerHTML=temp+ " Field is Mandatory";
	else
		document.getElementById("error").innerHTML="Registered Successfully....!";
}

function validateFormByName1(){
	var array=["Name","Fname","Age","Email"];
	var flag=false;
	var agevalidation = ageValidation();
	for(var i=0;i<array.length;i++){
		var v=document.getElementById(array[i]).value;
		if(v == ""){
			flag=true;			
			break;
		}
		else{
			document.getElementById(array[i]).style.borderColor="";
			flag=false;
		}
	}
	if(flag){
		for(var i=0;i<array.length;i++){
			var v=document.getElementById(array[i]).value;
			if(v == ""){
				document.getElementById("error").innerHTML="Highlighted Field is Mandatory";
				document.getElementById("error").style.color="red";
				document.getElementById(array[i]).style.borderColor="red";
			}
			else if(agevalidation)
				document.getElementById("Age").style.borderColor="red";
			else if(emailValidation()){
				document.getElementById("Emailspan").innerHTML="Invalid Email Address";
				document.getElementById("Email").style.borderColor="red";
			}
			else
				document.getElementById(array[i]).style.borderColor="";
		}
	}
	else if(agevalidation){
		document.getElementById("error").innerHTML="Highlighted Field is Mandatory";
		document.getElementById("error").style.color="red";
		document.getElementById("Age").style.borderColor="red";
	}
	else if(emailValidation()){
		document.getElementById("error").innerHTML="Highlighted Field is Mandatory";
		document.getElementById("error").style.color="red";
		document.getElementById("Email").style.borderColor="red";
		document.getElementById("Emailspan").innerHTML="Invalid Email Address";
	}
	else{
		document.getElementById("error").innerHTML="Registered Successfully....!";
		document.getElementById("error").style.color="green";
	}
}	

function phoneNumberValidate(){
		var phone=document.getElementById("Phonenumber").value;
		if(phone.length<10 || phone.length>10)
			return true;
		else{
			document.getElementById("Emailspan").innerHTML="";
			return false;
		}
}

//---------------------------FORM VALIDATION--------------------------------------------------
function validateForm(id){
	var flag=false;
	if(id == 'bysubmit'){//onsubmit logic
		var tags=document.getElementsByName("register");
		for(var i=0;i<tags.length;i++){
				if(tags[i].value == ""){
					printErrorMessage(tags[i]);
					flag=true;
				}
				else{
					document.getElementById("errormessage"+tags[i].id).innerHTML="Good";
					document.getElementById("errormessage"+tags[i].id).style.color="green";
					document.getElementById(tags[i].id).style.borderColor="";
				}
		}
			
	}
	else{//onblur
	
		if(document.getElementById(id).value ==""){
			var tag = document.getElementById(id);
			printErrorMessage(tag);
			flag = true;
		}
		else{
			
			document.getElementById("errormessage"+id).innerHTML="Good";
			document.getElementById("errormessage"+id).style.color="green";
			document.getElementById(id).style.borderColor="";
			if(id == "cost" )
				numberValidation(id);
			if(id == "bname")  
				charactValidation(id);
			if(id == "aname" )
				charactValidation(id);
			if(id == "email")
				emailValidation(id);
			flag=true;
		}		
	}
	if(flag)
		document.getElementById("Success").innerHTML="";
	else
		document.getElementById("Success").innerHTML="Registered Successfully.......";
}	
//Mandatory Fields Validation Error Message
function printErrorMessage(tag){
	
	var temp1;
	if(tag.id == "bname")	
		temp1 = "Book Name";
	if(tag.id == "aname")
		temp1 = "Author";
	if(tag.id == "cost")
		temp1 = "Cost ";
	if(tag.id == "email")
		temp1 = "Email";
	if(tag.id == "category")
		temp1 = "Category";
	if(tag.id == "description")
		temp1 = "Description";
	
	document.getElementById("errormessage"+tag.id).innerHTML=temp1+" is Mandatory";
	document.getElementById(tag.id).style.borderColor="red";
	document.getElementById("errormessage"+tag.id).style.color="red";
	
}
//Email Validation
function emailValidation(id){
		var mailRegex = /^[a-zA-Z][a-zA-Z0-9\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
		var email=document.getElementById(id).value;
		if(email.match(mailRegex)){
			document.getElementById("errormessage"+id).innerHTML="Good";
			document.getElementById("errormessage"+id).style.color="green";
			document.getElementById(id).style.borderColor="";
			//return false;
		}
		else{
			document.getElementById("errormessage"+id).innerHTML="Invalid Email Address";
			document.getElementById("errormessage"+id).style.color="red";
			document.getElementById(id).style.borderColor="red";
			//return true;
		}
}

//Number Validation
function numberValidation(id){
	var age=document.getElementById(id).value;
	if(isNaN(age)){
		document.getElementById("errormessage"+id).innerHTML="Enter Numeric Value Only";
		document.getElementById("errormessage"+id).style.color="red";
		document.getElementById(id).style.borderColor="red";
		//return true;
	}
	else{
		document.getElementById("errormessage"+id).innerHTML="Good";
		document.getElementById("errormessage"+id).style.color="green";
		document.getElementById(id).style.borderColor="";
		//return false;
	}
}
//Character Validation
function charactValidation(id){
	var regEx = /^[a-zA-Z][a-zA-Z\s]*$/;
	var value=document.getElementById(id).value;
	if(value.match(regEx)){
		document.getElementById("errormessage"+id).innerHTML="Good";
		document.getElementById("errormessage"+id).style.color="green";
		document.getElementById(id).style.borderColor="";
	}
	else{
		document.getElementById("errormessage"+id).innerHTML="Enter characters Only";
		document.getElementById("errormessage"+id).style.color="red";
		document.getElementById(id).style.borderColor="red";
	}
}

