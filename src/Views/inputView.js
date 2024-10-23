import { Console } from '@woowacourse/mission-utils';

const getCarNamesInput = async () => {
  const carNames = Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ');
  return carNames;
};

export default getCarNamesInput;
