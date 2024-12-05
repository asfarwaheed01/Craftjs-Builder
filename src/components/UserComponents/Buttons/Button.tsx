// import { useNode } from '@craftjs/core';

// const buttonStyles = {
//   primary: {
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//   },
//   secondary: {
//     backgroundColor: '#6c757d',
//     color: 'white',
//     border: 'none',
//   },
//   simple: {
//     backgroundColor: 'white',
//     color: 'black',
//     border: '1px solid #ced4da',
//   },
// };

// export const Button = ({ text, buttonType }) => {
//   const { connectors: { connect, drag } } = useNode();

//   return (
//     <button
//       ref={(ref) => connect(drag(ref))}
//       style={{
//         ...buttonStyles[buttonType],
//         padding: '10px 20px',
//         borderRadius: '5px',
//         cursor: 'move',
//       }}
//     >
//       {text}
//     </button>
//   );
// };

// Button.craft = {
//   props: {
//     text: 'Button',
//     buttonType: 'primary',
//   },
//   related: {
//     // settings: ButtonSettings,
//   },
// };

import { useNode } from '@craftjs/core';
import { Text } from '../Text/Text';

const buttonStyles = {
  primary: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
  },
  secondary: {
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
  },
  simple: {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid #ced4da',
  },
};

export const Button = ( props ) => {
  const { connectors: { connect, drag } } = useNode();
  const {text, buttonType} = props;
  console.log({text, buttonType})

  return (
    <button
      ref={(ref) => connect(drag(ref))}
      style={{
        ...buttonStyles[buttonType],
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'move',
      }}
    >
      <Text text={text}/>
    </button>
  );
};

