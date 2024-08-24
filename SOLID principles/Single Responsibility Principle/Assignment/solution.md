### Solution: Designing an Online Hotel Booking System

#### System Design

##### Room Booking

1. RoomBookingService: Manages the process of booking the rooms
2. RoomAvailabilityService: Manages room availability

##### Customer Management

1. CustomerManagementSevice: Manages customer information and profiles

##### Payment Processing

1. PaymentProcessor: Deals with the payments

##### Aditional Features

1. OfferService: Apply special offers to bookings
2. FeedbackService: Handles customer feedbacks


#### Class Responsibilities

1. BookingService: Handles room booking, ensures room is booked and interact with other services as needed.

2. RoomAvailabilityService: Checks wether the room is available for the given date

3. CustomerService: Handles customer registration, updates and retrieval

4. PaymentService: Processes payments securely.

5. OfferService: Applies special offers or discounts to a booking.

6. FeedbackService: Records and manages customer feedback.
