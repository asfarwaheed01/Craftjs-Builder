import { useNode, UserComponent } from "@craftjs/core";

export const Column: UserComponent<{}> = ({ children }) => {
    const { connectors } = useNode();
  
    return (
      <div
        ref={ref =>
          connectors ? connectors.connect(connectors.drag(ref)) : null
        }
        style={{
          padding: "1rem",
          margin: "0.25rem",
          border: "1px dashed black",
          flexGrow: 1
        }}
      >
        {children}
      </div>
    );
  };
  
  Column.craft = {
    name: "Column"
  };