import { useNode, UserComponent, Element } from '@craftjs/core';
import { Resizable, ResizableProps } from 're-resizable';
import { WrapperSettings } from './WrapperSettings';
import { ContainerMini } from '../ContainerMini/ContainerMini';
import { iWrapperProps } from '../../../interfaces/wrapper.interface';

export const Wrapper: UserComponent<iWrapperProps> = ({
  background,
//   padding,
  margin,
  children
}) => {
  const { connectors: { connect, drag } } = useNode();

  const resizableProps: ResizableProps = {
    defaultSize: {
      width: '100%',
      height: 'auto',
    },
    minHeight: 50,
    minWidth: 100,
    maxWidth: '100%',
    enable: {
      top: true,
      right: true,
      bottom: true,
      left: true,
      topRight: true,
      bottomRight: true,
      bottomLeft: true,
      topLeft: true,
    },
  };

  return (
    <Resizable
      {...resizableProps}
      style={{
        background,
        // padding: `${padding}px`,
        margin: `${margin}px`,
        // border: '1px dashed #aaa',
        borderRadius: '5px',
      }}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Element is={ContainerMini} id="wrapper-canvas" background={"#FFF"} canvas>
          {children}
        </Element>
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </Resizable>
  );
};

Wrapper.craft = {
  props: {
    background: '#FFFFFF',
    padding: 10,
    // margin: 5,
  },
  related: {
    settings: WrapperSettings,
  }
};