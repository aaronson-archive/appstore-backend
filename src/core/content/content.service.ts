import { Injectable } from '@nestjs/common';
import { ContentRepository } from './content.repository';

@Injectable()
export class ContentService {
  constructor(private readonly contentRepository: ContentRepository) {}

  async getCotent() {
    return this.contentRepository.getMany();
  }
}
