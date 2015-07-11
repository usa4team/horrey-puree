
function isWhiteSpaces(S)
{
	var isNull
	if (S.length == 0 ) 
		isNull = true;
	else
	{
		for (I=0;I < S.length; I++ )
		{
			isNull = S.substring(I,I+1)==" "?true:false
			if (!isNull) break;
		}
	}
	return isNull;
}

function isAlpha(S)
{
	for (var i=0; i<S.length; i++) 
	{
		var ch = S.charAt(i);
		if ((ch < 'a' || ch > 'z') && (ch < 'A' || ch > 'Z') && (ch != ' ') && (ch <'0') && (ch >'9')) 
			return false;
	}
	return true;
}

function isNumeric(S)
{
	if (!isNaN(S))	
		return true;	
	return false;
}

function isEmail(email)
{
	var isNullEmail = isWhiteSpaces(email)
	var emailLength = email.length
	var isSPACEexists = email.indexOf(" ") + 1
	var isATexistsFirst = email.indexOf("@")
	var isATexistsLast = email.lastIndexOf("@")
	var isDOTexistsFirst = email.indexOf(".",isATexistsFirst+1)
	var isDOTexistsNext1 = email.indexOf(".",isATexistsFirst+1)
	var isDOTexistsNext2 
	var isDOTexistsLast = email.lastIndexOf(".")

	if ((emailLength < 8 ) || (isDOTexistsFirst < isATexistsFirst+3) || (isATexistsFirst < 2) ||
   	 	(isDOTexistsLast == emailLength-1) || (isATexistsLast == emailLength-1) ||
    	(isDOTexistsFirst == 0) || (isATexistsFirst == 0) || (isATexistsFirst == isDOTexistsFirst) ||
    	(isATexistsFirst != isATexistsLast) || isSPACEexists || isNullEmail)
	{
		return false;
	}

	while (isDOTexistsNext1 < isDOTexistsLast)
	{
		isDOTexistsNext2 = email.indexOf(".",isDOTexistsNext1+1)
		if (isDOTexistsNext1+1 == isDOTexistsNext2)
		{
			return false;
		}
		isDOTexistsNext1 = isDOTexistsNext2
	}

	return true;
}


function validate ()
	{
	
	if(isWhiteSpaces(document.Apply.Name.value))
	{
		alert("Please Enter Your Name......");
		document.Apply.Name.focus();
		return false;
	}	
	if (isWhiteSpaces(document.Apply.Phone.value))
	{
		alert ('Please Enter Min 8 Digits Phone No......');
		document.Apply.Phone.focus();
		return false;
	}
	if (!isNumeric(document.Apply.Phone.value))
	{
		alert ('Please Enter Digits Only......');
		document.Apply.Phone.focus();
		return false;
	}
	if(document.Apply.Phone.value.search(/\d{8}/)==-1)
   {
      alert("'Please Enter Minimum 8 Digits.....'");
	  document.Apply.Phone.focus();
      return false;
   }
	if (isWhiteSpaces(document.Apply.Email.value))
	{
		alert ('Please Enter Email Id......');
		document.Apply.Email.focus();
		return false;
	}
	if (!isEmail(document.Apply.Email.value))
	{
		alert ("Please Enter Email Id in 'abc@xyz.com' Format.......");
		document.Apply.Email.focus();
		return false;
	}

    if(isWhiteSpaces(document.Apply.Course.value))
	{
		alert("Please Enter Your Course......");
		document.Apply.Course.focus();
		return false;
	}	
	
	  
}

