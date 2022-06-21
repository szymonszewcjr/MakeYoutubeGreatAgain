// ==UserScript==
// @name         Make Youtube Great Again
// @namespace    http://youtube.com/*
// @version      0.1
// @description  makesYoutubeGreatAgain
// @author       szymonszewcjr
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @match        <$URL$>
// @icon         <$ICON$>
// @include *youtube*
// ==/UserScript==

var inline_src = (<><![CDATA[





    window.onload = mainStuff();

window.addEventListener('popstate', function (event) {
	mainStuff();
});


let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, {subtree: true, childList: true});


function onUrlChange() {
    mainStuff();
}



 function mainStuff() {

    setTimeout( () => {

const d = document;


var danePodTytulem = d.getElementById("formatted-snippet-text").innerHTML
.replaceAll(` style-target="`, "")
.replaceAll(`">`, ">")
.replaceAll(/bold/ig, "");

const crapArray = [];
let iterator = 0;

while (danePodTytulem !== "") {

    if(iterator > 10){
    break;
    }


    let stringForPushing = danePodTytulem

    .slice(danePodTytulem.indexOf("<span"), danePodTytulem.indexOf("</span>") + 7)


        crapArray[iterator] = stringForPushing;




       danePodTytulem = danePodTytulem.replace(stringForPushing, "");

        console.log(danePodTytulem);


        iterator++;


}

crapArray.pop();
let out = crapArray.join(" ");
d.getElementById("formatted-snippet-text").innerHTML = out;


d.getElementById("comment-teaser").style = "display:none";
//d.getElementById("expand-sizer").style = "display:none";
//d.getElementById("expand").style = "display:none";
d.getElementById("ellipsis").style = "display:none";

////d.getElementById("expand-sizer").style = "display:none";
////d.getElementById("expand-sizer").style = "display:none";



document.querySelector("#above-the-fold").after(document.querySelector('[target-id="engagement-panel-structured-description"]'))
document.querySelector('[target-id="engagement-panel-structured-description"]').id = "newDescription";
document.querySelector("#title-container").remove();
document.querySelector("#visibility-button").remove();


        //alert("kuwa");
document.querySelector("#content > ytd-structured-description-content-renderer").panelContentVisible = true;
document.getElementById("expander").collapsed = true
document.querySelector('[target-id="engagement-panel-structured-description"]').visibility = 'ENGAGEMENT_PANEL_VISIBILITY_EXPANDED';


  // alert("executed");
    }, 5000)}



function GetElementInsideContainer(containerID, childID) {
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}

   





]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);