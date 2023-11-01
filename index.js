
function createGraphics(name) {

    var num = document.getElementById("number").value;
    if (num <= 0 || num > 10) {
        alert("Количество составляет от 1 до 10!");
    }
    else {
        for (let i = 0; i < num; i++) {
            var div = document.createElement('div');
            div.className = name;

            var length = Math.floor(Math.random() * 191) + 10;

            if (name == 'triangle') {
                div.style.borderLeftWidth = length + 'px';
                div.style.borderRightWidth = length + 'px';
                div.style.borderBottomWidth = length + 'px';

            }
            else {
                div.style.width = length + "px";
                div.style.height = length + "px";
            }

            var randomX = Math.floor(Math.random() * 800);
            var randomY = Math.floor(Math.random() * 500);

            div.style.left = randomX + 'px';
            div.style.top = randomY + 'px';

            div.addEventListener('dblclick', function () {
                this.remove();
            })
            div.addEventListener('click', function () {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                if (name == 'triangle') {
                    this.style.borderBottomColor = color;

                }
                else
                    this.style.backgroundColor = color;
            })
            document.body.appendChild(div);
        }
    }

}








