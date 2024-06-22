import { useState } from "react";

/**
 * demand:
    1.一个的时候宽度固定，不管屏幕多大都占屏幕的一半。
    2.俩个的时候，各占屏幕的一半，当屏幕过小的时候两个并排展示换行。
    3.三个的时候，上面俩，下面一个，且宽度要一样。
    4.大于三个的时候，以此类推。
 */

const mockList = [
  "法定代表人",
  "对私付款转账",
  "信贷业务",
  "结算业务",
  "信贷资产转让业务",
];

export const Responsive = () => {
  const [list] = useState(mockList);
  const isOdd = list.length % 2 !== 0;
  const moreOne = list.length > 1;
  return (
    <div className={`res-container ${moreOne ? "more" : ""}`}>
      {list.map((item) => {
        return (
          <span key={item} className={`res-item ${isOdd ? "odd" : "even"}`}>
            {item}
          </span>
        );
      })}
    </div>
  );
};
