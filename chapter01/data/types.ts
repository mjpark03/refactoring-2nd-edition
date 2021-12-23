
export interface IMessage {
  from: number;
  to: string;
  contentType: string;
  text?: string;
  qna?: string;
  displayDate: string;
}

export interface IMessageParam {
  userId: number;
  channelId: string;
  type: string;
  displayDate: string;
  content: object;
}