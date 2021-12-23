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
}

class TextGenerator extends ContentGenerator { // text 유형을 위한 서브클래스
  get content() {
    return {
      text: this.data
    };
  }
}

class QnaGenerator extends ContentGenerator { // qna 유형을 위한 서브클래스
  get content() {
    return {
      qna: this.data
    };
  }
}

function createContentGenerator(type: string, data: string) { // 팩터리 함수
  switch(type) {
    case 'text':
      return new TextGenerator(type, data);
    case 'qna': 
      return new QnaGenerator(type, data);
    default:
      throw new Error(`지원하지 않는 유형: ${type}`);
  }
}

export default function createMessageParam (
    type: string,
    data: string,
    userId: number,
    channelId: string,
    now: Date,
): IMessageParam {
    const generator = createContentGenerator(type, data); // 팩터리 함수를 통해 서브클래스 인스턴스 반환
    const param: IMessageParam = {
      userId,
      channelId,
      type,
      content: {...generator.content},
      displayDate: inKorean(now),
    };

    return param;

    function inKorean(now: Date) {
      return moment(now).tz('Asia/Seoul').format('LT');
    }
}