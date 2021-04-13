import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./AbstractEntity";

@Entity()
export class Booking extends BaseEntity
{
    @Property()
    firstName: string;

    @Property()
    lastName: string;

    @Property()
    email: string;

    @Property()
    booking: Date;

    constructor(firstName: string, lastName: string, email: string, booking: Date) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.booking = booking;
    }
}
