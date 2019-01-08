//All Prices To Be Changed
var priceOfScoutMonthly = 500;
var priceOfScoutQuarterly = 1000;
var priceOfScoutAnnually = 2000;
var priceOfCustomMonthly = 1000;
var priceOfCustomQuarterly = 2000;
var priceOfCustomAnnually = 4000;
var pricePerDesignerMonthly = 614;
var pricePerDesignerQuarterly = 1228;
var pricePerDesignerAnnually = 2456;
var pricePerServerMonthly = 100;
var pricePerServerQuarterly = 200;
var pricePerServerAnnually = 400;

//Initialize variables from HTML side. Includes all the different range sliders used.
var batchRange = document.getElementById("batchRange");
var immediateRange = document.getElementById("immediateRange");
var hoursRange = document.getElementById("hoursRange");
var minutesRange = document.getElementById("minutesRange");
var serverRange = document.getElementById("serverRange");
var designerRange = document.getElementById("designerRange");
var numServers = serverRange.value;
var numDesigners = designerRange.value;
var batchNum = batchRange.value;
var immediateNum = immediateRange.value;
var minutesNum = minutesRange.value;
var hoursNum = hoursRange.value;

//Global Variables for Total Price (No need to update these with prices, just here for easier access)
var serverPriceMonthly = 0;
var serverPriceQuarterly = 0;
var serverPriceAnnually = 0;
var designerPriceMonthly = 0;
var designerPriceQuarterly = 0;
var designerPriceAnnually = 0;

//Updates all the prices on initial page load
updateDesignerPrices(numDesigners);
updateServerPrices(numServers);

//Handles highlighting table rows
var highlightColor = "rgba(5, 166, 240, 0.6)";
var highlightScout = document.getElementById("tableIn");
highlightScout.rows[0].style.backgroundColor = highlightColor;
highlightScout.rows[1].style.backgroundColor = highlightColor;

//Print the value of each range slider into the output text. Default values only. Not updated here.
document.getElementById("batchNum").innerHTML = Number(batchRange.value).toLocaleString(); 
document.getElementById("immediateNum").innerHTML = Number(immediateRange.value).toLocaleString();
document.getElementById("hoursNum").innerHTML = Number(hoursRange.value).toLocaleString();
document.getElementById("minNum").innerHTML = Number(minutesRange.value).toLocaleString();
document.getElementById("serverNum").innerHTML = serverRange.value;
document.getElementById("designerNum").innerHTML = designerRange.value;

//Update the current slider value for batch range slider (each time you drag the slider handle).
batchRange.oninput = function() {

	//Print new value to corresponding html id.
	document.getElementById("batchNum").innerHTML = Number(this.value).toLocaleString();
	
	//Update prices
	var highlightScout1 = document.getElementById("tableIn").rows[0];
	var highlightScout2 = document.getElementById("tableIn").rows[1];
	var highlightCustom1 = document.getElementById("tableIn").rows[2];
	var highlightCustom2 = document.getElementById("tableIn").rows[3];

	//If range value is less than or equal to 60,000 -> highlight Scout table row and rever Custom table row
    if (this.value <= 60000) {
		highlightScout1.style.backgroundColor = highlightColor;
		highlightScout2.style.backgroundColor = highlightColor;
		highlightCustom1.style.backgroundColor = "";
		highlightCustom2.style.backgroundColor = "";
	}

	//If range value is greater than 60,0000 -> highlight Custom table row and revert Scout table row
    else {
		highlightCustom1.style.backgroundColor = highlightColor;
		highlightCustom2.style.backgroundColor = highlightColor;
		highlightScout1.style.backgroundColor = "";
		highlightScout2.style.backgroundColor = "";
    }

    windwardRecommendsPagesBatch(this.value);
}

