import Link from "next/link";
import {
  AnchorIconElement,
  IconsElement,
  ShowcaseElement,
  ShowcaseLeftElement,
  ShowcaseLeftHeading,
  ShowcaseRightElement,
  UnderlineElement,
  HireElement,
} from "./Showcase.styles";
import Image from "next/image";
import showcasePicture from "../../../assets/images/me2.jpg";
import showcasePicture2 from "../../../assets/images/meDark.jpg";

interface ShowcaseProps {}

const Showcase: React.FC<ShowcaseProps> = () => {
  return (
    <ShowcaseElement>
      <ShowcaseLeftElement>
        <ShowcaseLeftHeading>
          <UnderlineElement />
          <h1>I'm Abdul Rehman Nizamani</h1>
        </ShowcaseLeftHeading>
        <h4>Fullstack Engineer from Pakistan!</h4>
        <h4>Welcome to my Profile!</h4>
        <IconsElement>
          <Link href="https://www.facebook.com/nizthedev">
            <AnchorIconElement
              href="https://www.facebook.com/nizthedev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/facebook.svg" />
            </AnchorIconElement>
          </Link>
          <Link href="https://www.linkedin.com/in/abdul-rehman-nizamani-1066481b9/">
            <AnchorIconElement
              href="https://www.linkedin.com/in/abdul-rehman-nizamani-1066481b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.svg" />
            </AnchorIconElement>
          </Link>
          <Link href="https://twitter.com/nizthedev">
            <AnchorIconElement
              href="https://twitter.com/nizthedev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/twitter.svg" />
            </AnchorIconElement>
          </Link>
          <Link href="https://gitlab.com/officialabdulrehman">
            <AnchorIconElement
              href="https://gitlab.com/officialabdulrehman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/gitlab.svg" />
            </AnchorIconElement>
          </Link>
          <Link href="https://github.com/officialabdulrehman">
            <AnchorIconElement
              href="https://github.com/officialabdulrehman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github2.svg" />
            </AnchorIconElement>
          </Link>
        </IconsElement>
        <Link href="https://drive.google.com/file/d/13Fqwapkwd7ceL2JVblbpgkoZLmPIKAWa/view?usp=sharing">
          <HireElement
            href="https://drive.google.com/file/d/13Fqwapkwd7ceL2JVblbpgkoZLmPIKAWa/view?usp=sharing"
            target="_blank"
          >
            Check out my Resume!
          </HireElement>
        </Link>
      </ShowcaseLeftElement>
      <ShowcaseRightElement>
        <Image
          src={showcasePicture2}
          height="400px"
          width="320px"
          className="showcaseRight"
        />
      </ShowcaseRightElement>
    </ShowcaseElement>
  );
};

export default Showcase;
