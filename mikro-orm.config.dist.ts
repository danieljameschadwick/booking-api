import { Booking } from "./src/entity/Booking";

export default {
    entities: [Booking],
    dbName: "Booking",
    type: "mysql",
    host: "localhost",
    port: 3306,
};
