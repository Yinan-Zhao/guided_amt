function gup( name )
{
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var tmpURL = window.location.href;
    var results = regex.exec( tmpURL );
    if( results == null )
        return "";
    else
        return results[1];
}

//
// This method decodes the query parameters that were URL-encoded
//
function decode(strToDecode)
{
    var encoded = strToDecode;
    return unescape(encoded.replace(/\+/g,  " "));
}

function show() {
	nextbutton.disabled = true;
	img.style.visibility = 'visible';
	img1.style.visibility = 'visible';
	ready = false;
	//document.getElementById("myDiv").style.visibility = 'visible';
	setTimeout("button_enable()", 1000);
}

function button_enable() {
	//document.getElementById("myDiv").style.display="none";
	//document.getElementById("myDiv").style.visibility = 'hidden';
	if (gup('assignmentId') == "ASSIGNMENT_ID_NOT_AVAILABLE"){
		nextbutton.disabled = true;
		nextbutton.innerHTML = "You must ACCEPT the HIT before you can submit the results.";
	}
	else{
		ready = true
		if (radios[0].checked == true || radios[1].checked == true){
			nextbutton.disabled = false;
		}
	}
}

document.getElementById('assignmentId').value = gup('assignmentId');
var nextbutton=document.getElementById("next_button");
nextbutton.disabled = true;
var form = document.querySelector("form")
var ready = false
var count = 1;
var train_num = 1;
var start_index = parseInt(gup('start'));
var end_index = parseInt(gup('end'));
var test_num = end_index - start_index
var cart = {};

var radios = form.elements["choice"];
var img = document.getElementById("myImage");
var img1 = document.getElementById("myImage1");
var pageNum = document.getElementById('pageNum');
var pageTrainNum = document.getElementById('pageTrainNum');

document.getElementById('totalTrainPages').innerHTML = train_num;
document.getElementById('totalPages').innerHTML = test_num;

