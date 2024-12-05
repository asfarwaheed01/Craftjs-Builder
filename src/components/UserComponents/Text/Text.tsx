import { useNode } from "@craftjs/core";

export const Text = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const {text} = props;

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
