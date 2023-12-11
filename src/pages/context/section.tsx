import { ReactNode, useContext } from "react";
import SimpleContext from "./context";

type Props = {
  children: ReactNode;
};

export const Section = (props: Props) => {
  const count = useContext(SimpleContext);
  const { children } = props;
  return (
    <>
      <SimpleContext.Provider value={count + 1}>
        {children}
      </SimpleContext.Provider>
    </>
  );
};
