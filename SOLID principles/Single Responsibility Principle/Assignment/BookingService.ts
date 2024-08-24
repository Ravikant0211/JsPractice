import { CustomerManagementService } from "./CustomerManagementService";
import { PaymentService } from "./PaymentService";
import { RoomAvailabilityService } from "./RoomAvailabilityService";

export class Booking {
    constructor(public id: string, public customerId: string, public roomId: string) {}
}

export class BookingService {
    bookings: Booking[] = [];

    constructor(
        private readonly roomAvailabilityService: RoomAvailabilityService,
        private readonly customerManagementService: CustomerManagementService,
        private readonly paymentService: PaymentService
    ) {}

    bookRoom(roomId: string, customerId: string, paymentDetails: any) {
        if (!this.roomAvailabilityService.checkAvailability(roomId)) {
            console.log('This room is booked!');
            return null;
        }

        if (!this.customerManagementService.getCustomerById(customerId)) {
            console.log('Customer not found!');
            return null;
        }

        if (!this.paymentService.processPayment(paymentDetails)) {
            console.log('Payment processing failed!');
            return null;
        }

        const bookingId = `B-${new Date().getTime()}`;

        const booking = new Booking(bookingId, customerId, roomId);

        this.bookings.push(booking);

        this.roomAvailabilityService.markRoomAsBooked(roomId);

        console.log('Room booked successfully!');

        return bookingId;

    } 

    getBookingDetails(bookingId: string) {
        return this.bookings.find(booking => booking.id === bookingId);
    }
}