//Update the current slider value for immediate range slider (each time you drag the slider handle).
immediateRange.oninput = function() {

	//Print new value to corresponding html id.
	document.getElementById("immediateNum").innerHTML = Number(this.value).toLocaleString();
	
	//Update prices
	var highlightScout1 = document.getElementById("tableIn").rows[0];
	var highlightScout2 = document.getElementById("tableIn").rows[1];
	var highlightCustom1 = document.getElementById("tableIn").rows[2];
	var highlightCustom2 = document.getElementById("tableIn").rows[3];

	//If range value is less than or equal to 60,000 -> highlight Scout table row and revert Custom table row
	if(this.value <= 60000) {
		highlightScout1.style.backgroundColor = highlightColor;
		highlightScout2.style.backgroundColor = highlightColor;
		highlightCustom1.style.backgroundColor = "";
		highlightCustom2.style.backgroundColor = "";
	}

	//If range value is greater than 60,0000 -> highlight Custom table row and rever Scout table row
	else {
		highlightCustom1.style.backgroundColor = highlightColor;
		highlightCustom2.style.backgroundColor = highlightColor;
		highlightScout1.style.backgroundColor = "";
		highlightScout2.style.backgroundColor = "";
    }

    windwardRecommendsPagesImmediate(this.value);
}

//Update the current slder value for hours range slider (each time you drag the slider handle).
hoursRange.oninput = function () {

	//Print new value to corresponding html id.
	var output = document.getElementById("hoursNum");
	output.innerHTML = Number(this.value).toLocaleString();
	
	//Make max slider range value for both Batch Range Slider and Immediate Range Slider equal to 5 Minutes Range Slider Current Value
	document.getElementById("batchRange").setAttribute("min", this.value);
	document.getElementById("immediateRange").setAttribute("min", this.value);
	document.getElementById("immediateBatchRangeMin").innerHTML = Number(this.value).toLocaleString();
	document.getElementById("batchNum").innerHTML = Number(this.value).toLocaleString();
	document.getElementById("immediateNum").innerHTML = Number(this.value).toLocaleString();
	
	var highlightScout1 = document.getElementById("tableIn").rows[0];
	var highlightScout2 = document.getElementById("tableIn").rows[1];
	var highlightCustom1 = document.getElementById("tableIn").rows[2];
	var highlightCustom2 = document.getElementById("tableIn").rows[3];

	//If range value is less than or equal to 60,000 -> highlight Scout table row and revert Custom table row
    if (this.value <= 60000) {
		highlightScout1.style.backgroundColor = highlightColor;
		highlightScout2.style.backgroundColor = highlightColor;
		highlightCustom1.style.backgroundColor = "";
		highlightCustom2.style.backgroundColor = "";
	}

	//If range value is greater than 60,0000 -> highlight Custom table row and revert Scout table row
	else {
		highlightCustom1.style.backgroundColor = highlightColor;
		highlightCustom2.style.backgroundColor = highlightColor;
		highlightScout1.style.backgroundColor = "";
		highlightScout2.style.backgroundColor = "";
    }

    windwardRecommendsPagesBatch(this.value);
}

//Update the current slider value for minute range slider (each time you drag the slider handle).
minutesRange.oninput = function() {

	//Print new value to corresponding html id.
	var output = document.getElementById("minNum");
	output.innerHTML = Number(this.value).toLocaleString();
	
	//Make max slider range value for both Batch Range Slider and Immediate Range Slider equal to 5 Minutes Range Slider Current Value
	document.getElementById("batchRange").setAttribute("min", this.value);
	document.getElementById("immediateRange").setAttribute("min", this.value);
	document.getElementById("immediateBatchRangeMin").innerHTML = Number(this.value).toLocaleString();
	document.getElementById("batchNum").innerHTML = Number(this.value).toLocaleString();
	document.getElementById("immediateNum").innerHTML = Number(this.value).toLocaleString();
	
	var highlightScout1 = document.getElementById("tableIn").rows[0];
	var highlightScout2 = document.getElementById("tableIn").rows[1];
	var highlightCustom1 = document.getElementById("tableIn").rows[2];
	var highlightCustom2 = document.getElementById("tableIn").rows[3];

	//If range value is less than or equal to 60,000 -> highlight Scout table row and revert Custom table row
	if(this.value <= 60000) {
		highlightScout1.style.backgroundColor = highlightColor;
		highlightScout2.style.backgroundColor = highlightColor;
        highlightCustom1.style.backgroundColor = "";
		highlightCustom2.style.backgroundColor = "";
	}

	//If range value is greater than 60,000 -> highlight Custom table row and revert Scout table row
	else {
		highlightCustom1.style.backgroundColor = highlightColor;
		highlightCustom2.style.backgroundColor = highlightColor;
		highlightScout1.style.backgroundColor = "";
		highlightScout2.style.backgroundColor = "";
    }

    windwardRecommendsPagesImmediate(this.value);
}

