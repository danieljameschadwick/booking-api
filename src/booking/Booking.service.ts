import { MikroORM } from "@mikro-orm/core";
import { EntityManager } from "@mikro-orm/mysql";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BookingService {
    constructor(
        private readonly orm: MikroORM,
        private readonly em: EntityManager
    ) {}
}
