//https://github.com/asrezoun/webAssignThree

//problem one --> Converting kilometer to meter

function kilometerToMeter(distanceInKilo) {

    var errorMsg = "Distance can't be negative!";

    if (distanceInKilo < 0){
        return errorMsg;
    }
        

    var distanceInMeter = distanceInKilo * 1000;
    return distanceInMeter;
}

//problem two --> 

function budgetCalculator(watchQuantity, mobileQuantitiy, laptopQuantity) {

    var errorMsg = "Quantity can't be negative!";

    if (watchQuantity < 0 || mobileQuantitiy < 0 || laptopQuantity < 0) {
        return errorMsg;
    }

    var total = watchQuantity * 50 + mobileQuantitiy * 100 + laptopQuantity * 500;
    return total;
}


//problem three-->

function hotelCost(days) {

    var errorMsg = "Days can't be negative!";

    if (days < 0) {
        return errorMsg;
    }

    var total = 0;

    if (days <= 10) {
        total = days * 100;
    }
    else if (days <= 20) {
        total = 10 * 100 + (days - 10) * 80;

    }
    else {
        total = 10 * 100 + 10 * 80 + (days - 20) * 50;
    }

    return total;

}


//problem four-->

function megaFriend(friendsName) {

    var errorMsg = "No valid name!";
    totalName = friendsName.length;

    if (totalName < 1 || typeof (friendsName) != "object" || typeof (friendsName[0]) != "string") {
        return errorMsg; //checking validity.. array of string or not
    }

    var largestName = friendsName[0];
    var largestLength = friendsName[0].length;

    for (var i = 1; i < totalName; i++) {
        var temp = friendsName[i].length;

        if (temp > largestLength) {
            largestLength = temp;
            largestName = friendsName[i];
        }
    }

    return largestName;

}
