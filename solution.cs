function mySetInterval(fn, delay) {
    function interval() {
        fn();
        setTimeout(interval, delay);
    }
    interval();
}