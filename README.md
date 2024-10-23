# javascript-racingcar-precourse

초간단 자동차 경주 게임을 구현한다.

<br/>

## **✅ 과제 진행 요구 사항 체크리스트**

- [ ]  미션은 [자동차 경주](https://github.com/woowacourse-precourse/javascript-racingcar-7) 저장소를 포크하고 클론하는 것으로 시작한다.
- [ ]  **기능을 구현하기 전 `README.md`에 구현할 기능 목록을 정리**해 추가한다.
- [ ]  Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가한다.
    - [ ]  [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.
- [ ]  자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

<br/>

## **✅** 기능 요구 사항 체크리스트 ⭐️

### 입력

1. 자동차 이름 입력 받기
- [O]  입력 메시지 ‘경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)’ 를 사용자에게 입력 받는다.
    - [O]  입력 받는 변수를 만든다.

1-1. 자동차 이름 유효성 검사
- [ ]  아래 조건에 맞도록 입력을 받는다. 
    - [ ]  자동차 이름 구분을 쉼표(,)를 기준으로 구분한다.
    - [ ]  쉼표(,)뒤에 띄어쓰기를 해도 문자만 인지한다.
    - [ ]  자동차의 이름은 5자 이하만 가능하다.
    
2. 경기 시도 횟수 입력 받기 
- [O]  입력 메세지 ‘시도할 횟수는 몇 회인가요?’  사용자에게 입력 받는다.
    - [O]  입력 받는 변수를 만든다.

2-1. 경기 시도 횟수 유효성 검사
- [ ]  아래 조건에 맞도록 입력을 받는다.
    - [ ]  사용자는 숫자만 입력해야 한다.

### 에러

- [ ]  에러메시지
    - [ ]  사용자가 잘못된 값을 입력할 경우
        - [ ]  ‘[ERROR]’로 시작하는 메시지와 함께 `Error`를 발생시킨다.
        - [ ]  애플리케이션은 종료되어야 한다.
    - [ ]  자동차 이름 입력, 횟수 이름 공통 에러
        - [ ]  사용자가 아무것도 입력하지 않은 경우
            - [ ]  “[ERROR] 아무 것도 입력하지 않으셨습니다.”
    
    - [ ]  [1] 자동차 이름 관련 에러
        - [ ]  6자 이상 입력하였을 시 에러 메시지가 출력된다.
            - [ ]  “[ERROR] 입력 글자수를 초과하였습니다. 5자 이내로 자동차 이름을 입력해주세요.”
    - [ ]  [2] 시도 횟수 관련 에러
        - [ ]  숫자가 아닌 문자로 입력하였을 경우
            - [ ]  “[ERROR] 숫자로 입력하지 않으셨습니다. 숫자를 입력해주세요.”

### 내부 기능

- [ ]  주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
    - [ ]  전진
        - [ ]  전진에 대한 변수를 배열로 구성을 하여 만든다.
        - [ ]  전진하는 조건은 0에서 9 사이에서 무작위 값을 구한다.
        - [ ]  이후, 무작위 값이 4 이상일 경우는 전진으로 한다.
    - [ ]  멈춤
        - [ ]  이후, 무작위 값이 4 미만일 경우는 멈춤으로 전진 변수에 아무 값이 들어가지 않는다.

### 출력

- [ ]  자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. (우승자는 한 명 이상일 수 있다.)
    - [ ]  최종 우승자에게는 자동차의 이름이 출력된다. (e.g. ‘최종 우승자 : pobi, jun’)
- [ ]  우승자가 한 명 인 경우
    - [ ]  출력 메시지 - ‘최종 우승자 : {winner}
- [ ]  우승자가 한 명 이상 일 때
    - [ ]  우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
    - [ ]  출력 메시지 - ‘최종 우승자 : {winner}, {winner2}

<br/>

## **✅** 프로그래밍 요구  사항 체크리스트

### **1)**

- [ ]  Node.js 20.17.0 버전에서 실행 가능해야 한다.
- [ ]  프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- [ ]  `package.json` 파일은 변경할 수 없으며, **제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.**
- [ ]  프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- [ ]  프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- [ ]  자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다. (기본적으로 [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 원칙)

### **2)**

- [ ]  indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
    - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
    - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- [ ]  3항 연산자를 쓰지 않는다.
- [ ]  함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- [ ]  Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
    - [ ]  테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
        - [Using Matchers](https://jestjs.io/docs/using-matchers)
        - [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
        - [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each)

### **라이브러리**

- [ ]  `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
    - [ ]  Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
    - [ ]  사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

### **사용 예시**

- 0에서 9까지의 정수 중 한 개의 정수 반환

```jsx
MissionUtils.Random.pickNumberInRange(0, 9);
```

<br/>

## **✅ 과제 제출 전 체크 리스트**

- [ ]  기능을 올바르게 구현했더라도 **요구 사항에 명시된 출력 형식을 따르지 않으면 0점**을 받게 된다.
- [ ]  기능 구현을 완료한 후 아래 가이드에 따라 모든 테스트가 성공적으로 실행되는지 확인한다.
- [ ]  **테스트가 실패하면 점수가 0점**이 되므로 제출하기 전에 반드시 확인한다.