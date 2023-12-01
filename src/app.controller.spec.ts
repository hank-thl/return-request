import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = app.get<AppController>(AppController);
  });

  describe('receivePost', () => {
    it('should call processPostData and return its result', () => {
      const testData = { key: 'value' };
      const expectedResult = `Processed data: ${JSON.stringify(testData)}`;

      // 模擬 AppService 的 processPostData 方法
      jest.spyOn(appService, 'processPostData').mockImplementation(() => expectedResult);

      // 調用 AppController 的 receivePost 方法
      expect(appController.receivePost(testData)).toBe(expectedResult);

      // 驗證 AppService 的 processPostData 方法是否被正確調用
      expect(appService.processPostData).toHaveBeenCalledWith(testData);
    });
  });
});

