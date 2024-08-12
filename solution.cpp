The problem statement seems to be a bit confusing as `setTimeout` and `setInterval` are JavaScript functions and there are no direct equivalents in C++. However, we can simulate the behavior of these functions using `std::this_thread::sleep_for` and loops in C++. Here is a simple console application that demonstrates this:

```cpp
#include <iostream>
#include <thread>
#include <chrono>

void setTimeout(std::function<void()> func, int delay) {
    std::this_thread::sleep_for(std::chrono::milliseconds(delay));
    func();
}

void setInterval(std::function<void()> func, int interval) {
    while (true) {
        setTimeout(func, interval);
    }
}

int main() {
    setTimeout([]() {
        std::cout << "Timeout function executed after delay" << std::endl;
    }, 2000);

    setInterval([]() {
        std::cout << "Interval function executed repeatedly" << std::endl;
    }, 1000);

    return 0;
}
```

Please note that the `setInterval` function in this code will run indefinitely. You may want to add some condition to break the loop.