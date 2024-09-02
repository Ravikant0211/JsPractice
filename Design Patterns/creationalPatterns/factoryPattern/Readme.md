### Definition

- The Factory Pattern is one of the creational design patterns.

- It is used to create objects, without exposing the instantiation logic to the client.

- It refers to the newly created object through a common interface.

##### Implementation

It's implementation is really simple as following- 

- The client needs a product, but instead of creating it directly using 'new' operator, it asks
  the factory object for a new product, providing the information of the type of object it needs.

- The factory instantiate new concrete product, and return the client the newly created object 
  (casted to abstract product class or interface).

- The client uses the products as abstract products, without being aware of their concrete implementations.