import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { AppController } from "./App.controller";
import { BookingController } from "./booking/Booking.controller";
import { BookingModule } from "./booking/Booking.module";

@Module({
    imports: [
        MikroOrmModule.forRoot(),
        BookingModule,
    ],
    controllers: [AppController, BookingController],
})
export class AppModule {}
