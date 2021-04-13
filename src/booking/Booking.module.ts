import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { Booking } from "../entity/Booking";
import { BookingController } from "./Booking.controller";
import { BookingService } from "./Booking.service";

@Module({
    imports: [MikroOrmModule.forFeature([Booking])],
    providers: [BookingService],
    controllers: [BookingController],
})
export class BookingModule {}
