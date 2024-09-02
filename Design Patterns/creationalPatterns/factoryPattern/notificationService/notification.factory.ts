interface INotification {
  send(message: string): void;
}

type NotificationConstructor = new () => INotification;

class NotificationRegistry {
  private static registry: Map<string, NotificationConstructor> = new Map();

  static register(type: string, constructor: NotificationConstructor): void {
    this.registry.set(type, constructor);
  }

  static createNotification(type: string): INotification {
    const constructor = this.registry.get(type);

    if (!constructor) {
        throw new Error(`Notification type: ${type}, is not registered`);
    }

    return new constructor();
  }
}

class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotification implements INotification {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Push Notification: ${message}`);
  }
}

// Adding Slack notification
class SlackNotification implements INotification {
    send(message: string): void {
        console.log(`Sending Slack Notification: ${message}`);
    }
}

// register notification types
NotificationRegistry.register('email', EmailNotification);
NotificationRegistry.register('sms', SMSNotification);
NotificationRegistry.register('push', PushNotification);
NotificationRegistry.register('slack', SlackNotification);


// Use the NotificationRegistry in your application
const notification1 = NotificationRegistry.createNotification('email');
notification1.send("Your order has been shipped!"); // Sending Email: Your order has been shipped!

const notification2 = NotificationRegistry.createNotification('slack');
notification2.send("Your order has been shipped!"); // Sending Slack Notification: Your order has been shipped!


// Advantages of this approach:

// 1. Open for Extension and Closed for Modification: The 'NotificationRegistry' class doesn't need to be
//    modified when adding new Notification type, adhering to OCP principle

// 2. Flexibility: You can register different types of Notifications dynamically, making code more flexible
//    and easier to extend.

// 3. Decoupling: The notification creation logic is decoupled from the factory, making the code more modular.