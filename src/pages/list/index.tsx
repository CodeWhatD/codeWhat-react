import { Fragment } from "react";

const PersonList = [
  {
    id: 1,
    name: "sobody1",
  },
  {
    id: 2,
    name: "sobody13",
  },
  {
    id: 3,
    name: "sobody14",
  },
];
const List = () => {
  return PersonList.map((item) => {
    return (
      <Fragment key={item.id}>
        {item.id}
        {item.name}
      </Fragment>
    );
  });
};
export default List;
