function throll(fn,delay){
        var timer=null;
        return function(){
            clearTimeout(timer);
            timer=setTimeout(fn,delay);
        }
}