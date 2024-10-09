### Definition

- The Adapter pattern is a structural design pattern, which allows two incompatible interfaces to work together.
- It is often referred to as a 'wrapper' that converts one interface to another interface that is expected by the client.

##### Understanding Adapter Pattern

Lets break down the key components of an Adapter pattern-

1. Target Interface: The interface that the client expects or works with.

2. Adaptee: The existing class or interface that needs to be adapted.

3. Adapter: A class that implements the Target interface and wrapps the Adaptee, translating a interface into the one that is expected by the client.

##### Example
Imagine you are developing an e-commerce application that needs to support multiple payment gateways like PayPal and Stripe. Each gateway has its own unique interface and methods. Using the Adapter Pattern, you can create a unified interface for your application to interact with these gateways seamlessly.