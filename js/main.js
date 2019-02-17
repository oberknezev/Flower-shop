function calculate(){
    let sumTotal;
    let rosesQ = document.getElementById("rosesQ").value;
    let rosesPrice = document.getElementById("rosesPrice").value;
    let rosesTotal = rosesQ * rosesPrice;
    document.getElementById("rosesTotal").value = rosesTotal;

    let liliesQ = document.getElementById("liliesQ").value;
    let liliesPrice = document.getElementById("liliesPrice").value;
    let liliesTotal = liliesQ * liliesPrice;
    document.getElementById("liliesTotal").value = liliesTotal;

    let gerberQ = document.getElementById("gerberQ").value;
    let gerberPrice = document.getElementById("gerberPrice").value;
    let gerberTotal = gerberQ * gerberPrice;
    document.getElementById("gerberTotal").value = gerberTotal;

    sessionStorage.setItem("rosesQ", rosesQ);

    sumTotal = rosesTotal + liliesTotal + gerberTotal;
    document.getElementById("sumTotal").value = sumTotal;
}

