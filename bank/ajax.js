	s_div='';
	subject_id = '';
	function handleHttpResponse()
	{
		if (http.readyState == 4)
		{
			if (subject_id != '')
			{
				document.getElementById(subject_id).innerHTML = http.responseText;
			}
		}
	}
	function getHTTPObject()
	{
		var xmlhttp;
		/*@cc_on
		@if (@_jscript_version >= 5)
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
					xmlhttp = false;
				}
			}
		@else
		xmlhttp = false;
		@end @*/
		if (!xmlhttp && typeof XMLHttpRequest != 'undefined')
		{
			try
			{
				xmlhttp = new XMLHttpRequest();
			}
			catch (e)
			{
				xmlhttp = false;
			}
		}
		return xmlhttp;
	}
	var http = getHTTPObject(); // We create the HTTP Object

	function hideEdit()
	{
		document.getElementById('window').style.display = 'none';

		
	}
	
	function light(id,action)
	{
		if(action=="1")
		{
			document.getElementById(id).style.border = "1px solid red";
			document.getElementById(id).style.color = "red";
		}
		else
		{
			document.getElementById(id).style.border = "1px solid #525252";
			document.getElementById(id).style.color = "black";
		}
	}


function pay(pno,amm,pon,pdt,div)
	{
		div=document.getElementById('dv').value;
		subject_id = div;
		


		pno=document.getElementById('pno').value;

		amm=document.getElementById('amm').value;

		pon=document.getElementById('pon').value;

		pdt=document.getElementById('pdt').value;

		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
		url = "?pno="+pno+"&amm="+amm+"&pon="+pon+"&pdt="+pdt+"&timestamp="+timestamp;
		http.open("GET", "pays.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
hideEdit();

		
	}

function pays(pno,amm,pon,pdt,div)
	{
		document.getElementById('window').style.display = 'block';

		document.getElementById('pno').value    =  pno;

		document.getElementById('amm').value    =  amm;

		document.getElementById('pon').value    =  pon;
		
		document.getElementById('pdt').value    =  pdt;

		document.getElementById('dv').value    =  div;
	}

function edt(un)
	{
		subject_id = 'con';
		
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();

		url = "?unm="+un+"&timestamp="+timestamp;
		http.open("GET", "profile.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);

		
	}
	
function tmppr()
	{
		subject_id = 'wb_Text13';
		document.getElementById('custnm').focus();
		document.getElementById('custnm').select();
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();

		url = "?timestamp="+timestamp;
		http.open("GET", "tmppr.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);

		
	}
	
	
function adtmppr(pid,qty)
	{
		subject_id = 'wb_Text13';
		
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
		sl=document.getElementById('sl').value;
		pid=document.getElementById('prid').value;
		qty=document.getElementById('qnty').value;
		prc=document.getElementById('prc').value;
		rmk=document.getElementById('rmk').value;
		document.getElementById('rmk').value='';
		document.getElementById('qnty').value='';
		document.getElementById('prc').value='0';
		document.getElementById('lttl').value='';
		document.getElementById('qnty').focus();
		url = "?sl="+sl+"&pid="+pid+"&qty="+qty+"&prc="+prc+"&rmk="+rmk+"&timestamp="+timestamp;
		http.open("GET", "adtmppr.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);

		
	}
	
function editasso(cc,fn,fv,div)
	{
		subject_id = div;
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
		fv = document.getElementById('tb').value;
		url = "?cc="+cc+"&div="+div+"&fn="+fn+"&fv="+fv+"&timestamp="+timestamp;
		http.open("GET", "easso.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
		
	}	
function showedit(cc,fn,fv,div)
	{
		subject_id = div;
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
		
		url = "?cc="+cc+"&fn="+fn+"&div="+div+"&fv="+fv+"&timestamp="+timestamp;
		http.open("GET", "sec.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
		
	}

function adduser(unm,nm,mob,eml,desg,brn,cc,vl,un)
	{
		subject_id = 'list';
		unm=document.getElementById('unm').value
		nm=document.getElementById('nm').value
		mob=document.getElementById('mob').value
		eml=document.getElementById('eml').value
		desg=document.getElementById('desg').value
		brn=document.getElementById('brn').value
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
	

		url = "?unm="+unm+"&nm="+nm+"&mob="+mob+"&eml="+eml+"&brn="+brn+"&desg="+desg+"&cc="+cc+"&vl="+vl+"&un="+un+"&timestamp="+timestamp;
		http.open("GET", "aduser.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);

		
	}

function vcr(un)
	{
		subject_id = 'con';
		
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();

		url = "?unm="+un+"&timestamp="+timestamp;
		http.open("GET", "vcr.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
                print();
		
	}
function deltpr(un)
	{
		subject_id = 'wb_Text13';
		var sl=document.getElementById('sl').value
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();

		url = "?sl="+sl+"&tsl="+un+"&timestamp="+timestamp;
		http.open("GET", "deltpr.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
		
	}
function actd(div,pno)
	{
		subject_id = div;
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
		
		url = "?pno="+pno+"&timestamp="+timestamp;
		http.open("GET", "upd.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
		
	}
function apprv(cc,div)
	{
		subject_id = div;
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
		url = "?cc="+cc+"&timestamp="+timestamp;
		http.open("GET", "appr.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
		
	}
function aspay(pno,amm,pon,pdt,div)
	{
		div=document.getElementById('dv').value;
		subject_id = div;
		


		pno=document.getElementById('pno').value;

		amm=document.getElementById('amm').value;

		pon=document.getElementById('pon').value;

		pdt=document.getElementById('pdt').value;

		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
		url = "?pno="+pno+"&amm="+amm+"&pon="+pon+"&pdt="+pdt+"&timestamp="+timestamp;
		http.open("GET", "asspays.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
		hideEdit();

		
	}
function aspays(pno,amm,pon,pdt,div)
	{
		document.getElementById('window').style.display = 'block';

		document.getElementById('pno').value    =  pno;

		document.getElementById('amm').value    =  amm;

		document.getElementById('pon').value    =  pon;
		
		document.getElementById('pdt').value    =  pdt;

		document.getElementById('dv').value    =  div;
	}
	
	function rcvfnd(pln,div)
	{
		subject_id = div;
		time =  new Date();
		timestamp = time.getTime()+time.getSeconds();
		url = "?pln="+pln+"&timestamp="+timestamp;
		http.open("GET", "rcvfnd.php"+url, true);
		http.onreadystatechange = handleHttpResponse;
		http.send(null);
		
	}