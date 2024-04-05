let list = [];

function check() {
    if(document.getElementById('stk').checked === true) {
        return 1;
    } else {
        return 2;
    }
}

function change() {
    list = [];
}

function test() {
    document.getElementById('list').innerHTML = '';
}

function redoList() {
    test();
    for(let i = 0; i < list.length(); i++) {
        document.getElementById('list').innerHTML+=' '+list[i];
    }
}

document.getElementById('clear_ls').addEventListener("click", function() {
    document.getElementById('list').innerHTML = '';
});

document.getElementById('rem_num').addEventListener("click", function() {
    var num = document.getElementById('number').value;
    list.remove(num); // create function remove from list
    redoList();
});

document.getElementById('add_num').addEventListener("click", function() {
    var num = document.getElementById('number').value;

    list.push(num);
    
    var listT = check();
    if(listT === 1) {
        test();
        for(let i = list.length-1; i >= 0; i--) {
            document.getElementById('list').innerHTML+=' '+list[i];
        }
    } else {
        document.getElementById('list').innerHTML+=' '+num;
    }
});