window.onload = function () {
    guess();
    document.getElementById("bar").getElementsByTagName("button")[0].onclick = function () {
        guess();
    };

    /**
     * 一次剪刀石头布游戏
     */
    function guess() {
        let chooses = ['shitou', 'jiandao', 'bu'];

        //出拳
        let you = parseInt(Math.random() * 3);
        let me = parseInt(Math.random() * 3);

        let chooseElements = document.getElementsByClassName("choose");
        chooseElements[0].getElementsByTagName("img")[0].src = "../img/" + chooses[you] + ".jpg";
        chooseElements[1].getElementsByTagName("img")[0].src = "../img/" + chooses[me] + ".jpg";

        //判断谁赢了
        let winner;
        if (chooses[you] == 'shitou') {
            if (chooses[me] == 'shitou') {
                winner = 'both';
            } else if (chooses[me] == 'jiandao') {
                winner = 'you';
            } else {
                winner = 'me';
            }
        } else if (chooses[you] == 'jiandao') {
            if (chooses[me] == 'shitou') {
                winner = 'me';
            } else if (chooses[me] == 'jiandao') {
                winner = 'both';
            } else {
                winner = 'you';
            }
        } else {//you put 布
            if (chooses[me] == 'shitou') {
                winner = 'you';
            } else if (chooses[me] == 'jiandao') {
                winner = 'me';
            } else {
                winner = 'both';
            }
        }
        let winElements = document.getElementsByClassName("win");

        if (winner == 'you') {
            winElements[0].getElementsByTagName("img")[0].style.display = "inline";
            winElements[1].getElementsByTagName("img")[0].style.display = "none";
        } else if (winner == 'me') {
            winElements[1].getElementsByTagName("img")[0].style.display = "inline";
            winElements[0].getElementsByTagName("img")[0].style.display = "none";
        } else {
            //如果出的一样则重来
            guess();
        }

        //log
        console.log('you:' + chooses[you] + ", me:" + chooses[me] + ", winner:" + winner);
    }
}
