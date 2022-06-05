import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { AnchorIconElement } from "../../Home/Showcase/Showcase.styles";
import {
  ConnectElement,
  ConnectLeftElement,
  ConnectRightElement,
  FormElement,
  IconsContainer,
  UnderlineElement,
} from "./Connect.styles";

interface ConnectProps {}

const ConnectComponent: React.FC<ConnectProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    setLoader(true);
    if (
      name.length < 4 ||
      email.length < 4 ||
      phone.length < 4 ||
      message.length < 4
    ) {
      alert("Checks failed");
      setLoader(false);
      return;
    }
    try {
      const response = await axios.post(
        String(process.env.NEXT_PUBLIC_EMAIL_URL),
        {
          name,
          email,
          phone,
          message,
        }
      );
      setLoader(false);

      alert("Success");
    } catch (e) {
      alert("Failure");
      setLoader(false);
    }
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <ConnectElement>
      <ConnectLeftElement>
        <div className="connect">
          <h1>Let's Connect!</h1>
          <UnderlineElement />
        </div>
        <div className="icons">
          <IconsContainer>
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
          </IconsContainer>
        </div>
      </ConnectLeftElement>
      <ConnectRightElement>
        <FormElement onSubmit={onSubmitHandler}>
          <input
            value={name}
            type="text"
            required
            placeholder="Full Name*"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={email}
            type="email"
            required
            placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={phone}
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            value={message}
            rows={8}
            draggable={false}
            required
            placeholder="Message*"
            onChange={(e) => setMessage(e.target.value)}
          />
          {loader ? (
            <button disabled={true}>Loading</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </FormElement>
      </ConnectRightElement>
    </ConnectElement>
  );
};

export default ConnectComponent;