if (gup('assignmentId') == "ASSIGNMENT_ID_NOT_AVAILABLE")
{
    // If we're previewing, disable the button and give it a helpful message
    nextbutton.disabled = true;
    nextbutton.innerHTML = "You must ACCEPT the HIT before you can submit the results.";

} else {
  var form = document.getElementById("mturk_form");
  if (document.referrer && ( document.referrer.indexOf('workersandbox') != -1) ) {
      form.action = "https://workersandbox.mturk.com/mturk/externalSubmit";
  }
}
var img_list_test = [
	["ours/7/002.jpg", "blend_20/7/003.jpg"],
	["ours/3/000.jpg", "blend_20/3/001.jpg"],
	["ours/80/003.jpg", "blend_20/80/004.jpg"],
	["blend_20/69/004.jpg", "ours/69/003.jpg"],
	["blend_20/73/004.jpg", "ours/73/003.jpg"],
	["ours/93/003.jpg", "blend_20/93/004.jpg"],
	["ours/61/001.jpg", "blend_20/61/002.jpg"],
	["ours/50/001.jpg", "blend_20/50/002.jpg"],
	["ours/37/002.jpg", "blend_20/37/003.jpg"],
	["blend_20/81/003.jpg", "ours/81/002.jpg"],
	["ours/8/001.jpg", "blend_20/8/002.jpg"],
	["blend_20/66/005.jpg", "ours/66/004.jpg"],
	["blend_20/64/004.jpg", "ours/64/003.jpg"],
	["blend_20/55/004.jpg", "ours/55/003.jpg"],
	["ours/26/003.jpg", "blend_20/26/004.jpg"],
	["ours/90/000.jpg", "blend_20/90/001.jpg"],
	["ours/29/004.jpg", "blend_20/29/005.jpg"],
	["blend_20/20/003.jpg", "ours/20/002.jpg"],
	["blend_20/21/002.jpg", "ours/21/001.jpg"],
	["ours/28/004.jpg", "blend_20/28/005.jpg"],
	["ours/96/000.jpg", "blend_20/96/001.jpg"],
	["ours/67/001.jpg", "blend_20/67/002.jpg"],
	["ours/30/003.jpg", "blend_20/30/004.jpg"],
	["blend_20/87/004.jpg", "ours/87/003.jpg"],
	["blend_20/77/004.jpg", "ours/77/003.jpg"],
	["ours/11/003.jpg", "blend_20/11/004.jpg"],
	["ours/15/001.jpg", "blend_20/15/002.jpg"],
	["ours/44/001.jpg", "blend_20/44/002.jpg"],
	["ours/42/004.jpg", "blend_20/42/005.jpg"],
	["blend_20/34/001.jpg", "ours/34/000.jpg"],
	["blend_20/25/004.jpg", "ours/25/003.jpg"],
	["ours/36/001.jpg", "blend_20/36/002.jpg"],
	["ours/75/003.jpg", "blend_20/75/004.jpg"],
	["blend_20/71/001.jpg", "ours/71/000.jpg"],
	["blend_20/89/005.jpg", "ours/89/004.jpg"],
	["ours/99/001.jpg", "blend_20/99/002.jpg"],
	["blend_20/86/002.jpg", "ours/86/001.jpg"],
	["blend_20/85/004.jpg", "ours/85/003.jpg"],
	["ours/40/003.jpg", "blend_20/40/004.jpg"],
	["blend_20/48/002.jpg", "ours/48/001.jpg"],
	["blend_20/60/002.jpg", "ours/60/001.jpg"],
	["blend_20/94/001.jpg", "ours/94/000.jpg"],
	["ours/0/001.jpg", "blend_20/0/002.jpg"],
	["blend_20/9/005.jpg", "ours/9/004.jpg"],
	["ours/22/000.jpg", "blend_20/22/001.jpg"],
	["blend_20/12/001.jpg", "ours/12/000.jpg"],
	["blend_20/43/001.jpg", "ours/43/000.jpg"],
	["ours/97/000.jpg", "blend_20/97/001.jpg"],
	["ours/58/004.jpg", "blend_20/58/005.jpg"],
	["blend_20/63/005.jpg", "ours/63/004.jpg"],
	["ours/91/004.jpg", "blend_20/91/005.jpg"],
	["ours/70/001.jpg", "blend_20/70/002.jpg"],
	["blend_20/13/004.jpg", "ours/13/003.jpg"],
	["ours/95/000.jpg", "blend_20/95/001.jpg"],
	["blend_20/39/002.jpg", "ours/39/001.jpg"],
	["ours/45/002.jpg", "blend_20/45/003.jpg"],
	["blend_20/23/003.jpg", "ours/23/002.jpg"],
	["ours/14/002.jpg", "blend_20/14/003.jpg"],
	["ours/59/004.jpg", "blend_20/59/005.jpg"],
	["blend_20/17/003.jpg", "ours/17/002.jpg"],
	["blend_20/74/005.jpg", "ours/74/004.jpg"],
	["ours/82/000.jpg", "blend_20/82/001.jpg"],
	["blend_20/1/001.jpg", "ours/1/000.jpg"],
	["ours/5/000.jpg", "blend_20/5/001.jpg"],
	["ours/84/002.jpg", "blend_20/84/003.jpg"],
	["blend_20/79/003.jpg", "ours/79/002.jpg"],
	["ours/83/004.jpg", "blend_20/83/005.jpg"],
	["blend_20/32/004.jpg", "ours/32/003.jpg"],
	["ours/47/002.jpg", "blend_20/47/003.jpg"],
	["ours/10/001.jpg", "blend_20/10/002.jpg"],
	["ours/88/004.jpg", "blend_20/88/005.jpg"],
	["ours/2/002.jpg", "blend_20/2/003.jpg"],
	["blend_20/53/002.jpg", "ours/53/001.jpg"],
	["ours/68/004.jpg", "blend_20/68/005.jpg"],
	["blend_20/92/002.jpg", "ours/92/001.jpg"],
	["ours/27/004.jpg", "blend_20/27/005.jpg"],
	["ours/62/003.jpg", "blend_20/62/004.jpg"],
	["blend_20/49/002.jpg", "ours/49/001.jpg"],
	["ours/98/002.jpg", "blend_20/98/003.jpg"],
	["ours/51/002.jpg", "blend_20/51/003.jpg"],
	["blend_20/33/004.jpg", "ours/33/003.jpg"],
	["blend_20/19/001.jpg", "ours/19/000.jpg"],
	["ours/57/004.jpg", "blend_20/57/005.jpg"],
	["ours/41/003.jpg", "blend_20/41/004.jpg"],
	["blend_20/78/002.jpg", "ours/78/001.jpg"],
	["ours/76/001.jpg", "blend_20/76/002.jpg"],
	["ours/52/001.jpg", "blend_20/52/002.jpg"],
	["blend_20/54/005.jpg", "ours/54/004.jpg"],
	["ours/72/002.jpg", "blend_20/72/003.jpg"],
	["blend_20/46/003.jpg", "ours/46/002.jpg"],
	["ours/18/001.jpg", "blend_20/18/002.jpg"],
	["ours/16/003.jpg", "blend_20/16/004.jpg"],
	["blend_20/35/005.jpg", "ours/35/004.jpg"],
	["blend_20/38/004.jpg", "ours/38/003.jpg"],
	["blend_20/4/005.jpg", "ours/4/004.jpg"],
	["ours/24/003.jpg", "blend_20/24/004.jpg"],
	["ours/65/000.jpg", "blend_20/65/001.jpg"],
	["ours/31/004.jpg", "blend_20/31/005.jpg"],
	["ours/6/002.jpg", "blend_20/6/003.jpg"],
	["blend_20/56/004.jpg", "ours/56/003.jpg"],
];

