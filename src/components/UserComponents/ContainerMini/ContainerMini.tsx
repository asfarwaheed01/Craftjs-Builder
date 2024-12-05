import { useNode } from "@craftjs/core";

export const ContainerMini = ({ background, padding = 0, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div 
      ref={ref => connect(drag(ref))}
      style={{ 
        margin: "5px 0", 
        background, 
        padding: `${padding}px`,
        border: "1px solid black", 
        minHeight: "200px",
        width: "100%", 
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

ContainerMini.craft = {
  props: {
    background: '#ffffff',
    padding: 3
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true
  }
}