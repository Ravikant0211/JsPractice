### Definition

- The Decorator design pattern is a structural design pattern, which allows you to add new functionality
to an existing class/object without affecting the existing code.

- This pattern involves a set of decorator class that wraps the concrete component class.

- This pattern is useful when you want to extend the behavior of an existing class without affecting the 
existing code. 

##### Problem It solves

- Adding features dynamically:  Instead of creating multiples subclasses to handle different combinations of features, it allows to add these multiple features at runtime.

- Single Responsibility Principle: The core functionality of an object remains unchanged, while additional responsibilities can be separated into different decorator classes.

- Open/Closed Principle: You can extend the functionality of a class without modifying its existing code.
