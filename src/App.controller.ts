import { Controller, Get } from "@nestjs/common";

interface Response {
    message: string;
    statusCode: number;
}

@Controller()
export class AppController {
    @Get()
    index(): Response {
        return {
            message: "Health check passed.",
            statusCode: 200,
        };
    }
}
