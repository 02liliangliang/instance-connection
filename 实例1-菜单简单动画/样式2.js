var changed = false;
function changeStyle(){
    if (changed == false) {
        document.getElementById("underline").classList.add('underline');
        document.getElementById("text").classList.add('text');
        changed = true;
    }else{
        document.getElementById("underline").classList.remove('underline');
        document.getElementById("text").classList.remove('text');
        changed = false;
    }

}
