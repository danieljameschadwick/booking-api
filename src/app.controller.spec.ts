import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./App.controller";

describe("AppController", () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [AppController],
        }).compile();
    });

    describe("getHello", () => {
        it("should return 'Hello World!'", () => {
            const appController = app.get<AppController>(AppController);
            expect(appController.index()).toBe({
                message: "Health check passed.",
                statusCode: 200,
          });
        });
    });
});