//Update the current slider value for server range slider (each time you drag the slider handle).
serverRange.oninput = function() {

	numServers = this.value;
	updateServerPrices(numServers);

	//Print new value to corresponding html id.
	var output = document.getElementById("serverNum");
	output.innerHTML = this.value;
}

//Update the current slider value for designer range slider (each time you drag the slider handle).
designerRange.oninput = function() {

	numDesigners = this.value; 
	updateDesignerPrices(numDesigners);

	//Print new value to corresponding html id.
	var output = document.getElementById("designerNum");
	output.innerHTML = this.value;
}

//Onload of the window, hide the batch range slider and the batch number. This way only the immediate range slider and immediate number is shown at first. Initialize any other values.
window.onload = function() { 
	document.getElementById("hoursRange").style.display = "none";
	document.getElementById("hoursSlider").style.display = "none";
	document.getElementById("batchRange").style.display = "none";
	document.getElementById("batchNum").style.display = "none";
	document.getElementById("scoutPriceMonthly").innerHTML = "$" + priceOfScoutMonthly.toLocaleString();
	document.getElementById("scoutPriceQuarterly").innerHTML = "$" + priceOfScoutQuarterly.toLocaleString();
	document.getElementById("scoutPriceAnnually").innerHTML = "$" + priceOfScoutAnnually.toLocaleString();
	document.getElementById("customPriceMonthly").innerHTML = "$" + priceOfCustomMonthly.toLocaleString();
	document.getElementById("customPriceQuarterly").innerHTML = "$" + priceOfCustomQuarterly.toLocaleString();
	document.getElementById("customPriceAnnually").innerHTML = "$" + priceOfCustomAnnually.toLocaleString();
	document.getElementById("batchRange").setAttribute("min", 5000);
	document.getElementById("immediateRange").setAttribute("min", 5000);
    document.getElementById("immediateBatchRangeMin").innerHTML = "5,000";
    windwardRecommendsPagesImmediate(immediateRange.value);
};

//Hide/Show the batch range slider and hide/show the immediate range slider.
function showDivBatch() {

	//Initialize variables from HTML side.
	var checkBatch = document.getElementById("batch");
	var batchRange = document.getElementById("batchRange");
	var immediateRange = document.getElementById("immediateRange");
	var immediateNum = document.getElementById("immediateNum");
	var batchNum = document.getElementById("batchNum");
	var hoursSlider = document.getElementById("hoursSlider");
	var hoursSliderRange = document.getElementById("hoursRange");
	var hoursSliderNum = document.getElementById("hoursNum");
	var minutesSlider = document.getElementById("minutesSlider");
	var minutesSliderRange = document.getElementById("minutesRange");

	//Depending on which radio button is checked, immediate vs batch, show the corresponding range slider and value of the range slider
	batchRange.style.display = checkBatch.checked ? "block" : "none";
	batchNum.style.display = checkBatch.checked ? "inline-block" : "none";
	immediateRange.style.display = checkBatch.checked ? "none" : "block";
	immediateNum.style.display = checkBatch.checked ? "none" : "inline-block";
	hoursSlider.style.display = checkBatch.checked ? "block" : "none";
	hoursSliderRange.style.display = checkBatch.checked ? "block" : "none";
	hoursSliderNum.style.display = checkBatch.checked ? "inline-block" : "none";
	minutesSlider.style.display = checkBatch.checked ? "none" : "block";
    minutesSliderRange.style.display = checkBatch.checked ? "none" : "block";

    if (checkBatch.checked) {
        windwardRecommendsPagesImmediate(immediateNum);
    }
    else {
        windwardRecommendsPagesBatch(batchNum);
    }
}

