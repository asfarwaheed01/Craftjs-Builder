// import { useNode, UserComponent } from "@craftjs/core";

// export const Column: UserComponent<{}> = ({ children }) => {
//     const { connectors } = useNode();
  
//     return (
//       <div
//         ref={ref =>
//           connectors ? connectors.connect(connectors.drag(ref)) : null
//         }
//         style={{
//           padding: "1rem",
//           margin: "0.25rem",
//           border: "1px dashed black",
//           flexGrow: 1
//         }}
//       >
//         {children}
//       </div>
//     );
//   };
  
//   Column.craft = {
//     name: "Column"
//   };

import { useNode, UserComponent, Element } from "@craftjs/core";
import { ContainerMini } from "../ContainerMini/ContainerMini";

export const Column: UserComponent<{}> = ({ children }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{
        padding: "1rem",
        margin: "0.25rem",
        border: "1px dashed black",
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        minHeight: "100px", 
      }}
    >
      <Element
        id="top"
        is={ContainerMini}
        canvas
        style={{ flex: 1, padding: "0.5rem", border: "1px dotted blue", minHeight: "33px" }}
      >
        {children && children[0]}
      </Element>
      <Element
        id="middle"
        is={ContainerMini}
        canvas
        style={{ flex: 1, padding: "0.5rem", border: "1px dotted green", minHeight: "33px" }}
      >
        {children && children[1]}
      </Element>
      <Element
        id="bottom"
        is={ContainerMini}
        canvas
        style={{ flex: 1, padding: "0.5rem", border: "1px dotted red", minHeight: "33px" }}
      >
        {children && children[2]}
      </Element>
    </div>
  );
};

Column.craft = {
  name: "Column",
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};