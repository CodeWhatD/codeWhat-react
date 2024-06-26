import { PropsWithChildren, FC } from "react";
interface ChildProps {
  size: number;
  name: string;
}
export const Children: FC<PropsWithChildren<ChildProps>> = function (
  props = { size: 11, name: "默认值" }
) {
  const { size, name, children } = props;
  return (
    <>
      <h1>子组件学习</h1>
      <span>size为 {size}</span>
      <span>Name为 {name}</span>
      {children.s1(name)}
      {children.s2()}
      {children.s3()}
    </>
  );
};