//Update the server prices within the table depending on current number of servers selected
function updateServerPrices(numCurServers) {
	
	//Find the table that will be getting updated
	var tableIn = document.getElementById("tableIn");
	
	//Calculate prices based on Monthly/Quarterly/Annually Prices * the current number of servers selected
	serverPriceMonthly = numCurServers * pricePerServerMonthly;
	serverPriceQuarterly = numCurServers * pricePerServerQuarterly;
	serverPriceAnnually = numCurServers * pricePerServerAnnually;
	
	//Update all table values that involved servers
	document.getElementById("serversScoutMonthly").innerHTML = "$" + serverPriceMonthly.toLocaleString();
	document.getElementById("serversScoutQuarterly").innerHTML = "$" + serverPriceQuarterly.toLocaleString();
	document.getElementById("serversScoutAnnually").innerHTML = "$" + serverPriceAnnually.toLocaleString();
	document.getElementById("serversCustomMonthly").innerHTML = "$" + serverPriceMonthly.toLocaleString();
	document.getElementById("serversCustomQuarterly").innerHTML = "$" + serverPriceQuarterly.toLocaleString();
    document.getElementById("serversCustomAnnually").innerHTML = "$" + serverPriceAnnually.toLocaleString();
    
	//Update total price of that column + row
	updateTotal();
}

//Update the designer prices within the table depending on the current number of designers selected
function updateDesignerPrices(numCurDesigner) {
	
	//Find the table that will be getting updated
	var tableIn = document.getElementById("tableIn");

	//Calculate prices based on Monthly/Quarterly/Annually Prices * the current number of designers selected
	designerPriceMonthly = numCurDesigner * pricePerDesignerMonthly;
	designerPriceQuarterly = numCurDesigner * pricePerDesignerQuarterly;
	designerPriceAnnually = numCurDesigner * pricePerDesignerAnnually;

	//Update all table values that involved designers
	document.getElementById("designersScoutMonthly").innerHTML = "$" + designerPriceMonthly.toLocaleString();
	document.getElementById("designersScoutQuarterly").innerHTML = "$" + designerPriceQuarterly.toLocaleString();
	document.getElementById("designersScoutAnnually").innerHTML = "$" + designerPriceAnnually.toLocaleString();
	document.getElementById("designersCustomMonthly").innerHTML = "$" + designerPriceMonthly.toLocaleString();
	document.getElementById("designersCustomQuarterly").innerHTML = "$" + designerPriceQuarterly.toLocaleString();
	document.getElementById("designersCustomAnnually").innerHTML = "$" + designerPriceAnnually.toLocaleString();
	
	//Update total price of that column + row
	updateTotal();
}

//Update all the total prices of each column + row
function updateTotal() {
	document.getElementById("scoutTotalMonthly").innerHTML = "$" + (designerPriceMonthly + serverPriceMonthly + priceOfScoutMonthly).toLocaleString();
	document.getElementById("scoutTotalQuarterly").innerHTML = "$" + (designerPriceQuarterly + serverPriceQuarterly + priceOfScoutQuarterly).toLocaleString();
	document.getElementById("scoutTotalAnnually").innerHTML = "$" + (designerPriceAnnually + serverPriceAnnually + priceOfScoutAnnually).toLocaleString();
	document.getElementById("customTotalMonthly").innerHTML = "$" + (designerPriceMonthly + serverPriceMonthly + priceOfCustomMonthly).toLocaleString();
	document.getElementById("customTotalQuarterly").innerHTML = "$" + (designerPriceQuarterly + serverPriceQuarterly + priceOfCustomQuarterly).toLocaleString();
	document.getElementById("customTotalAnnually").innerHTML = "$" + (designerPriceAnnually + serverPriceAnnually + priceOfCustomAnnually).toLocaleString();
	
	//Call function that determines if we have a better configuration for users selected number of designers and servers
	//windwardRecommends();
}

