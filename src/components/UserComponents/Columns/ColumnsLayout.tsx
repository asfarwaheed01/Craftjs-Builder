import { useNode, UserComponent } from "@craftjs/core";

export const ColumnLayout: UserComponent<{}> = ({ children }) => {
    const { connectors } = useNode();
  
    return (
      <div
        ref={connectors ? connectors.connect : null}
        style={{
          padding: "1rem",
          border: "1px dashed black",
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "row"
        }}
      >
        {children}
      </div>
    );
  };
  
  ColumnLayout.craft = {
    name: "ColumnLayout",
    rules: {
      canMoveIn: (selectedNode: Node) => {
        return selectedNode.data.displayName === "Column";
      }
    }
  };