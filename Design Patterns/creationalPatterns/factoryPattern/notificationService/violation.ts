// interface INotification {
//     send(message: string): void;
// }

// class EmailNotification implements INotification {
//     send(message: string): void {
//         console.log(`Sending Email: ${message}`);
//     }
// }

// class SMSNotification implements INotification {
//     send(message: string): void {
//         console.log(`Sending SMS: ${message}`);
//     }
// }

// class PushNotification implements INotification {
//     send(message: string): void {
//         console.log(`Sending Push Notification: ${message}`);
//     }
// }

// class NotificationFactory {
//     static createNotification(type: string): INotification {
//         switch(type) {
//             case 'email': 
//                 return new EmailNotification();
//             case 'push' : 
//                 return new PushNotification();
//             case 'sms': 
//                 return new SMSNotification();
//             default: 
//                 throw new Error('Unknown notification type');
//         }
//     }
// }

// use the factory in your application
// const factory = NotificationFactory.createNotification('email');
// factory.send('Your order has been shipped!'); // Sending Email: Your order has been shipped!

// The NotificationFactory class, as written, violates the Open-Closed Principle (OCP) 
// because any time you want to add a new type of notification (e.g., a new SlackNotification), 
// you would need to modify the NotificationFactory class to add a new case statement. 
// This violates the principle that classes should be open for extension but closed for modification.