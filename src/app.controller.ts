import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('post')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  receivePost(@Body() postData: any): string {
    // 使用 Service 層的方法處理數據
    return this.appService.processPostData(postData);
  }
}
