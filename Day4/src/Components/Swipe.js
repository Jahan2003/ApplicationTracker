import { useSwipeable } from "react-swipeable";
import Sidebar from "./Sidebar";
import "../Assets/Styles/Sidebar.css";
import React from "react";
const swipeOpenMenuStyles = {
    float: "right",
    position: "fixed",
    width: "10%",
    height: "100%",
  };

function Swipe(){
    const [isOpen, setOpen] = React.useState(false);
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true)
  });
  return(
      <div id="swipe">
      <div {...handlers} style={swipeOpenMenuStyles} />
      <Sidebar
        isOpen={isOpen}
        onStateChange={(s) => setOpen(s.isOpen)}
        pageWrapId={"page-wrap"}
        outerContainerId={"swipe"}
        />
        </div>
  )
}
export default Swipe;