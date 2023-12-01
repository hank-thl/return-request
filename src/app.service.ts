import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 這個方法將處理來自 Controller 的數據
  processPostData(data: any): string {
    // 在這裡處理 data，例如進行一些業務邏輯或儲存到資料庫
    // 這裡我們僅將數據轉換為字符串格式

    return data;
  }
}
