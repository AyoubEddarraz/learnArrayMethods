var friends = [];
var input = document.getElementById("input") , 
    btn = document.getElementById("btn") ,
    affiche = document.getElementById("affiche") ,
    body = document.getElementById("body"),
    remove = document.getElementById("remove"),
    act = document.getElementById("act"),
    affiche2 = document.getElementById("affiche2"),
    affiche3 = document.getElementById("affiche3"),
    affiche4 = document.getElementById("affiche4"),
    affiche5 = document.getElementById("affiche5"),
    sort = document.getElementById("sort"),
    reverse = document.getElementById("reverse"),
    slice = document.getElementById("slice"),
    search = document.getElementById("search"),
    date = document.getElementById("date"),
    afficheImg = document.getElementById("afficheImg");

function actulisez () {
    body.style.background = "none";
    affiche4.style.background = "white";
    affiche5.style.background = "red";
    affiche2.innerHTML = ("In list : " + friends.length + " Element");
    affiche3.innerHTML = "";
    body.style.background = "#ecf0f1";
    affiche4.style.background = "white";
    affiche5.style.background = "red";
    affiche.innerHTML = friends;
    affiche.innerHTML = friends.join(" - ");
    date.innerHTML = "";
};

function dateInfo() {
    var mydate = new Date();
    var MystringDtae = mydate.toLocaleString();
    return MystringDtae
};

btn.onclick = function () {
    if (input.value != "") {
        var z = input.value;
        var indexElement = friends.indexOf(z);

        if (indexElement == -1) {
            friends[friends.length] = (input.value);
            affiche.innerHTML = (friends);
            affiche.innerHTML = (friends.join(" - "));
            input.value = "";
            affiche2.innerHTML = ("In list : " + friends.length + " Element");
            affiche3.innerHTML = ("Index of " + z + " is " + (friends.length - 1 ));
            body.style.background = "green";
            affiche4.style.background = "white";
            affiche5.style.background = "red";
            date.innerHTML = ("<i class='fas fa-clock' style='margin-right : 1rem'></i>" + "Tu ajouter l'element à : " + dateInfo());
        }else{
            alert("Enter the another Name " + z + " is in Array Before , index of " + z + " is " + indexElement);
            input.value = "";
        } 
    }else{
        body.style.background = "red";
        alert("The input is vide ! ")
        affiche5.style.background = "white";
        affiche4.style.background = "#2ecc71";
        date.innerHTML = "";
    };
};

remove.onclick = function () {
    var name = prompt("Enter name : ")
    var opertaion = friends.indexOf(name);
    if (opertaion == -1){
        alert("this elements is not found in Array Friends");
    }else{
        var remove = friends.splice(opertaion , 1);
        body.style.background = "green";
        affiche4.style.background = "white";
        affiche5.style.background = "red";
        actulisez();
        date.innerHTML = ("<i class='fas fa-clock' style='margin-right : 1rem'></i>" + "tu supprimer l'element à : " + dateInfo());
    }
};

sort.onclick = function () {
    friends.sort();
    affiche.innerHTML = friends.join(" - ") ;
}

reverse.onclick = function () {
    friends.reverse();
    affiche.innerHTML = friends.join(" - ") ;
}

slice.onclick = function () {
    if(friends != "") {
        friendsSlice = friends.slice(0 , 3);
        affiche.innerHTML = friendsSlice;
        affiche.innerHTML = friendsSlice.join(" - ");
        date.innerHTML = ("<i class='fas fa-clock' style='margin-right : 1rem'></i>" + "Tu slicer les element à : " + dateInfo());
    }else{
        alert("affiche part is vide , try again !!")
    }

}

search.onclick = function () {
    if (input.value != "") {
        var element = friends.indexOf(input.value);
        if (element == -1 ) {
            alert("element is not found in Array");
            input.value = "";
        }else{
            alert(input.value + " is Exsiste "+ "the index of " + input.value + " is " + element);
            affiche3.innerHTML = ("I'index of " + input.value + " is " + element);
        }
    }else{
        alert("Please enter the value input is vide !!!")
    }
}