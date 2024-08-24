export class Room {
    constructor(public roomId: string, public availability: boolean) {}
}

export class RoomAvailabilityService {

    // Room creation is the responsibility of another class
    rooms: Room[] = [
        { roomId: '101', availability: true },
        { roomId: '102', availability: false },
        { roomId: '103', availability: true },
        { roomId: '104', availability: false },
        { roomId: '105', availability: true },
    ];

    checkAvailability(roomId: string) {
        const room = this.rooms.find(room => room.roomId === roomId);
        return room?.availability;
    }

    markRoomAsBooked(roomId: string) {
        const room = this.rooms.find(room => room.roomId === roomId);
        if (room) {
            room.availability = false;
        }
    }

}