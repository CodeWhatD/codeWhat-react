import { useState } from "react";

export const PullDown = () => {
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [distanceFromTop, setDistanceFromTop] = useState("0px");
  const touchStartEvent = (evt: TouchEvent) => {
    // record start position
    setTouchStartPosition(evt.touches[0].pageY);
  };
  const touchMoving = (evt: TouchEvent) => {
    const movingDistance = evt.touches[0].pageY - touchStartPosition; // calc moving distance
    if (movingDistance <= 50) {
      setDistanceFromTop(`${movingDistance}px`);
    }
  };
  const touchEnd = () => {
    setDistanceFromTop("0px");
  };

  return (
    <div
      className="pull-down-container"
      style={{
        transform: `translateY(${distanceFromTop})`,
      }}
      onTouchStart={touchStartEvent}
      onTouchMove={touchMoving}
      onTouchEnd={touchEnd}
    >
      区域
    </div>
  );
};
