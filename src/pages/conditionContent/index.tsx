interface ConditionContentProps {
  bool: boolean;
}
const ConditionContent = (props: ConditionContentProps) => {
  const { bool } = props;
  let itemContent: unknown = "默认值";
  if (bool) {
    itemContent = <div>默认值</div>;
  }
  return <>{itemContent}</>;
};

export default ConditionContent;
