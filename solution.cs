Here is a JavaScript console application that simulates setTimeout and setInterval using only setTimeout:

```javascript
function mySetTimeout(fn, delay) {
    setTimeout(fn, delay);
}

function mySetInterval(fn, delay) {
    function interval() {
        fn();
        setTimeout(interval, delay);
    }
    interval();
}

// Test mySetTimeout
mySetTimeout(() => {
    console.log('This is a test of mySetTimeout');
}, 2000);

// Test mySetInterval
mySetInterval(() => {
    console.log('This is a test of mySetInterval');
}, 3000);
```