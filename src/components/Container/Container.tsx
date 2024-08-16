import { useNode } from "@craftjs/core";

export const Container = ({ background, padding = 0, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div 
      ref={ref => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px`, border: '1px solid #000', minHeight:"100vh" }}
    >
      {children}
    </div>
  );
};

Container.craft = {
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