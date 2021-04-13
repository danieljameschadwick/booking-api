import { Controller, Get, Post } from "@nestjs/common";
import { MikroORM } from "@mikro-orm/core";
import { Booking } from "../entity/Booking";

interface Response {
    message: string;
}

@Controller("/booking")
export class BookingController {
    constructor(
        private readonly orm: MikroORM,
    ) {}

    @Get()
    index(): Response {
        return {
            message: "Booking",
        };
    }

    @Get("test")
    test(): Response {
        return {
            message: "test",
        };
    }

    @Post("create")
    async create() {
        const booking = new Booking(
            "Daniel",
            "Chadwick",
            "daniel@chadwk.com",
            new Date(),
        );

        await this.orm.em.persistAndFlush([booking]);
        
        return {
            ...booking,
    
        };
    }
}
