import { Icon } from "@iconify-icon/react";
export const IconifyPage = () => {
  return (
    /**
     * first: if you want to get other icon you can find icon name from iconify website and set in icon attr
     * two: through set style and width attr modify icon size
     * three: through set rotate modify rotate deg
     */
    <div>
      <Icon
        icon="iconamoon:arrow-down-6-circle-bold"
        rotate={139}
        style={{
          color: "#b85656",
          "font-size": "30px",
        }}
      ></Icon>
    </div>
  );
};
