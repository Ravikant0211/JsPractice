export class FeedbackService {
    private feedbacks: { [key: string]: string[] } = {};

    addFeedback(customerId: string, feedback: string) {
        if (!this.feedbacks[customerId]) {
            this.feedbacks[customerId] = [];
        }
        this.feedbacks[customerId].push(feedback);
        console.log('Feedback added successfully!');
    }

    getFeedbacks(customerId: string) {
        return this.feedbacks[customerId] || [];
    }
}