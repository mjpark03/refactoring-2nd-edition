import {IMessage, IMessageParam} from '../data/types';
import createMessageParam from './02_inline_function_createMessageParam';
import 'moment/locale/ko';

export default function createMessage (
    type: string,
    data: string,
    userId: number,
    channelId: string,
    now: Date,
): IMessage {

    return renderObject(createMessageParam(type, data, userId, channelId, now));

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