

function sum(){

    
    let num_a = +document.getElementById("a_num").value;
    let num_b = +document.getElementById("b_num").value;

    var url = `http://localhost:8012/sum/?a=${num_a}&b=${num_b}"`;
    $.getJSON(url, function(json){

        document.getElementById("res").innerHTML = json.result;

    });

    document.getElementById("sign").innerHTML = "+";

}

function substract(){

    let num_a = +document.getElementById("a_num").value;
    let num_b = +document.getElementById("b_num").value;

    var url = `http://localhost:8012/subs/?a=${num_a}&b=${num_b}"`;


    
    $.getJSON(url, function(json){

        document.getElementById("res").innerHTML = json.result;

    });



    document.getElementById("sign").innerHTML = "-";

}

function multiply(){

    let num_a = +document.getElementById("a_num").value;
    let num_b = +document.getElementById("b_num").value;


    var url = `http://localhost:8012/mult/?a=${num_a}&b=${num_b}"`;
    $.getJSON(url, function(json){

        document.getElementById("res").innerHTML = json.result;

    });

    document.getElementById("sign").innerHTML = "*";

}

function division(){

    let num_a = +document.getElementById("a_num").value;
    let num_b = +document.getElementById("b_num").value;

    var url = `http://localhost:8012/div/?a=${num_a}&b=${num_b}"`;
    $.getJSON(url, function(json){

        document.getElementById("res").innerHTML = json.result;

    });

    document.getElementById("sign").innerHTML = "/";

}

function pow(){

    let num_a = +document.getElementById("a_num").value;
    let num_b = +document.getElementById("b_num").value;

    var url = `http://localhost:8012/pow/?a=${num_a}&b=${num_b}"`;
    $.getJSON(url, function(json){

        document.getElementById("res").innerHTML = json.result; 
    });
    document.getElementById("sign").innerHTML = "^";

}


const main = document.getElementById('main');

main.addEventListener('keydown', function(event){
    const isInput = event.target.nodeName == 'INPUT';
    if(!isInput){
    return;
    }

    document.getElementById("sign").innerHTML = "";
    document.getElementById("res").innerHTML = "";


    } 
)