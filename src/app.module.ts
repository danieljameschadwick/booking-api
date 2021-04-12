import { Module } from "@nestjs/common";
import { AppController } from "./App.controller";

@Module({
    imports: [],
    controllers: [AppController],
})
export class AppModule {}
