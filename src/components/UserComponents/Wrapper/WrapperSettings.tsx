import { useNode } from '@craftjs/core';
import { iWrapperProps } from '../../../interfaces/wrapper.interface';

export const WrapperSettings = () => {
  const { actions: { setProp }, background, padding, margin } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    margin: node.data.props.margin,
  }));

  return (
    <div>
      <h2>Wrapper Settings</h2>
      <div>
        <label>Background Color</label>
        <input
          type="color"
          value={background}
          onChange={(e) => setProp((props: iWrapperProps) => (props.background = e.target.value))}
        />
      </div>
      <div>
        <label>Padding (px)</label>
        <input
          type="number"
          value={padding}
          onChange={(e) => setProp((props: iWrapperProps) => (props.padding = parseInt(e.target.value, 10)))}
        />
      </div>
      <div>
        <label>Margin (px)</label>
        <input
          type="number"
          value={margin}
          onChange={(e) => setProp((props: iWrapperProps) => (props.margin = parseInt(e.target.value, 10)))}
        />
      </div>
    </div>
  );
};