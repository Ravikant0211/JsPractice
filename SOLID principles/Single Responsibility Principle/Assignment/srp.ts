import { BookingService } from "./BookingService";
import { Customer, CustomerManagementService } from "./CustomerManagementService";
import { FeedbackService } from "./FeedbackService";
import { PaymentService } from "./PaymentService";
import { RoomAvailabilityService } from "./RoomAvailabilityService";

const feedbackService = new FeedbackService();
const customerService = new CustomerManagementService();
const roomAvailabilityService = new RoomAvailabilityService();
const paymentService = new PaymentService();
const bookingService = new BookingService(roomAvailabilityService, customerService, paymentService);

// Regiter a customer
const customer = new Customer('C001', 'Peggy', 'peggy@gmail.com');
customerService.addCustomer(customer);

// Try to book a room

const paymentDetails = { cardNumber: '0123-4567-8910-1112', expiry: '12/26' };
const bookingId = bookingService.bookRoom('103', customer.id, paymentDetails);

if (bookingId) {
    console.log('Booking successful!');
    console.log('Booking details: ', bookingService.getBookingDetails(bookingId));
    
    // customer provides feedback
    feedbackService.addFeedback(customer.id, 'Greate service!');
    console.log('Customer feedback: ', feedbackService.getFeedbacks(customer.id));
} else {
    console.log('Booking failed!');
}