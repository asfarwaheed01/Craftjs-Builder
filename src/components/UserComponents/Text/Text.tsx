import { useNode } from "@craftjs/core";

export const Text = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        cursor: "move",
        userSelect: "none",
      }}
    >
      <h2 contentEditable suppressContentEditableWarning>
        {text}
      </h2>
    </div>
  );
};
