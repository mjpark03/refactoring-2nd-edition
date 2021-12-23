import {IMessageParam} from '../data/types';
import moment from 'moment-timezone';
import 'moment/locale/ko';

export default function createMessageParam ( // 중간 데이터 계산 및 생성 단계를 별도 함수로 추출
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