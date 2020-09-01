import styled from "styled-components";

const StyledContactForm = styled.div`
  margin-bottom: 2rem;
  text-align: left;

  button {
    position: revert;
    padding: 0.75rem;
    color: var(--dark-highlight);
    background: linear-gradient(135deg, rgb(230, 176, 0), rgb(255, 18, 6));
  }
`;

export default function ContactForm() {
  function handleSubmit() {}
  return (
    <StyledContactForm>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input type="text" name="name" placeholder="What's you name" />
        </p>
        <p>
          <input type="text" name="email" placeholder="Got an email address" />
        </p>
        <p>
          <textarea type="text" name="message" placeholder="Message" />
        </p>
        <button className="skewy" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </StyledContactForm>
  );
}
