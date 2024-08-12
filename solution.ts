Here is a TypeScript console application that simulates `setInterval` using only `setTimeout`:

```typescript
class Timer {
    private timeoutId: NodeJS.Timeout | null = null;
    private startTime: number;
    private remaining: number;
    private callback: Function;

    constructor(callback: Function, delay: number) {
        this.remaining = delay;
        this.callback = callback;
        this.resume();
    }

    pause() {
        clearTimeout(this.timeoutId!);
        this.remaining -= Date.now() - this.startTime;
    }

    resume() {
        this.startTime = Date.now();
        clearTimeout(this.timeoutId!);
        this.timeoutId = setTimeout(this.callback, this.remaining);
    }
}

class Interval {
    private timer: Timer | null = null;
    private callback: Function;
    private interval: number;

    constructor(callback: Function, interval: number) {
        this.callback = callback;
        this.interval = interval;
        this.start();
    }

    start() {
        this.stop();
        const run = () => {
            this.callback();
            this.timer = new Timer(run, this.interval);
        };
        this.timer = new Timer(run, this.interval);
    }

    stop() {
        if (this.timer) {
            this.timer.pause();
            this.timer = null;
        }
    }
}

// Usage
const interval = new Interval(() => console.log('Hello World'), 1000);
setTimeout(() => interval.stop(), 5000);
```

In this code, we have two classes `Timer` and `Interval`. The `Timer` class is a simple wrapper around `setTimeout` that allows pausing and resuming the timer. The `Interval` class uses the `Timer` class to repeatedly execute a callback function at a specified interval. The `Interval` class also provides `start` and `stop` methods to start and stop the interval.