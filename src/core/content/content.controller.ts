import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private service: ContentService) {}

  @Get('/')
  content() {
    return this.service.getCotent();
  }
}
