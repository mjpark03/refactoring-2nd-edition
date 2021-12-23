import {IMessage, IMessageParam} from '../data/types';
import createMessageParam from './03_separate_function_createMessageParam';
import 'moment/locale/ko';

export default function createMessage (
    type: string,
    data: string,
    userId: number,
    channelId: string,
    now: Date,
): IMessage {

    return renderObject(createMessageParam(type, data, userId, channelId, now)); // 중간 데이터 계산 및 생성 함수 사용

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
}