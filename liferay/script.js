var queue = [];

function makeLine() {
    document.getElementById('line').innerHTML = '';
    for(var i = 0; i < queue.length; i++) {
        const ficha = document.createElement('p');
        ficha.innerHTML = queue[i].name;

        const ball = document.createElement('div');
        ball.style.borderRadius = "20px";
        ball.style.background = queue[i].color;
        ball.style.width = "25px";
        ball.style.height = "25px";
        ball.style.marginLeft = "10px";
        ball.style.textAlign = "center";
        ball.innerHTML = i+1;

        ficha.appendChild(ball);

        document.getElementById('line').appendChild(ficha);
    }
}

document.getElementById('subm').addEventListener("click", function(){
    var nameusr = document.getElementById('client_name').value;
    var colorusr = document.getElementById('client_color').value;

    // add error chance
    var element = {name: nameusr, color: colorusr};
    queue.push(element);
    makeLine();
});

document.getElementById('finish_attend').addEventListener("click", function() {
    queue.shift();
    makeLine();
});