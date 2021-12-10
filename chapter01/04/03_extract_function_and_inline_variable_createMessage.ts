import { IMessage } from '../data/types'
import moment from 'moment-timezone'
import 'moment/locale/ko'

export default function createMessage (
    type: string,
    data: string,
    userId: number,
    channelId: string,
    now: Date
): IMessage {
    const message: IMessage = {
      from: userId,
      to: channelId,
      contentType: type,
      ...contentFor(type),
      displayDate: inKorean(now) // 추출한 함수 사용 및 displayDate 변수 인라인
    }
    
    return message

    function contentFor(type: string) {
      let result = {}
      switch(type) {
        case 'text':
          result = {
            text: data
          }
          break
        case 'qna':
          result = {
            qna: data
          }
          break
        default:
          throw new Error(`지원하지 않는 유형: ${type}`)
      }
      return result
    }

    function inKorean(now: Date) { // 기존 날짜 포맷 변경을 함수로 추출
      return moment(now).tz('Asia/Seoul').format('LT')
    }
}