//Determine if there is a better configuration for users selected number of designers and servers
//Hide Windward Recommends Row if users current configuration is acceptable
/*function windwardRecommends() {
	
	//JavaScript doesn't support casting to Floats so by setting the fixed decimal places to 2,
	//I am able to make my own Float
	var num = (numServers / numDesigners).toFixed(2);

	if(num > 1.00) {
		document.getElementById("windwardRecommended").style.display = "table-row";
		document.getElementById("windwardRecommendedServers").innerHTML = 1;
		document.getElementById("windwardRecommendedDesigners").innerHTML = numDesigners;
		document.getElementById("windwardDesignerPriceMonthly").innerHTML = "$" + (numDesigners * pricePerDesignerMonthly).toLocaleString();
		document.getElementById("windwardDesignerPriceQuarterly").innerHTML = "$" + (numDesigners * pricePerDesignerQuarterly).toLocaleString();
		document.getElementById("windwardDesignerPriceAnnually").innerHTML = "$" + (numDesigners * pricePerDesignerAnnually).toLocaleString();
		document.getElementById("windwardServerPriceMonthly").innerHTML = "$" + (pricePerServerMonthly).toLocaleString();
		document.getElementById("windwardServerPriceQuarterly").innerHTML = "$" + (pricePerServerQuarterly).toLocaleString();
		document.getElementById("windwardServerPriceAnnually").innerHTML = "$" + (pricePerServerAnnually).toLocaleString();
		document.getElementById("windwardTotalPriceMonthly").innerHTML = "$" + ((numDesigners * pricePerDesignerMonthly) + pricePerServerMonthly).toLocaleString(); 
		document.getElementById("windwardTotalPriceQuarterly").innerHTML = "$" + ((numDesigners * pricePerDesignerMonthly) + pricePerServerQuarterly).toLocaleString();
		document.getElementById("windwardTotalPriceAnnually").innerHTML = "$" + ((numDesigners * pricePerDesignerAnnually) + pricePerServerAnnually).toLocaleString();
	}
	else if(num >= 0.2 || Math.floor(numDesigners / 4) == 0) {
		document.getElementById("windwardRecommended").style.display = "none";
	}
	else {
		var numServers = Math.floor(numDesigners / 4);
		
		//Only have even number of servers on server range slider so do the same thing with the recommendation
		//No odd amount of servers
		numServers % 2 == 0 ? numServers : numServers += 1;
		
		document.getElementById("windwardRecommended").style.display = "table-row";
		document.getElementById("windwardRecommendedServers").innerHTML = numServers;
		document.getElementById("windwardRecommendedDesigners").innerHTML = numServers * 4;
		document.getElementById("windwardDesignerPriceMonthly").innerHTML = "$" + (numDesigners * pricePerDesignerMonthly).toLocaleString();
		document.getElementById("windwardDesignerPriceQuarterly").innerHTML = "$" + (numDesigners * pricePerDesignerQuarterly).toLocaleString();
		document.getElementById("windwardDesignerPriceAnnually").innerHTML = "$" + (numDesigners * pricePerDesignerAnnually).toLocaleString();
		document.getElementById("windwardServerPriceMonthly").innerHTML = "$" + (numServers * pricePerServerMonthly).toLocaleString();
		document.getElementById("windwardServerPriceQuarterly").innerHTML = "$" + (numServers * pricePerServerQuarterly).toLocaleString();
		document.getElementById("windwardServerPriceAnnually").innerHTML = "$" + (numServers * pricePerServerAnnually).toLocaleString();
		document.getElementById("windwardTotalPriceMonthly").innerHTML = "$" + ((numDesigners * pricePerDesignerMonthly) + (numServers * pricePerServerMonthly)).toLocaleString();
		document.getElementById("windwardTotalPriceQuarterly").innerHTML = "$" + ((numDesigners * pricePerDesignerQuarterly) + (numServers * pricePerServerQuarterly)).toLocaleString();
		document.getElementById("windwardTotalPriceAnnually").innerHTML = "$" + ((numDesigners * pricePerDesignerAnnually) + (numServers * pricePerServerAnnually)).toLocaleString();
	}
}*/

