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
	["ours/39/004.jpg", "content_aware/039.png"],
	["ours/88/001.jpg", "content_aware/088.png"],
	["ours/68/000.jpg", "harmonization/68/001.jpg"],
	["ours/51/002.jpg", "harmonization/51/003.jpg"],
	["blend/35/003.jpg", "ours/35/002.jpg"],
	["blend/64/001.jpg", "ours/64/000.jpg"],
	["harmonization/30/001.jpg", "ours/30/000.jpg"],
	["content_aware/035.png", "ours/35/002.jpg"],
	["ours/50/002.jpg", "blend/50/003.jpg"],
	["blend/42/003.jpg", "ours/42/002.jpg"],
	["ours/26/003.jpg", "content_aware/026.png"],
	["harmonization/65/001.jpg", "ours/65/000.jpg"],
	["ours/82/003.jpg", "content_aware/082.png"],
	["content_aware/070.png", "ours/70/001.jpg"],
	["ours/87/002.jpg", "blend/87/003.jpg"],
	["ours/1/003.jpg", "content_aware/001.png"],
	["ours/10/001.jpg", "blend/10/002.jpg"],
	["blend/18/004.jpg", "ours/18/003.jpg"],
	["blend/99/005.jpg", "ours/99/004.jpg"],
	["ours/96/001.jpg", "content_aware/096.png"],
	["content_aware/097.png", "ours/97/003.jpg"],
	["ours/53/001.jpg", "content_aware/053.png"],
	["ours/55/001.jpg", "harmonization/55/002.jpg"],
	["content_aware/023.png", "ours/23/004.jpg"],
	["ours/95/001.jpg", "content_aware/095.png"],
	["ours/89/004.jpg", "blend/89/005.jpg"],
	["ours/55/001.jpg", "blend/55/002.jpg"],
	["ours/6/004.jpg", "content_aware/006.png"],
	["blend/56/001.jpg", "ours/56/000.jpg"],
	["blend/80/005.jpg", "ours/80/004.jpg"],
	["ours/21/004.jpg", "harmonization/21/005.jpg"],
	["ours/15/002.jpg", "content_aware/015.png"],
	["harmonization/17/004.jpg", "ours/17/003.jpg"],
	["ours/7/004.jpg", "blend/7/005.jpg"],
	["ours/62/003.jpg", "content_aware/062.png"],
	["blend/28/004.jpg", "ours/28/003.jpg"],
	["ours/31/002.jpg", "harmonization/31/003.jpg"],
	["harmonization/95/002.jpg", "ours/95/001.jpg"],
	["blend/96/002.jpg", "ours/96/001.jpg"],
	["content_aware/027.png", "ours/27/003.jpg"],
	["ours/71/001.jpg", "content_aware/071.png"],
	["content_aware/019.png", "ours/19/004.jpg"],
	["harmonization/67/002.jpg", "ours/67/001.jpg"],
	["content_aware/042.png", "ours/42/002.jpg"],
	["blend/33/004.jpg", "ours/33/003.jpg"],
	["harmonization/89/005.jpg", "ours/89/004.jpg"],
	["ours/81/004.jpg", "blend/81/005.jpg"],
	["harmonization/82/004.jpg", "ours/82/003.jpg"],
	["ours/95/001.jpg", "blend/95/002.jpg"],
	["ours/14/000.jpg", "content_aware/014.png"],
	["blend/21/005.jpg", "ours/21/004.jpg"],
	["ours/47/000.jpg", "blend/47/001.jpg"],
	["ours/6/004.jpg", "blend/6/005.jpg"],
	["ours/2/001.jpg", "blend/2/002.jpg"],
	["content_aware/099.png", "ours/99/004.jpg"],
	["harmonization/47/001.jpg", "ours/47/000.jpg"],
	["harmonization/26/004.jpg", "ours/26/003.jpg"],
	["ours/54/003.jpg", "content_aware/054.png"],
	["content_aware/045.png", "ours/45/003.jpg"],
	["ours/74/004.jpg", "content_aware/074.png"],
	["harmonization/76/003.jpg", "ours/76/002.jpg"],
	["harmonization/5/001.jpg", "ours/5/000.jpg"],
	["content_aware/003.png", "ours/3/004.jpg"],
	["harmonization/32/002.jpg", "ours/32/001.jpg"],
	["harmonization/9/004.jpg", "ours/9/003.jpg"],
	["blend/53/002.jpg", "ours/53/001.jpg"],
	["ours/63/004.jpg", "harmonization/63/005.jpg"],
	["ours/98/003.jpg", "content_aware/098.png"],
	["ours/84/001.jpg", "harmonization/84/002.jpg"],
	["blend/90/005.jpg", "ours/90/004.jpg"],
	["ours/61/003.jpg", "content_aware/061.png"],
	["ours/49/003.jpg", "blend/49/004.jpg"],
	["content_aware/041.png", "ours/41/004.jpg"],
	["ours/44/004.jpg", "content_aware/044.png"],
	["content_aware/073.png", "ours/73/001.jpg"],
	["ours/20/004.jpg", "blend/20/005.jpg"],
	["harmonization/56/001.jpg", "ours/56/000.jpg"],
	["ours/97/003.jpg", "blend/97/004.jpg"],
	["content_aware/007.png", "ours/7/004.jpg"],
	["ours/29/002.jpg", "harmonization/29/003.jpg"],
	["ours/45/003.jpg", "harmonization/45/004.jpg"],
	["ours/93/002.jpg", "harmonization/93/003.jpg"],
	["ours/74/004.jpg", "blend/74/005.jpg"],
	["ours/59/000.jpg", "harmonization/59/001.jpg"],
	["blend/37/003.jpg", "ours/37/002.jpg"],
	["ours/65/000.jpg", "content_aware/065.png"],
	["harmonization/58/005.jpg", "ours/58/004.jpg"],
	["harmonization/28/004.jpg", "ours/28/003.jpg"],
	["ours/40/002.jpg", "blend/40/003.jpg"],
	["ours/1/003.jpg", "blend/1/004.jpg"],
	["harmonization/98/004.jpg", "ours/98/003.jpg"],
	["ours/81/004.jpg", "harmonization/81/005.jpg"],
	["content_aware/000.png", "ours/0/004.jpg"],
	["ours/5/000.jpg", "blend/5/001.jpg"],
	["harmonization/71/002.jpg", "ours/71/001.jpg"],
	["blend/91/005.jpg", "ours/91/004.jpg"],
	["ours/12/003.jpg", "blend/12/004.jpg"],
	["ours/3/004.jpg", "blend/3/005.jpg"],
	["harmonization/38/001.jpg", "ours/38/000.jpg"],
	["harmonization/37/003.jpg", "ours/37/002.jpg"],
	["blend/48/005.jpg", "ours/48/004.jpg"],
	["ours/44/004.jpg", "blend/44/005.jpg"],
	["content_aware/005.png", "ours/5/000.jpg"],
	["ours/48/004.jpg", "content_aware/048.png"],
	["harmonization/83/005.jpg", "ours/83/004.jpg"],
	["ours/55/001.jpg", "content_aware/055.png"],
	["blend/17/004.jpg", "ours/17/003.jpg"],
	["ours/11/002.jpg", "blend/11/003.jpg"],
	["blend/88/002.jpg", "ours/88/001.jpg"],
	["ours/83/004.jpg", "content_aware/083.png"],
	["ours/93/002.jpg", "content_aware/093.png"],
	["content_aware/084.png", "ours/84/001.jpg"],
	["ours/32/001.jpg", "blend/32/002.jpg"],
	["blend/67/002.jpg", "ours/67/001.jpg"],
	["blend/57/005.jpg", "ours/57/004.jpg"],
	["ours/25/004.jpg", "blend/25/005.jpg"],
	["harmonization/54/004.jpg", "ours/54/003.jpg"],
	["ours/94/001.jpg", "content_aware/094.png"],
	["ours/92/002.jpg", "harmonization/92/003.jpg"],
	["ours/13/003.jpg", "content_aware/013.png"],
	["ours/75/003.jpg", "harmonization/75/004.jpg"],
	["ours/22/001.jpg", "blend/22/002.jpg"],
	["blend/19/005.jpg", "ours/19/004.jpg"],
	["ours/68/000.jpg", "content_aware/068.png"],
	["ours/73/001.jpg", "harmonization/73/002.jpg"],
	["blend/65/001.jpg", "ours/65/000.jpg"],
	["ours/74/004.jpg", "harmonization/74/005.jpg"],
	["ours/87/002.jpg", "harmonization/87/003.jpg"],
	["ours/99/004.jpg", "harmonization/99/005.jpg"],
	["harmonization/3/005.jpg", "ours/3/004.jpg"],
	["harmonization/42/003.jpg", "ours/42/002.jpg"],
	["content_aware/047.png", "ours/47/000.jpg"],
	["harmonization/1/004.jpg", "ours/1/003.jpg"],
	["ours/82/003.jpg", "blend/82/004.jpg"],
	["ours/31/002.jpg", "content_aware/031.png"],
	["content_aware/078.png", "ours/78/004.jpg"],
	["content_aware/028.png", "ours/28/003.jpg"],
	["ours/2/001.jpg", "harmonization/2/002.jpg"],
	["ours/36/002.jpg", "content_aware/036.png"],
	["harmonization/52/005.jpg", "ours/52/004.jpg"],
	["ours/31/002.jpg", "blend/31/003.jpg"],
	["ours/4/001.jpg", "content_aware/004.png"],
	["content_aware/009.png", "ours/9/003.jpg"],
	["ours/15/002.jpg", "blend/15/003.jpg"],
	["ours/69/003.jpg", "content_aware/069.png"],
	["ours/91/004.jpg", "content_aware/091.png"],
	["blend/14/001.jpg", "ours/14/000.jpg"],
	["ours/49/003.jpg", "content_aware/049.png"],
	["blend/85/005.jpg", "ours/85/004.jpg"],
	["ours/79/001.jpg", "content_aware/079.png"],
	["ours/77/004.jpg", "blend/77/005.jpg"],
	["ours/30/000.jpg", "blend/30/001.jpg"],
	["content_aware/089.png", "ours/89/004.jpg"],
	["blend/9/004.jpg", "ours/9/003.jpg"],
	["ours/59/000.jpg", "content_aware/059.png"],
	["ours/50/002.jpg", "content_aware/050.png"],
	["blend/70/002.jpg", "ours/70/001.jpg"],
	["ours/62/003.jpg", "harmonization/62/004.jpg"],
	["ours/57/004.jpg", "content_aware/057.png"],
	["content_aware/072.png", "ours/72/002.jpg"],
	["ours/37/002.jpg", "content_aware/037.png"],
	["blend/45/004.jpg", "ours/45/003.jpg"],
	["harmonization/16/004.jpg", "ours/16/003.jpg"],
	["ours/86/003.jpg", "blend/86/004.jpg"],
	["blend/71/002.jpg", "ours/71/001.jpg"],
	["blend/58/005.jpg", "ours/58/004.jpg"],
	["harmonization/57/005.jpg", "ours/57/004.jpg"],
	["ours/81/004.jpg", "content_aware/081.png"],
	["blend/13/004.jpg", "ours/13/003.jpg"],
	["harmonization/36/003.jpg", "ours/36/002.jpg"],
	["content_aware/051.png", "ours/51/002.jpg"],
	["ours/41/004.jpg", "harmonization/41/005.jpg"],
	["blend/16/004.jpg", "ours/16/003.jpg"],
	["blend/23/005.jpg", "ours/23/004.jpg"],
	["blend/79/002.jpg", "ours/79/001.jpg"],
	["content_aware/032.png", "ours/32/001.jpg"],
	["harmonization/13/004.jpg", "ours/13/003.jpg"],
	["content_aware/066.png", "ours/66/001.jpg"],
	["harmonization/33/004.jpg", "ours/33/003.jpg"],
	["ours/10/001.jpg", "content_aware/010.png"],
	["harmonization/18/004.jpg", "ours/18/003.jpg"],
	["ours/87/002.jpg", "content_aware/087.png"],
	["content_aware/024.png", "ours/24/001.jpg"],
	["ours/39/004.jpg", "blend/39/005.jpg"],
	["content_aware/075.png", "ours/75/003.jpg"],
	["harmonization/94/002.jpg", "ours/94/001.jpg"],
	["ours/76/002.jpg", "content_aware/076.png"],
	["blend/54/004.jpg", "ours/54/003.jpg"],
	["content_aware/090.png", "ours/90/004.jpg"],
	["ours/43/000.jpg", "blend/43/001.jpg"],
	["blend/93/003.jpg", "ours/93/002.jpg"],
	["ours/61/003.jpg", "harmonization/61/004.jpg"],
	["ours/63/004.jpg", "content_aware/063.png"],
	["blend/60/004.jpg", "ours/60/003.jpg"],
	["harmonization/0/005.jpg", "ours/0/004.jpg"],
	["harmonization/80/005.jpg", "ours/80/004.jpg"],
	["harmonization/10/002.jpg", "ours/10/001.jpg"],
	["harmonization/24/002.jpg", "ours/24/001.jpg"],
	["blend/41/005.jpg", "ours/41/004.jpg"],
	["harmonization/77/005.jpg", "ours/77/004.jpg"],
	["ours/27/003.jpg", "blend/27/004.jpg"],
	["ours/77/004.jpg", "content_aware/077.png"],
	["harmonization/20/005.jpg", "ours/20/004.jpg"],
	["ours/33/003.jpg", "content_aware/033.png"],
	["blend/69/004.jpg", "ours/69/003.jpg"],
	["blend/68/001.jpg", "ours/68/000.jpg"],
	["ours/58/004.jpg", "content_aware/058.png"],
	["ours/96/001.jpg", "harmonization/96/002.jpg"],
	["ours/0/004.jpg", "blend/0/005.jpg"],
	["ours/27/003.jpg", "harmonization/27/004.jpg"],
	["ours/40/002.jpg", "harmonization/40/003.jpg"],
	["ours/78/004.jpg", "harmonization/78/005.jpg"],
	["harmonization/49/004.jpg", "ours/49/003.jpg"],
	["blend/61/004.jpg", "ours/61/003.jpg"],
	["content_aware/067.png", "ours/67/001.jpg"],
	["ours/92/002.jpg", "content_aware/092.png"],
	["blend/8/003.jpg", "ours/8/002.jpg"],
	["harmonization/34/005.jpg", "ours/34/004.jpg"],
	["ours/22/001.jpg", "content_aware/022.png"],
	["ours/21/004.jpg", "content_aware/021.png"],
	["ours/64/000.jpg", "harmonization/64/001.jpg"],
	["harmonization/22/002.jpg", "ours/22/001.jpg"],
	["harmonization/12/004.jpg", "ours/12/003.jpg"],
	["ours/16/003.jpg", "content_aware/016.png"],
	["content_aware/008.png", "ours/8/002.jpg"],
	["harmonization/19/005.jpg", "ours/19/004.jpg"],
	["ours/52/004.jpg", "content_aware/052.png"],
	["ours/63/004.jpg", "blend/63/005.jpg"],
	["ours/90/004.jpg", "harmonization/90/005.jpg"],
	["blend/46/001.jpg", "ours/46/000.jpg"],
	["ours/46/000.jpg", "harmonization/46/001.jpg"],
	["ours/52/004.jpg", "blend/52/005.jpg"],
	["harmonization/69/004.jpg", "ours/69/003.jpg"],
	["ours/86/003.jpg", "content_aware/086.png"],
	["ours/2/001.jpg", "content_aware/002.png"],
	["harmonization/60/004.jpg", "ours/60/003.jpg"],
	["ours/12/003.jpg", "content_aware/012.png"],
	["blend/38/001.jpg", "ours/38/000.jpg"],
	["ours/44/004.jpg", "harmonization/44/005.jpg"],
	["blend/59/001.jpg", "ours/59/000.jpg"],
	["ours/29/002.jpg", "blend/29/003.jpg"],
	["ours/15/002.jpg", "harmonization/15/003.jpg"],
	["ours/78/004.jpg", "blend/78/005.jpg"],
	["ours/56/000.jpg", "content_aware/056.png"],
	["ours/24/001.jpg", "blend/24/002.jpg"],
	["harmonization/79/002.jpg", "ours/79/001.jpg"],
	["harmonization/53/002.jpg", "ours/53/001.jpg"],
	["ours/76/002.jpg", "blend/76/003.jpg"],
	["harmonization/85/005.jpg", "ours/85/004.jpg"],
	["harmonization/25/005.jpg", "ours/25/004.jpg"],
	["blend/36/003.jpg", "ours/36/002.jpg"],
	["ours/60/003.jpg", "content_aware/060.png"],
	["ours/8/002.jpg", "harmonization/8/003.jpg"],
	["content_aware/085.png", "ours/85/004.jpg"],
	["ours/14/000.jpg", "harmonization/14/001.jpg"],
	["blend/4/002.jpg", "ours/4/001.jpg"],
	["ours/43/000.jpg", "content_aware/043.png"],
	["blend/92/003.jpg", "ours/92/002.jpg"],
	["ours/23/004.jpg", "harmonization/23/005.jpg"],
	["content_aware/040.png", "ours/40/002.jpg"],
	["blend/51/003.jpg", "ours/51/002.jpg"],
	["ours/11/002.jpg", "harmonization/11/003.jpg"],
	["ours/34/004.jpg", "blend/34/005.jpg"],
	["blend/73/002.jpg", "ours/73/001.jpg"],
	["ours/72/002.jpg", "blend/72/003.jpg"],
	["harmonization/66/002.jpg", "ours/66/001.jpg"],
	["content_aware/046.png", "ours/46/000.jpg"],
	["ours/7/004.jpg", "harmonization/7/005.jpg"],
	["blend/62/004.jpg", "ours/62/003.jpg"],
	["harmonization/70/002.jpg", "ours/70/001.jpg"],
	["blend/98/004.jpg", "ours/98/003.jpg"],
	["blend/66/002.jpg", "ours/66/001.jpg"],
	["ours/39/004.jpg", "harmonization/39/005.jpg"],
	["ours/50/002.jpg", "harmonization/50/003.jpg"],
	["ours/25/004.jpg", "content_aware/025.png"],
	["harmonization/43/001.jpg", "ours/43/000.jpg"],
	["ours/48/004.jpg", "harmonization/48/005.jpg"],
	["blend/94/002.jpg", "ours/94/001.jpg"],
	["content_aware/034.png", "ours/34/004.jpg"],
	["ours/18/003.jpg", "content_aware/018.png"],
	["ours/83/004.jpg", "blend/83/005.jpg"],
	["ours/86/003.jpg", "harmonization/86/004.jpg"],
	["ours/35/002.jpg", "harmonization/35/003.jpg"],
	["ours/11/002.jpg", "content_aware/011.png"],
	["blend/75/004.jpg", "ours/75/003.jpg"],
	["content_aware/020.png", "ours/20/004.jpg"],
	["content_aware/064.png", "ours/64/000.jpg"],
	["harmonization/4/002.jpg", "ours/4/001.jpg"],
	["content_aware/017.png", "ours/17/003.jpg"],
	["blend/26/004.jpg", "ours/26/003.jpg"],
	["ours/6/004.jpg", "harmonization/6/005.jpg"],
	["harmonization/91/005.jpg", "ours/91/004.jpg"],
	["ours/97/003.jpg", "harmonization/97/004.jpg"],
	["ours/30/000.jpg", "content_aware/030.png"],
	["ours/38/000.jpg", "content_aware/038.png"],
	["ours/88/001.jpg", "harmonization/88/002.jpg"],
	["ours/80/004.jpg", "content_aware/080.png"],
	["ours/84/001.jpg", "blend/84/002.jpg"],
	["harmonization/72/003.jpg", "ours/72/002.jpg"],
	["ours/29/002.jpg", "content_aware/029.png"],
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

