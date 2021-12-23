import {IMessageParam} from '../data/types';
import moment from 'moment-timezone';
import 'moment/locale/ko';

class ContentGenerator { // content 생성 클래스
  type: string;
  data: string;

  constructor(type: string, data: string) {
    this.type = type;
    this.data = data;
  }

  get content() {
    let result = {};
    switch(this.type) {
      case 'text':
        result = {
          text: this.data
        };
        break;
      case 'qna':
        result = {
          qna: this.data
        };
        break;
      default:
        throw new Error(`지원하지 않는 유형: ${this.type}`);
    }
    return result;
  }
}

export default function createMessageParam (
    type: string,
    data: string,
    userId: number,
    channelId: string,
    now: Date,
): IMessageParam {
    const param: IMessageParam = {
      userId,
      channelId,
      type,
      content: {...contentFor(type, data)},
      displayDate: inKorean(now),
    };

    return param;

    function contentFor(type: string, data: string) {
      return new ContentGenerator(type, data).content // content 생성 클래스 사용
    }

    function inKorean(now: Date) {
      return moment(now).tz('Asia/Seoul').format('LT');
    }
}