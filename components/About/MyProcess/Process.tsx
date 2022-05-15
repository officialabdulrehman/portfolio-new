import Link from "next/link";
import {
  AnchorIconElement,
  IconsElement,
  ProcessElement,
  ProcessLeftElement,
  ProcessLeftHeading,
  ProcessRightElement,
  UnderlineElement,
  HireElement,
} from "./Process.styles";
interface ProcessProps {}

const Process: React.FC<ProcessProps> = () => {
  return (
    <ProcessElement>
      <ProcessLeftElement>
        <ProcessLeftHeading>
          <h1>About</h1>
          <UnderlineElement />
        </ProcessLeftHeading>
      </ProcessLeftElement>
      <ProcessRightElement>
        <h3>Who am I</h3>
        <p>A simple guy who loves to create solutions to the real world problems.</p>
        <p>I started coding when I joined my University for Bechalor's in Computer Science.</p>
        <p>I learned basics of programming in C, and OOP conecpts in Java. But then soon trasitioned to JavaScript as I was interested in Web development.</p>
        <br/>
        <h3>Personality</h3>
        <p>Introvert | Focused</p>
        <br/>
        <h3>Interests</h3>
        <p>Photography | Cinemetography | Coding | CyberSecurity | Gaming | Anime</p>
      </ProcessRightElement>
    </ProcessElement>
  );
};

export default Process;
