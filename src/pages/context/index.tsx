import { Child } from "./child";
import { Section } from "./section";
export const RenderContex = () => {
  return (
    <div>
      <Section>
        <Child />
        <Child />
        <Child />
        <Section>
          <Child />
          <Child />
          <Child />
          <Section>
            <Child />
            <Child />
            <Child />
          </Section>
        </Section>
      </Section>
    </div>
  );
};
