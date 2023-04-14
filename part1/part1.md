# 자바스크립트의 컨셉

## 자바스크립트는 prototype기반 객체지향 언어이다. (=객체 기반 언어이다.)

> 원본 객체가 존재하고 그 객체를 복제해서 새로운 객체를 생성하는 방법
> 자바스크립트의 모든 객체는 prototype 객체를 가지고 있고 그 prototype을 복제하면서 객체를 생성한다.

<img src ="https://velog.velcdn.com/images%2Fhuurray%2Fpost%2F7226482b-a15b-4ab3-a6b8-be37525b612d%2Fprototype.png">

- 모든 객체가 프로토타입 기반방식으로 복사되고 생성되는데 Object.prototype이 최상단에 있다.
- 프로토타입으로 이루어진 객체들의 관계를 프로토타입 체인(Prototype Chain)이라고 한다.
- Javascript에서 객체의 프로퍼티나 메서드에 접근하려고 할때 해당 객체에 존재 하지 않는다면 proto 링크를 따라 차례대로 부모 prototype 객체를 검색한다.

## var vs let, const

<!-- ## 호이스팅이란 -->

### TDZ(Temporal Dead Zone)

#### var

- 선언 - 초기화 (초기화까지 호이스팅 돼서 접근을 하면 undefined로 인식)
- 할당

#### let, const

- 선언 (여기까지 호이스팅, 즉 선언만 하고 변수에 접근을 하면 에러 발생)
- TDZ
- 초기화
- 할당

ref : https://junhobaik.github.io/js-let-cont-hoisting/
