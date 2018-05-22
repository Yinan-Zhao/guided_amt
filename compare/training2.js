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
	["scene_comp/9/006.jpg", "ours/9/006.jpg"],
	["ours/24/008.jpg", "scene_comp/24/008.jpg"],
	["ours/2/008.jpg", "scene_comp/2/008.jpg"],
	["ours/44/003.jpg", "scene_comp/44/003.jpg"],
	["scene_comp/36/009.jpg", "ours/36/009.jpg"],
	["ours/11/009.jpg", "scene_comp/11/009.jpg"],
	["scene_comp/36/003.jpg", "ours/36/003.jpg"],
	["scene_comp/30/005.jpg", "ours/30/005.jpg"],
	["scene_comp/42/001.jpg", "ours/42/001.jpg"],
	["ours/18/004.jpg", "scene_comp/18/004.jpg"],
	["scene_comp/27/003.jpg", "ours/27/003.jpg"],
	["scene_comp/38/003.jpg", "ours/38/003.jpg"],
	["scene_comp/35/008.jpg", "ours/35/008.jpg"],
	["scene_comp/44/000.jpg", "ours/44/000.jpg"],
	["ours/49/003.jpg", "scene_comp/49/003.jpg"],
	["ours/20/003.jpg", "scene_comp/20/003.jpg"],
	["ours/31/007.jpg", "scene_comp/31/007.jpg"],
	["scene_comp/0/009.jpg", "ours/0/009.jpg"],
	["scene_comp/6/008.jpg", "ours/6/008.jpg"],
	["scene_comp/47/001.jpg", "ours/47/001.jpg"],
	["scene_comp/32/000.jpg", "ours/32/000.jpg"],
	["scene_comp/38/007.jpg", "ours/38/007.jpg"],
	["scene_comp/29/004.jpg", "ours/29/004.jpg"],
	["scene_comp/2/000.jpg", "ours/2/000.jpg"],
	["ours/37/009.jpg", "scene_comp/37/009.jpg"],
	["scene_comp/14/005.jpg", "ours/14/005.jpg"],
	["scene_comp/47/002.jpg", "ours/47/002.jpg"],
	["scene_comp/34/007.jpg", "ours/34/007.jpg"],
	["ours/1/004.jpg", "scene_comp/1/004.jpg"],
	["scene_comp/26/006.jpg", "ours/26/006.jpg"],
	["scene_comp/3/000.jpg", "ours/3/000.jpg"],
	["ours/10/007.jpg", "scene_comp/10/007.jpg"],
	["scene_comp/39/008.jpg", "ours/39/008.jpg"],
	["scene_comp/41/006.jpg", "ours/41/006.jpg"],
	["scene_comp/45/003.jpg", "ours/45/003.jpg"],
	["ours/32/008.jpg", "scene_comp/32/008.jpg"],
	["scene_comp/7/000.jpg", "ours/7/000.jpg"],
	["scene_comp/17/000.jpg", "ours/17/000.jpg"],
	["scene_comp/18/007.jpg", "ours/18/007.jpg"],
	["ours/7/008.jpg", "scene_comp/7/008.jpg"],
	["scene_comp/13/003.jpg", "ours/13/003.jpg"],
	["ours/19/004.jpg", "scene_comp/19/004.jpg"],
	["scene_comp/48/002.jpg", "ours/48/002.jpg"],
	["scene_comp/35/002.jpg", "ours/35/002.jpg"],
	["scene_comp/49/008.jpg", "ours/49/008.jpg"],
	["scene_comp/31/001.jpg", "ours/31/001.jpg"],
	["ours/28/008.jpg", "scene_comp/28/008.jpg"],
	["scene_comp/20/007.jpg", "ours/20/007.jpg"],
	["ours/0/002.jpg", "scene_comp/0/002.jpg"],
	["ours/27/008.jpg", "scene_comp/27/008.jpg"],
	["ours/3/004.jpg", "scene_comp/3/004.jpg"],
	["scene_comp/21/006.jpg", "ours/21/006.jpg"],
	["ours/10/002.jpg", "scene_comp/10/002.jpg"],
	["scene_comp/26/002.jpg", "ours/26/002.jpg"],
	["ours/39/001.jpg", "scene_comp/39/001.jpg"],
	["scene_comp/0/003.jpg", "ours/0/003.jpg"],
	["scene_comp/40/000.jpg", "ours/40/000.jpg"],
	["scene_comp/14/002.jpg", "ours/14/002.jpg"],
	["ours/21/001.jpg", "scene_comp/21/001.jpg"],
	["scene_comp/12/001.jpg", "ours/12/001.jpg"],
	["ours/22/008.jpg", "scene_comp/22/008.jpg"],
	["ours/35/004.jpg", "scene_comp/35/004.jpg"],
	["scene_comp/20/000.jpg", "ours/20/000.jpg"],
	["scene_comp/26/001.jpg", "ours/26/001.jpg"],
	["ours/15/008.jpg", "scene_comp/15/008.jpg"],
	["scene_comp/25/004.jpg", "ours/25/004.jpg"],
	["ours/17/008.jpg", "scene_comp/17/008.jpg"],
	["scene_comp/25/006.jpg", "ours/25/006.jpg"],
	["scene_comp/39/002.jpg", "ours/39/002.jpg"],
	["scene_comp/34/008.jpg", "ours/34/008.jpg"],
	["ours/29/005.jpg", "scene_comp/29/005.jpg"],
	["scene_comp/30/001.jpg", "ours/30/001.jpg"],
	["ours/22/004.jpg", "scene_comp/22/004.jpg"],
	["ours/31/008.jpg", "scene_comp/31/008.jpg"],
	["scene_comp/38/000.jpg", "ours/38/000.jpg"],
	["ours/43/004.jpg", "scene_comp/43/004.jpg"],
	["ours/24/006.jpg", "scene_comp/24/006.jpg"],
	["ours/30/002.jpg", "scene_comp/30/002.jpg"],
	["scene_comp/42/007.jpg", "ours/42/007.jpg"],
	["ours/2/007.jpg", "scene_comp/2/007.jpg"],
	["scene_comp/16/002.jpg", "ours/16/002.jpg"],
	["scene_comp/44/002.jpg", "ours/44/002.jpg"],
	["scene_comp/2/009.jpg", "ours/2/009.jpg"],
	["ours/36/006.jpg", "scene_comp/36/006.jpg"],
	["ours/18/009.jpg", "scene_comp/18/009.jpg"],
	["scene_comp/48/009.jpg", "ours/48/009.jpg"],
	["ours/31/003.jpg", "scene_comp/31/003.jpg"],
	["scene_comp/27/009.jpg", "ours/27/009.jpg"],
	["scene_comp/8/008.jpg", "ours/8/008.jpg"],
	["ours/26/004.jpg", "scene_comp/26/004.jpg"],
	["scene_comp/35/001.jpg", "ours/35/001.jpg"],
	["ours/0/007.jpg", "scene_comp/0/007.jpg"],
	["ours/23/006.jpg", "scene_comp/23/006.jpg"],
	["scene_comp/37/006.jpg", "ours/37/006.jpg"],
	["ours/20/009.jpg", "scene_comp/20/009.jpg"],
	["scene_comp/15/000.jpg", "ours/15/000.jpg"],
	["scene_comp/32/009.jpg", "ours/32/009.jpg"],
	["scene_comp/5/001.jpg", "ours/5/001.jpg"],
	["ours/29/000.jpg", "scene_comp/29/000.jpg"],
	["scene_comp/17/003.jpg", "ours/17/003.jpg"],
	["scene_comp/46/001.jpg", "ours/46/001.jpg"],
	["scene_comp/10/008.jpg", "ours/10/008.jpg"],
	["ours/24/003.jpg", "scene_comp/24/003.jpg"],
	["ours/30/000.jpg", "scene_comp/30/000.jpg"],
	["scene_comp/37/002.jpg", "ours/37/002.jpg"],
	["scene_comp/37/000.jpg", "ours/37/000.jpg"],
	["scene_comp/29/001.jpg", "ours/29/001.jpg"],
	["scene_comp/44/001.jpg", "ours/44/001.jpg"],
	["ours/44/004.jpg", "scene_comp/44/004.jpg"],
	["scene_comp/7/009.jpg", "ours/7/009.jpg"],
	["scene_comp/22/002.jpg", "ours/22/002.jpg"],
	["ours/10/004.jpg", "scene_comp/10/004.jpg"],
	["ours/37/001.jpg", "scene_comp/37/001.jpg"],
	["ours/4/001.jpg", "scene_comp/4/001.jpg"],
	["scene_comp/21/007.jpg", "ours/21/007.jpg"],
	["scene_comp/8/009.jpg", "ours/8/009.jpg"],
	["scene_comp/8/000.jpg", "ours/8/000.jpg"],
	["scene_comp/35/009.jpg", "ours/35/009.jpg"],
	["ours/39/005.jpg", "scene_comp/39/005.jpg"],
	["scene_comp/31/009.jpg", "ours/31/009.jpg"],
	["scene_comp/38/002.jpg", "ours/38/002.jpg"],
	["ours/24/009.jpg", "scene_comp/24/009.jpg"],
	["ours/19/009.jpg", "scene_comp/19/009.jpg"],
	["ours/38/009.jpg", "scene_comp/38/009.jpg"],
	["ours/41/005.jpg", "scene_comp/41/005.jpg"],
	["scene_comp/17/009.jpg", "ours/17/009.jpg"],
	["scene_comp/10/005.jpg", "ours/10/005.jpg"],
	["ours/21/002.jpg", "scene_comp/21/002.jpg"],
	["scene_comp/9/007.jpg", "ours/9/007.jpg"],
	["ours/3/006.jpg", "scene_comp/3/006.jpg"],
	["ours/18/001.jpg", "scene_comp/18/001.jpg"],
	["scene_comp/15/002.jpg", "ours/15/002.jpg"],
	["ours/46/003.jpg", "scene_comp/46/003.jpg"],
	["scene_comp/5/009.jpg", "ours/5/009.jpg"],
	["scene_comp/16/000.jpg", "ours/16/000.jpg"],
	["scene_comp/49/000.jpg", "ours/49/000.jpg"],
	["ours/1/005.jpg", "scene_comp/1/005.jpg"],
	["ours/5/005.jpg", "scene_comp/5/005.jpg"],
	["scene_comp/24/004.jpg", "ours/24/004.jpg"],
	["ours/34/001.jpg", "scene_comp/34/001.jpg"],
	["scene_comp/15/007.jpg", "ours/15/007.jpg"],
	["ours/36/005.jpg", "scene_comp/36/005.jpg"],
	["ours/11/000.jpg", "scene_comp/11/000.jpg"],
	["ours/39/003.jpg", "scene_comp/39/003.jpg"],
	["ours/41/008.jpg", "scene_comp/41/008.jpg"],
	["ours/22/005.jpg", "scene_comp/22/005.jpg"],
	["ours/10/001.jpg", "scene_comp/10/001.jpg"],
	["ours/38/001.jpg", "scene_comp/38/001.jpg"],
	["ours/6/001.jpg", "scene_comp/6/001.jpg"],
	["scene_comp/47/008.jpg", "ours/47/008.jpg"],
	["scene_comp/25/003.jpg", "ours/25/003.jpg"],
	["ours/9/000.jpg", "scene_comp/9/000.jpg"],
	["scene_comp/39/004.jpg", "ours/39/004.jpg"],
	["scene_comp/46/002.jpg", "ours/46/002.jpg"],
	["ours/9/002.jpg", "scene_comp/9/002.jpg"],
	["scene_comp/7/002.jpg", "ours/7/002.jpg"],
	["ours/43/002.jpg", "scene_comp/43/002.jpg"],
	["scene_comp/45/004.jpg", "ours/45/004.jpg"],
	["scene_comp/32/002.jpg", "ours/32/002.jpg"],
	["ours/5/006.jpg", "scene_comp/5/006.jpg"],
	["ours/28/002.jpg", "scene_comp/28/002.jpg"],
	["scene_comp/20/005.jpg", "ours/20/005.jpg"],
	["scene_comp/19/006.jpg", "ours/19/006.jpg"],
	["ours/15/004.jpg", "scene_comp/15/004.jpg"],
	["ours/14/008.jpg", "scene_comp/14/008.jpg"],
	["ours/3/009.jpg", "scene_comp/3/009.jpg"],
	["ours/34/000.jpg", "scene_comp/34/000.jpg"],
	["scene_comp/10/003.jpg", "ours/10/003.jpg"],
	["ours/33/000.jpg", "scene_comp/33/000.jpg"],
	["scene_comp/48/003.jpg", "ours/48/003.jpg"],
	["scene_comp/25/009.jpg", "ours/25/009.jpg"],
	["ours/13/008.jpg", "scene_comp/13/008.jpg"],
	["scene_comp/28/000.jpg", "ours/28/000.jpg"],
	["scene_comp/1/007.jpg", "ours/1/007.jpg"],
	["scene_comp/20/004.jpg", "ours/20/004.jpg"],
	["ours/46/004.jpg", "scene_comp/46/004.jpg"],
	["scene_comp/19/005.jpg", "ours/19/005.jpg"],
	["scene_comp/37/007.jpg", "ours/37/007.jpg"],
	["ours/33/007.jpg", "scene_comp/33/007.jpg"],
	["scene_comp/26/008.jpg", "ours/26/008.jpg"],
	["scene_comp/32/007.jpg", "ours/32/007.jpg"],
	["scene_comp/0/001.jpg", "ours/0/001.jpg"],
	["scene_comp/4/006.jpg", "ours/4/006.jpg"],
	["scene_comp/32/003.jpg", "ours/32/003.jpg"],
	["ours/31/005.jpg", "scene_comp/31/005.jpg"],
	["ours/21/004.jpg", "scene_comp/21/004.jpg"],
	["scene_comp/28/005.jpg", "ours/28/005.jpg"],
	["scene_comp/46/005.jpg", "ours/46/005.jpg"],
	["ours/42/002.jpg", "scene_comp/42/002.jpg"],
	["scene_comp/34/002.jpg", "ours/34/002.jpg"],
	["ours/48/004.jpg", "scene_comp/48/004.jpg"],
	["scene_comp/39/009.jpg", "ours/39/009.jpg"],
	["ours/23/000.jpg", "scene_comp/23/000.jpg"],
	["scene_comp/34/003.jpg", "ours/34/003.jpg"],
	["ours/18/008.jpg", "scene_comp/18/008.jpg"],
	["ours/22/003.jpg", "scene_comp/22/003.jpg"],
	["ours/23/004.jpg", "scene_comp/23/004.jpg"],
	["scene_comp/38/006.jpg", "ours/38/006.jpg"],
	["ours/8/006.jpg", "scene_comp/8/006.jpg"],
	["ours/44/008.jpg", "scene_comp/44/008.jpg"],
	["ours/31/006.jpg", "scene_comp/31/006.jpg"],
	["scene_comp/7/004.jpg", "ours/7/004.jpg"],
	["ours/46/009.jpg", "scene_comp/46/009.jpg"],
	["scene_comp/5/000.jpg", "ours/5/000.jpg"],
	["scene_comp/6/004.jpg", "ours/6/004.jpg"],
	["ours/7/005.jpg", "scene_comp/7/005.jpg"],
	["ours/45/009.jpg", "scene_comp/45/009.jpg"],
	["scene_comp/19/008.jpg", "ours/19/008.jpg"],
	["ours/14/004.jpg", "scene_comp/14/004.jpg"],
	["scene_comp/3/007.jpg", "ours/3/007.jpg"],
	["scene_comp/35/007.jpg", "ours/35/007.jpg"],
	["scene_comp/47/000.jpg", "ours/47/000.jpg"],
	["ours/16/008.jpg", "scene_comp/16/008.jpg"],
	["scene_comp/21/000.jpg", "ours/21/000.jpg"],
	["scene_comp/9/001.jpg", "ours/9/001.jpg"],
	["scene_comp/13/005.jpg", "ours/13/005.jpg"],
	["ours/30/008.jpg", "scene_comp/30/008.jpg"],
	["scene_comp/24/002.jpg", "ours/24/002.jpg"],
	["ours/19/003.jpg", "scene_comp/19/003.jpg"],
	["scene_comp/48/008.jpg", "ours/48/008.jpg"],
	["ours/11/004.jpg", "scene_comp/11/004.jpg"],
	["scene_comp/0/005.jpg", "ours/0/005.jpg"],
	["ours/17/005.jpg", "scene_comp/17/005.jpg"],
	["scene_comp/47/005.jpg", "ours/47/005.jpg"],
	["scene_comp/48/006.jpg", "ours/48/006.jpg"],
	["scene_comp/49/004.jpg", "ours/49/004.jpg"],
	["ours/27/002.jpg", "scene_comp/27/002.jpg"],
	["ours/9/009.jpg", "scene_comp/9/009.jpg"],
	["scene_comp/44/007.jpg", "ours/44/007.jpg"],
	["ours/34/004.jpg", "scene_comp/34/004.jpg"],
	["scene_comp/36/000.jpg", "ours/36/000.jpg"],
	["ours/10/000.jpg", "scene_comp/10/000.jpg"],
	["scene_comp/13/006.jpg", "ours/13/006.jpg"],
	["scene_comp/12/006.jpg", "ours/12/006.jpg"],
	["scene_comp/15/003.jpg", "ours/15/003.jpg"],
	["ours/18/003.jpg", "scene_comp/18/003.jpg"],
	["scene_comp/24/007.jpg", "ours/24/007.jpg"],
	["scene_comp/5/002.jpg", "ours/5/002.jpg"],
	["scene_comp/6/006.jpg", "ours/6/006.jpg"],
	["scene_comp/1/006.jpg", "ours/1/006.jpg"],
	["scene_comp/11/007.jpg", "ours/11/007.jpg"],
	["ours/7/007.jpg", "scene_comp/7/007.jpg"],
	["scene_comp/44/005.jpg", "ours/44/005.jpg"],
	["scene_comp/12/000.jpg", "ours/12/000.jpg"],
	["ours/43/003.jpg", "scene_comp/43/003.jpg"],
	["scene_comp/30/007.jpg", "ours/30/007.jpg"],
	["ours/36/004.jpg", "scene_comp/36/004.jpg"],
	["scene_comp/25/007.jpg", "ours/25/007.jpg"],
	["scene_comp/48/000.jpg", "ours/48/000.jpg"],
	["ours/5/003.jpg", "scene_comp/5/003.jpg"],
	["ours/16/005.jpg", "scene_comp/16/005.jpg"],
	["scene_comp/48/005.jpg", "ours/48/005.jpg"],
	["ours/22/001.jpg", "scene_comp/22/001.jpg"],
	["ours/28/007.jpg", "scene_comp/28/007.jpg"],
	["scene_comp/3/001.jpg", "ours/3/001.jpg"],
	["scene_comp/34/005.jpg", "ours/34/005.jpg"],
	["ours/11/006.jpg", "scene_comp/11/006.jpg"],
	["ours/1/002.jpg", "scene_comp/1/002.jpg"],
	["scene_comp/3/005.jpg", "ours/3/005.jpg"],
	["scene_comp/28/004.jpg", "ours/28/004.jpg"],
	["scene_comp/27/004.jpg", "ours/27/004.jpg"],
	["ours/43/006.jpg", "scene_comp/43/006.jpg"],
	["scene_comp/8/001.jpg", "ours/8/001.jpg"],
	["scene_comp/8/002.jpg", "ours/8/002.jpg"],
	["ours/45/000.jpg", "scene_comp/45/000.jpg"],
	["scene_comp/0/008.jpg", "ours/0/008.jpg"],
	["ours/47/003.jpg", "scene_comp/47/003.jpg"],
	["ours/25/008.jpg", "scene_comp/25/008.jpg"],
	["scene_comp/29/009.jpg", "ours/29/009.jpg"],
	["scene_comp/6/007.jpg", "ours/6/007.jpg"],
	["scene_comp/34/009.jpg", "ours/34/009.jpg"],
	["scene_comp/21/003.jpg", "ours/21/003.jpg"],
	["ours/35/005.jpg", "scene_comp/35/005.jpg"],
	["scene_comp/19/001.jpg", "ours/19/001.jpg"],
	["ours/18/002.jpg", "scene_comp/18/002.jpg"],
	["ours/36/001.jpg", "scene_comp/36/001.jpg"],
	["ours/2/005.jpg", "scene_comp/2/005.jpg"],
	["ours/11/008.jpg", "scene_comp/11/008.jpg"],
	["ours/29/008.jpg", "scene_comp/29/008.jpg"],
	["scene_comp/6/003.jpg", "ours/6/003.jpg"],
	["scene_comp/12/009.jpg", "ours/12/009.jpg"],
	["ours/23/002.jpg", "scene_comp/23/002.jpg"],
	["scene_comp/28/009.jpg", "ours/28/009.jpg"],
	["ours/5/004.jpg", "scene_comp/5/004.jpg"],
	["scene_comp/16/001.jpg", "ours/16/001.jpg"],
	["ours/38/008.jpg", "scene_comp/38/008.jpg"],
	["ours/27/007.jpg", "scene_comp/27/007.jpg"],
	["scene_comp/15/009.jpg", "ours/15/009.jpg"],
	["scene_comp/40/002.jpg", "ours/40/002.jpg"],
	["scene_comp/30/004.jpg", "ours/30/004.jpg"],
	["scene_comp/13/002.jpg", "ours/13/002.jpg"],
	["ours/23/001.jpg", "scene_comp/23/001.jpg"],
	["ours/13/009.jpg", "scene_comp/13/009.jpg"],
	["ours/8/007.jpg", "scene_comp/8/007.jpg"],
	["scene_comp/17/007.jpg", "ours/17/007.jpg"],
	["ours/45/006.jpg", "scene_comp/45/006.jpg"],
	["ours/1/001.jpg", "scene_comp/1/001.jpg"],
	["scene_comp/42/004.jpg", "ours/42/004.jpg"],
	["ours/26/000.jpg", "scene_comp/26/000.jpg"],
	["scene_comp/48/007.jpg", "ours/48/007.jpg"],
	["scene_comp/43/007.jpg", "ours/43/007.jpg"],
	["ours/27/000.jpg", "scene_comp/27/000.jpg"],
	["ours/4/000.jpg", "scene_comp/4/000.jpg"],
	["ours/27/005.jpg", "scene_comp/27/005.jpg"],
	["scene_comp/26/003.jpg", "ours/26/003.jpg"],
	["ours/22/006.jpg", "scene_comp/22/006.jpg"],
	["scene_comp/40/001.jpg", "ours/40/001.jpg"],
	["scene_comp/14/000.jpg", "ours/14/000.jpg"],
	["scene_comp/12/003.jpg", "ours/12/003.jpg"],
	["scene_comp/49/007.jpg", "ours/49/007.jpg"],
	["scene_comp/37/003.jpg", "ours/37/003.jpg"],
	["ours/17/002.jpg", "scene_comp/17/002.jpg"],
	["ours/9/005.jpg", "scene_comp/9/005.jpg"],
	["scene_comp/29/006.jpg", "ours/29/006.jpg"],
	["scene_comp/17/006.jpg", "ours/17/006.jpg"],
	["scene_comp/47/009.jpg", "ours/47/009.jpg"],
	["scene_comp/48/001.jpg", "ours/48/001.jpg"],
	["ours/2/003.jpg", "scene_comp/2/003.jpg"],
	["scene_comp/36/008.jpg", "ours/36/008.jpg"],
	["scene_comp/35/006.jpg", "ours/35/006.jpg"],
	["scene_comp/30/003.jpg", "ours/30/003.jpg"],
	["scene_comp/36/002.jpg", "ours/36/002.jpg"],
	["ours/14/006.jpg", "scene_comp/14/006.jpg"],
	["scene_comp/20/006.jpg", "ours/20/006.jpg"],
	["scene_comp/6/000.jpg", "ours/6/000.jpg"],
	["ours/24/001.jpg", "scene_comp/24/001.jpg"],
	["scene_comp/2/001.jpg", "ours/2/001.jpg"],
	["scene_comp/47/007.jpg", "ours/47/007.jpg"],
	["ours/37/005.jpg", "scene_comp/37/005.jpg"],
	["ours/11/003.jpg", "scene_comp/11/003.jpg"],
	["ours/33/006.jpg", "scene_comp/33/006.jpg"],
	["scene_comp/43/009.jpg", "ours/43/009.jpg"],
	["scene_comp/29/007.jpg", "ours/29/007.jpg"],
	["scene_comp/33/009.jpg", "ours/33/009.jpg"],
	["scene_comp/30/006.jpg", "ours/30/006.jpg"],
	["ours/23/005.jpg", "scene_comp/23/005.jpg"],
	["ours/33/001.jpg", "scene_comp/33/001.jpg"],
	["ours/32/005.jpg", "scene_comp/32/005.jpg"],
	["scene_comp/32/006.jpg", "ours/32/006.jpg"],
	["scene_comp/7/006.jpg", "ours/7/006.jpg"],
	["ours/17/001.jpg", "scene_comp/17/001.jpg"],
	["scene_comp/40/008.jpg", "ours/40/008.jpg"],
	["ours/41/003.jpg", "scene_comp/41/003.jpg"],
	["ours/46/008.jpg", "scene_comp/46/008.jpg"],
	["scene_comp/5/008.jpg", "ours/5/008.jpg"],
	["ours/41/004.jpg", "scene_comp/41/004.jpg"],
	["ours/45/008.jpg", "scene_comp/45/008.jpg"],
	["ours/33/004.jpg", "scene_comp/33/004.jpg"],
	["ours/18/000.jpg", "scene_comp/18/000.jpg"],
	["scene_comp/0/000.jpg", "ours/0/000.jpg"],
	["ours/40/007.jpg", "scene_comp/40/007.jpg"],
	["scene_comp/37/004.jpg", "ours/37/004.jpg"],
	["ours/16/007.jpg", "scene_comp/16/007.jpg"],
	["ours/46/007.jpg", "scene_comp/46/007.jpg"],
	["scene_comp/13/004.jpg", "ours/13/004.jpg"],
	["scene_comp/49/001.jpg", "ours/49/001.jpg"],
	["ours/31/004.jpg", "scene_comp/31/004.jpg"],
	["ours/28/003.jpg", "scene_comp/28/003.jpg"],
	["ours/19/007.jpg", "scene_comp/19/007.jpg"],
	["ours/20/008.jpg", "scene_comp/20/008.jpg"],
	["scene_comp/29/003.jpg", "ours/29/003.jpg"],
	["scene_comp/10/009.jpg", "ours/10/009.jpg"],
	["ours/28/001.jpg", "scene_comp/28/001.jpg"],
	["ours/4/002.jpg", "scene_comp/4/002.jpg"],
	["ours/21/008.jpg", "scene_comp/21/008.jpg"],
	["scene_comp/9/003.jpg", "ours/9/003.jpg"],
	["scene_comp/23/007.jpg", "ours/23/007.jpg"],
	["scene_comp/7/001.jpg", "ours/7/001.jpg"],
	["scene_comp/27/006.jpg", "ours/27/006.jpg"],
	["scene_comp/33/002.jpg", "ours/33/002.jpg"],
	["scene_comp/12/008.jpg", "ours/12/008.jpg"],
	["ours/42/008.jpg", "scene_comp/42/008.jpg"],
	["ours/19/002.jpg", "scene_comp/19/002.jpg"],
	["ours/49/002.jpg", "scene_comp/49/002.jpg"],
	["scene_comp/16/006.jpg", "ours/16/006.jpg"],
	["scene_comp/0/006.jpg", "ours/0/006.jpg"],
	["ours/12/005.jpg", "scene_comp/12/005.jpg"],
	["ours/40/004.jpg", "scene_comp/40/004.jpg"],
	["ours/16/004.jpg", "scene_comp/16/004.jpg"],
	["scene_comp/19/000.jpg", "ours/19/000.jpg"],
	["scene_comp/4/007.jpg", "ours/4/007.jpg"],
	["ours/49/009.jpg", "scene_comp/49/009.jpg"],
	["ours/25/005.jpg", "scene_comp/25/005.jpg"],
	["ours/17/004.jpg", "scene_comp/17/004.jpg"],
	["ours/13/001.jpg", "scene_comp/13/001.jpg"],
	["ours/4/008.jpg", "scene_comp/4/008.jpg"],
	["scene_comp/41/009.jpg", "ours/41/009.jpg"],
	["ours/42/006.jpg", "scene_comp/42/006.jpg"],
	["scene_comp/33/003.jpg", "ours/33/003.jpg"],
	["ours/42/009.jpg", "scene_comp/42/009.jpg"],
	["scene_comp/39/007.jpg", "ours/39/007.jpg"],
	["ours/25/002.jpg", "scene_comp/25/002.jpg"],
	["ours/24/000.jpg", "scene_comp/24/000.jpg"],
	["scene_comp/47/006.jpg", "ours/47/006.jpg"],
	["scene_comp/11/005.jpg", "ours/11/005.jpg"],
	["scene_comp/49/006.jpg", "ours/49/006.jpg"],
	["ours/3/003.jpg", "scene_comp/3/003.jpg"],
	["scene_comp/30/009.jpg", "ours/30/009.jpg"],
	["scene_comp/4/009.jpg", "ours/4/009.jpg"],
	["ours/40/009.jpg", "scene_comp/40/009.jpg"],
	["ours/39/006.jpg", "scene_comp/39/006.jpg"],
	["scene_comp/35/000.jpg", "ours/35/000.jpg"],
	["scene_comp/45/007.jpg", "ours/45/007.jpg"],
	["ours/18/005.jpg", "scene_comp/18/005.jpg"],
	["scene_comp/31/002.jpg", "ours/31/002.jpg"],
	["scene_comp/43/008.jpg", "ours/43/008.jpg"],
	["scene_comp/26/009.jpg", "ours/26/009.jpg"],
	["ours/26/005.jpg", "scene_comp/26/005.jpg"],
	["scene_comp/15/001.jpg", "ours/15/001.jpg"],
	["ours/21/005.jpg", "scene_comp/21/005.jpg"],
	["scene_comp/2/004.jpg", "ours/2/004.jpg"],
	["ours/43/001.jpg", "scene_comp/43/001.jpg"],
	["ours/40/006.jpg", "scene_comp/40/006.jpg"],
	["scene_comp/8/003.jpg", "ours/8/003.jpg"],
	["scene_comp/36/007.jpg", "ours/36/007.jpg"],
	["scene_comp/42/000.jpg", "ours/42/000.jpg"],
	["ours/34/006.jpg", "scene_comp/34/006.jpg"],
	["ours/42/003.jpg", "scene_comp/42/003.jpg"],
	["scene_comp/4/004.jpg", "ours/4/004.jpg"],
	["ours/27/001.jpg", "scene_comp/27/001.jpg"],
	["scene_comp/45/002.jpg", "ours/45/002.jpg"],
	["ours/3/008.jpg", "scene_comp/3/008.jpg"],
	["scene_comp/9/004.jpg", "ours/9/004.jpg"],
	["ours/12/004.jpg", "scene_comp/12/004.jpg"],
	["ours/44/006.jpg", "scene_comp/44/006.jpg"],
	["scene_comp/29/002.jpg", "ours/29/002.jpg"],
	["scene_comp/45/001.jpg", "ours/45/001.jpg"],
	["ours/38/005.jpg", "scene_comp/38/005.jpg"],
	["ours/14/009.jpg", "scene_comp/14/009.jpg"],
	["ours/11/002.jpg", "scene_comp/11/002.jpg"],
	["scene_comp/32/004.jpg", "ours/32/004.jpg"],
	["scene_comp/0/004.jpg", "ours/0/004.jpg"],
	["ours/42/005.jpg", "scene_comp/42/005.jpg"],
	["scene_comp/12/007.jpg", "ours/12/007.jpg"],
	["ours/21/009.jpg", "scene_comp/21/009.jpg"],
	["ours/6/002.jpg", "scene_comp/6/002.jpg"],
	["scene_comp/1/003.jpg", "ours/1/003.jpg"],
	["scene_comp/1/009.jpg", "ours/1/009.jpg"],
	["ours/13/007.jpg", "scene_comp/13/007.jpg"],
	["ours/9/008.jpg", "scene_comp/9/008.jpg"],
	["ours/23/008.jpg", "scene_comp/23/008.jpg"],
	["scene_comp/22/007.jpg", "ours/22/007.jpg"],
	["ours/40/005.jpg", "scene_comp/40/005.jpg"],
	["ours/3/002.jpg", "scene_comp/3/002.jpg"],
	["ours/35/003.jpg", "scene_comp/35/003.jpg"],
	["ours/15/006.jpg", "scene_comp/15/006.jpg"],
	["ours/22/000.jpg", "scene_comp/22/000.jpg"],
	["scene_comp/5/007.jpg", "ours/5/007.jpg"],
	["scene_comp/4/003.jpg", "ours/4/003.jpg"],
	["ours/40/003.jpg", "scene_comp/40/003.jpg"],
	["scene_comp/28/006.jpg", "ours/28/006.jpg"],
	["scene_comp/22/009.jpg", "ours/22/009.jpg"],
	["scene_comp/38/004.jpg", "ours/38/004.jpg"],
	["scene_comp/32/001.jpg", "ours/32/001.jpg"],
	["scene_comp/18/006.jpg", "ours/18/006.jpg"],
	["scene_comp/2/006.jpg", "ours/2/006.jpg"],
	["ours/7/003.jpg", "scene_comp/7/003.jpg"],
	["scene_comp/46/006.jpg", "ours/46/006.jpg"],
	["scene_comp/45/005.jpg", "ours/45/005.jpg"],
	["scene_comp/16/009.jpg", "ours/16/009.jpg"],
	["ours/6/005.jpg", "scene_comp/6/005.jpg"],
	["scene_comp/41/001.jpg", "ours/41/001.jpg"],
	["ours/1/000.jpg", "scene_comp/1/000.jpg"],
	["ours/47/004.jpg", "scene_comp/47/004.jpg"],
	["scene_comp/37/008.jpg", "ours/37/008.jpg"],
	["ours/24/005.jpg", "scene_comp/24/005.jpg"],
	["scene_comp/33/005.jpg", "ours/33/005.jpg"],
	["scene_comp/41/000.jpg", "ours/41/000.jpg"],
	["ours/26/007.jpg", "scene_comp/26/007.jpg"],
	["scene_comp/25/000.jpg", "ours/25/000.jpg"],
	["ours/33/008.jpg", "scene_comp/33/008.jpg"],
	["scene_comp/8/005.jpg", "ours/8/005.jpg"],
	["ours/25/001.jpg", "scene_comp/25/001.jpg"],
	["scene_comp/31/000.jpg", "ours/31/000.jpg"],
	["scene_comp/46/000.jpg", "ours/46/000.jpg"],
	["ours/23/009.jpg", "scene_comp/23/009.jpg"],
	["ours/8/004.jpg", "scene_comp/8/004.jpg"],
	["scene_comp/23/003.jpg", "ours/23/003.jpg"],
	["ours/44/009.jpg", "scene_comp/44/009.jpg"],
	["ours/10/006.jpg", "scene_comp/10/006.jpg"],
	["ours/13/000.jpg", "scene_comp/13/000.jpg"],
	["scene_comp/16/003.jpg", "ours/16/003.jpg"],
	["ours/12/002.jpg", "scene_comp/12/002.jpg"],
	["ours/41/007.jpg", "scene_comp/41/007.jpg"],
	["scene_comp/14/007.jpg", "ours/14/007.jpg"],
	["ours/11/001.jpg", "scene_comp/11/001.jpg"],
	["scene_comp/2/002.jpg", "ours/2/002.jpg"],
	["ours/43/000.jpg", "scene_comp/43/000.jpg"],
	["ours/14/001.jpg", "scene_comp/14/001.jpg"],
	["scene_comp/41/002.jpg", "ours/41/002.jpg"],
	["scene_comp/20/001.jpg", "ours/20/001.jpg"],
	["scene_comp/6/009.jpg", "ours/6/009.jpg"],
	["scene_comp/14/003.jpg", "ours/14/003.jpg"],
	["ours/20/002.jpg", "scene_comp/20/002.jpg"],
	["scene_comp/39/000.jpg", "ours/39/000.jpg"],
	["scene_comp/49/005.jpg", "ours/49/005.jpg"],
	["ours/4/005.jpg", "scene_comp/4/005.jpg"],
	["scene_comp/15/005.jpg", "ours/15/005.jpg"],
	["ours/43/005.jpg", "scene_comp/43/005.jpg"],
	["scene_comp/1/008.jpg", "ours/1/008.jpg"],
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
			img.src = "test_img/" + img_list_test[page+start_index][0];
			img1.src = "test_img/" + img_list_test[page+start_index][1];
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

