import styled from "styled-components";

const StyledContactForm = styled.div`
  margin-bottom: 2rem;
  text-align: left;

  .margin-top,
  button {
    display: block;
    margin-top: 1rem;
  }

  button {
    position: revert;
    padding: 0.75rem;
    color: var(--dark-highlight);
    background: linear-gradient(135deg, rgb(230, 176, 0), rgb(255, 18, 6));
  }

  @media (max-width: 1000px) {
    width: 75%;
    margin: 0 auto;
    padding: 1.5rem;
  }

  @media (min-width: 1001px) {
    width: 75%;
    margin: 0 auto;
    padding: 1.5rem;
  }
`;

export default function ContactForm() {
  function handleSubmit() {}
  return (
    <StyledContactForm>
      <form
        className="skewy"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <lable className="margin-top">
          What's you name
          <input type="text" name="name" />
        </lable>
        <lable className="margin-top">
          Got an email address?
          <input type="text" name="email" />
        </lable>
        <lable className="margin-top">
          Message
          <textarea type="text" name="message" />
        </lable>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </StyledContactForm>
  );
}
