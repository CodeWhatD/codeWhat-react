interface ChildProps {
  size: number;
  name: string;
  children?: any;
}
export const Children = function (
  props: ChildProps = { size: 11, name: "默认值" }
) {
  const { size, name } = props;
  return (
    <>
      <h1>子组件学习</h1>
      <span>size为 {size}</span>
      <span>Name为 {name}</span>
      {props.children.s1(name)}
      {props.children.s2()}
      {props.children.s3()}
    </>
  );
};
