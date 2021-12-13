import createMessage from './01_extract_function_createMessage';

import textData from '../data/test/text.data.json';
import qnaData from '../data/test/qna.data.json';
import unknownData from '../data/test/unknown.data.json';

describe('01_extract_function_createMessage: 데이터 유형에 따른 메시지 생성', () => {
  test('text 유형일 때, text 프로퍼티가 포함된 메시지 반환', () => {
    const message = createMessage(
      textData.type, 
      textData.data, 
      textData.userId, 
      textData.channelId, 
      new Date(textData.now),
    );
    const expectedMessage = {
      from: textData.userId,
      to: textData.channelId,
      contentType: textData.type,
      text: textData.data,
      displayDate: '오후 4:24',
    };
    expect(message).toStrictEqual(expectedMessage);
  });

  test('qna 유형일 때, qna 프로퍼티가 포함된 메시지 반환', () => {
    const message = createMessage(
      qnaData.type, 
      qnaData.data, 
      qnaData.userId, 
      qnaData.channelId, 
      new Date(qnaData.now),
    );
    const expectedMessage = {
      from: qnaData.userId,
      to: qnaData.channelId,
      contentType: qnaData.type,
      qna: qnaData.data,
      displayDate: '오후 4:24',
    };
    expect(message).toStrictEqual(expectedMessage);
  });

  test('지원하지 않는 유형일 때, 에러 반환', () => {
    expect(() => createMessage(
      unknownData.type, 
      unknownData.data, 
      unknownData.userId, 
      unknownData.channelId, 
      new Date(unknownData.now),
    )).toThrow(`지원하지 않는 유형: ${unknownData.type}`);
  });
});