function getPageNum() {
    return parseInt(pageNum.innerHTML);
}
function getTrainPageNum() {
    return parseInt(pageTrainNum.innerHTML);
}
function Next() {
	var page = getPageNum();
	var pageTrain = getTrainPageNum();
	if (count <= 2*train_num){
		if (count <= train_num){
			document.getElementById("title_real_train").style.display="None";
			document.getElementById("title_gt").style.display="block";
			if (radios[0].checked == true){
				document.getElementById("answer_correct").style.display="block";
			} else{
				document.getElementById("answer_wrong").style.display="block";
			}
		} else{
			document.getElementById("answer_correct").style.display="None";
			document.getElementById("answer_wrong").style.display="None";
			document.getElementById("title_real_train").style.display="block";
			document.getElementById("title_gt").style.display="None";
			document.getElementById("test_start").style.display="block";
			document.getElementById("content").style.display="None";
		}
	} else if (count <= 2*train_num+test_num+1){
		document.getElementById("test_start").style.display="None";
		document.getElementById("content").style.display="block";
		document.getElementById("radios").style.display="block";
		if (count > 2*train_num+1){
			var obj = {
				left: radios[0].checked,
				comment: document.getElementById("text1").value
			};
			cart[(page+start_index-1).toString()] = obj;
		}
		if (count < 2*train_num+test_num+1){	
			radios[0].disabled = false;
			radios[1].disabled = false;
			document.getElementById("title_real_train").style.display="block";
			document.getElementById("page_total_count").style.display="block";
			document.getElementById("page_train_count").style.display="none";
			img.src = "../test_img/" + img_list_test[page+start_index][0];
			img1.src = "../test_img/" + img_list_test[page+start_index][1];
			pageNum.innerHTML = ++page;
			radios[0].checked = false;
			radios[1].checked = false;
			show();
			if (count == 2*train_num+test_num){
				nextbutton.innerHTML = "submit";
			}
		} else{
			var cartJson = JSON.stringify(cart);
			document.getElementById('obj').value = cartJson;
			document.getElementById('mturk_form').submit();
			//window.location = 'ending.html'
		}
	}
	document.getElementById("text1").value = "";
	count++;
	//document.getElementById("myDiv").style.display="block";
	//setTimeout("hide()", 2000);  // 5 seconds
	//location.reload();
}
function handleClick(){
	if (gup('assignmentId') == "ASSIGNMENT_ID_NOT_AVAILABLE"){
		nextbutton.disabled = true;
		nextbutton.innerHTML = "You must ACCEPT the HIT before you can submit the results.";
	}
	else{
		if (ready == true){
			nextbutton.disabled = false;
		}	
	}
}

