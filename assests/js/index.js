function item_show(id){
    var x = document.getElementById(id);
    if(x.className.indexOf(' show') == -1)
    {
        x.className += ' show';
        x.previousElementSibling.className += ' active';
    }
    else{
        x.className = x.className.replace(' show',"");
        x.previousElementSibling.className = x.previousElementSibling.className.replace(' active',"") ;
    }
}
function btn_active(id){
    var x = document.getElementById(id);
    if(x.className.indexOf(' btn--active') == -1)
    {
        x.className += ' btn--active';
    }
    else{
        x.className = x.className.replace(' btn--active',"");
    }
}
function cmt_active(id){
    var x = document.getElementById(id);
    if(x.className.indexOf(' cmt--active') == -1)
    {
        x.className += ' cmt--active';
    }
    else{
        x.className = x.className.replace(' cmt--active',"");
    }
}