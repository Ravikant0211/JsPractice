### Definition

- The Builder pattern is a creational design pattern which allows you to create complex objects step by step.
- It separates the construction of the complex object from its representation, allowing you to create various representation using the same construction process.
- This pattern is useful specifically, when the object you are creating requires multiple building steps and can have varios configurations.

##### Example scenario: Building a custom computer

Let's suppose, you are building a custom computer. The computer has multiple components like CPU, GPU, RAM, Storage, and Power supply. Each of these components can have different configurations, and you want to construct the computer by setting each component step by step.
