import {IMessage} from '../data/types';
import moment from 'moment-timezone';
import 'moment/locale/ko';

export default function createMessage (
    type: string,
    data: string,
    userId: number,
    channelId: string,
    now: Date,
): IMessage {

    return renderObject(type, data, userId, channelId, now); // 결과 Object 생성 전체를 별도 함수로 추출

    function renderObject( // 결과 Object 생성 전체를 별도 함수로 추출
      type: string,
      data: string,
      userId: number,
      channelId: string,
      now: Date,
    ): IMessage {
      const message: IMessage = {
        from: userId,
        to: channelId,
        contentType: type,
        ...contentFor(type),
        displayDate: inKorean(now),
      };
      
      return message;
    }

    function contentFor(type: string) {
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