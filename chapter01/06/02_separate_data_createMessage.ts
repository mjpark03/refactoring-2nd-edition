import {IMessage, IMessageParam} from '../data/types';
import moment from 'moment-timezone';
import 'moment/locale/ko';

export default function createMessage (
    type: string,
    data: string,
    userId: number,
    channelId: string,
    now: Date,
): IMessage {
    const param: IMessageParam = { // 중간 데이터 생성
      userId,
      channelId,
      type,
      content: {...contentFor(type, data)},
      displayDate: inKorean(now),
    };

    return renderObject(param); // 중간 데이터를 인수로 전달

    function renderObject(param: IMessageParam): IMessage {
      const message: IMessage = {
        from: param.userId,
        to: param.channelId,
        contentType: param.type,
        ...param.content,
        displayDate: param.displayDate
      };
      
      return message;
    }

    function contentFor(type: string, data: string) {
      let result = {};
      switch(type) {
        case 'text':
          result = {
            text: data
          };
          break;
        case 'qna':
          result = {
            qna: data
          };
          break;
        default:
          throw new Error(`지원하지 않는 유형: ${type}`);
      }
      return result;
    }

    function inKorean(now: Date) {
      return moment(now).tz('Asia/Seoul').format('LT');
    }
}