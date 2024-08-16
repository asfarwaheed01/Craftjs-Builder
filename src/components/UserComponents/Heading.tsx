// import { useEditor } from "@craftjs/core";

// export const Heading = ({ text }) => {
//     // const { connectors } = useEditor();
//   return (
//     <div 
//     // ref={ref => connectors.create(ref, <h1 text="Heading h1" />)}
//       style={{ 
//         cursor: 'move',
//         userSelect: 'none'
//       }}
//     >
//       <h1>{text}</h1>
//     </div>
//   );
// };

// Heading.craft = {
//   props: {
//     text: "Heading h1",
//     fontSize: 16
//   },
//   rules: {
//     canDrag: () => true,
//     canDrop:() => true
//   }
// }

import { useNode } from "@craftjs/core";

export const Heading = ({ text, level = 1 }) => {
    const { connectors: { connect, drag } } = useNode();

    const getHeadingStyle = (level) => {
        switch(level) {
            case 1:
                return { fontSize: '2em', fontWeight: 'bold' };
            case 2:
                return { fontSize: '1.5em', fontWeight: 'bold' };
            case 3:
                return { fontSize: '1.17em', fontWeight: 'bold' };
            case 4:
                return { fontSize: '1em', fontWeight: 'bold' };
            case 5:
                return { fontSize: '0.83em', fontWeight: 'bold' };
            case 6:
                return { fontSize: '0.67em', fontWeight: 'bold' };
            default:
                return { fontSize: '1em', fontWeight: 'normal' };
        }
    };

    const HeadingTag = `h${level}`;

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            style={{ 
                cursor: 'move',
                userSelect: 'none'
            }}
        >
            <HeadingTag style={getHeadingStyle(level)}>{text}</HeadingTag>
        </div>
    );
};

Heading.craft = {
    props: {
        text: "Heading",
        level: 1
    },
    rules: {
        canDrag: () => true,
        canDrop: () => true
    }
}
