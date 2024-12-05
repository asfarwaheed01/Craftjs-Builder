import { Element, useNode } from "@craftjs/core";
import { ContainerMini } from "../ContainerMini/ContainerMini";
import { Text } from "../Text/Text";
import { Button } from "../Buttons/Button";


export const CardTop = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Text)
  }
}

export const CardBottom = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect}>
      {children}
    </div>
  )
}

CardBottom.craft = {
  rules: {
    canMoveIn : (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
  }
}

export const Card = ({background, padding = 20}) => {
  return (
    <ContainerMini background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas> 
        <Text text="Title" />
        <Text text="Subtitle"  />
      </Element>
      <Element id="buttons" is={CardBottom} canvas> 
        <Button text="Learn more" buttonType={"primary"} />
      </Element>
    </ContainerMini>
  )
}
