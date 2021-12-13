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
    const content = contentFor(type); // 추출한 함수 사용
    const displayDate = moment(now).tz('Asia/Seoul').format('LT');
    const message: IMessage = {
      from: userId,
      to: channelId,
      contentType: type,
      ...content,
      displayDate,
    };
    
    return message;

    function contentFor(type: string) { // 기존 switch문을 함수로 추출
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
}