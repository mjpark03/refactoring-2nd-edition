# CHAPTER 01 리팩터링: 첫 번째 예시

## 1.1 자, 시작해보자!

> 💡 책에 나오는 예제 코드 대신, 개인적으로 작성한 코드를 사용합니다.

- 01
  - [createMessage.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/01/createMessage.ts): 예제 코드
- 03
  - [createMessage.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/03/createMessage.ts): 예제 코드
  - [createMessage.test.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/03/createMessage.test.ts): 테스트 코드
- 04
  - [01_extract_function_createMessage.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/04/01_extract_function_createMessage.ts): 함수 추출하기 적용
  - [02_inline_variable_createMessage.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/04/02_inline_variable_createMessage.ts): 변수 인라인하기 적용
  - [03_extract_function_and_inline_variable_createMessage.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/04/03_extract_function_and_inline_variable_createMessage.ts): 함수 추출하기 및 변수 인라인하기 적용
  - `*.test.ts`: 변경이 적용된 각 파일의 테스트 코드
- 06
  - [01_extract_function_createMessage.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/06/01_extract_function_createMessage.ts): 결과 Object 생성 로직을 별도 함수로 추출
  - [02_separate_data_createMessage.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/06/02_separate_data_createMessage.ts): 중간 데이터 Object 생성
  - [03_separate_function_createMessageParam.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/06/03_separate_function_createMessageParam.ts): 중간 데이터 계산 및 생성 단계를 별도 함수로 추출
- 08
  - [01_move_into_class_createMessageParam.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/08/01_move_into_class_createMessageParam.ts): type에 따른 계산 로직을 클래스로 분리
  - [02_inline_function_createMessageParam.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/08/02_inline_function_createMessageParam.ts): 클래스의 함수 직접 사용하도록 인라인
  - [03_replace_with_subclasses_createMessageParam.ts](https://github.com/mjpark03/refactoring-2nd-edition/blob/main/chapter01/08/03_replace_with_subclasses_createMessageParam.ts): 서브클래스를 통한 다형성 적용
  - `*.test.ts`: 변경이 적용된 각 파일의 테스트 코드