//Display Windward Recommends Table Row with updated prices, number of servers, and number of designers
function displayWindwardRecommends(servers, designers) {
    document.getElementById("windwardRecommended").style.display = "table-row";
    document.getElementById("windwardRecommendedServers").innerHTML = servers;
    document.getElementById("windwardRecommendedDesigners").innerHTML = designers;
    document.getElementById("windwardDesignerPriceMonthly").innerHTML = "$" + (designers * pricePerDesignerMonthly).toLocaleString();
    document.getElementById("windwardDesignerPriceQuarterly").innerHTML = "$" + (designers * pricePerDesignerQuarterly).toLocaleString();
    document.getElementById("windwardDesignerPriceAnnually").innerHTML = "$" + (designers * pricePerDesignerAnnually).toLocaleString();
    document.getElementById("windwardServerPriceMonthly").innerHTML = "$" + (servers * pricePerServerMonthly).toLocaleString();
    document.getElementById("windwardServerPriceQuarterly").innerHTML = "$" + (servers * pricePerServerQuarterly).toLocaleString();
    document.getElementById("windwardServerPriceAnnually").innerHTML = "$" + (servers * pricePerServerAnnually).toLocaleString();
    document.getElementById("windwardTotalPriceMonthly").innerHTML = "$" + (servers * pricePerServerMonthly + designers * pricePerDesignerMonthly).toLocaleString();
    document.getElementById("windwardTotalPriceQuarterly").innerHTML = "$" + (servers * pricePerServerQuarterly + designers * pricePerDesignerQuarterly).toLocaleString();
    document.getElementById("windwardTotalPriceAnnually").innerHTML = "$" + (servers * pricePerServerAnnually + designers * pricePerDesignerAnnually).toLocaleString();
}

//Based off of users current selection of pages per month, determine optimal number of servers/designers
function windwardRecommendsPagesImmediate(pagesImmediate) {
    var servers = 0;
    var designers = 0;

    if (pagesImmediate <= 10000) {
        servers = 1;
        designers = 4;
    }
    else if (pagesImmediate <= 50000) {
        servers = 3;
        designers = 12;
    }
    else if (pagesImmediate <= 100000) {
        servers = 4;
        designers = 16;
    }
    else if (pagesImmediate <= 200000) {
        servers = 6;
        designers = 24;
    }
    else if (pagesImmediate <= 300000) {
        servers = 7;
        designers = 28;
    }
    else {
        servers = 10;
        designers = 40;
    }

    displayWindwardRecommends(servers, designers);
}

//Based off of users current selection of pages per month, determine optimal number of servers/designers
function windwardRecommendsPagesBatch(pagesBatch) {
    var servers = 0;
    var designers = 0;

    if (pagesBatch <= 10000) {
        servers = 1;
        designers = 2;
    }
    else if (pagesBatch <= 50000) {
        servers = 1;
        designers = 4;
    }
    else if (pagesBatch <= 100000) {
        servers = 2;
        designers = 8;
    }
    else if (pagesBatch <= 200000) {
        servers = 4;
        designers = 16;
    }
    else if (pagesBatch <= 300000) {
        servers = 6;
        designers = 24;
    }
    else {
        servers = 8;
        designers = 32;
    }

    displayWindwardRecommends(servers, designers);
}