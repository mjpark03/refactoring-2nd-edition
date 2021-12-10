import { IMessage } from '../data/types'
import moment from 'moment-timezone'
import 'moment/locale/ko'

export default function createMessage (
    type: string,
    data: string,
    userId: number,
    channelId: string
): IMessage {
    let content = {}
    const now = moment()
    const displayDate = moment(now).tz('Asia/Seoul').format('LT')

    switch(type) {
        case 'text':
          content = {
            text: data
          }
          break
        case 'qna':
          content = {
            qna: data
          }
          break
    }

    const message: IMessage = {
      from: userId,
      to: channelId,
      contentType: type,
      ...content,
      displayDate
    }
    
    return message
}