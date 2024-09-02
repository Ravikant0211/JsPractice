### Definition

The Dependency Inversion Principle is the last SOLID principle. It states that:

- The High-level modules should not depend on Low-Level modules. Both should depend on abstractions 
  (e. g., interfaces)

- Abstractions should not depend on details. But details should depend on abstractions.

- In simpler terms, it means that High-level class instead of depending on low-level class, both should
  depend on interfaces or abstract classes. It makes code more moduler, simpler to maintain and flexible to changes.

- The Dependency Inversion Principle encourages decoupling high-level modules from low-level modules by introducing abstractions. This makes the system more flexible, easier to maintain, and allows for easier modification or extension without affecting existing code.