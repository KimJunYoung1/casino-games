import React from "react";
import Card123 from "./Card123";

const Card = ({ num }) => {
  let oneToThree = [1, 2, 3, 14, 15, 16, 27, 28, 29, 40, 41, 42].includes(num);
  if (oneToThree) {
    return <Card123 num={num} />;
  }
};

// export default Card;

// 푸드코드 주문

// id 가 여기 속해있으면 123 카드는 해당 어레이로 검사해서 123을 렌더

// [1 ,2, 3,14, 15, 16,30 ,31 ,32,36 ,37 ,38].includes(num)

// 여기가 각 매장

// 31이네?
// 그럼 31은

// 다이아 2야

// 그러면 카드 123 에다가 31 을 주면 다이아2 가 나와야해

// 그러면 31을 다이아 2로 바꾸는 로직은

// 카드123이 들고있으면돼
