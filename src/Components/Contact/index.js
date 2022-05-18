import React from "react";
import Footer from "../Footer/index.js";
import {
  ConatactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  TextArea,
  InputSubimt
} from './style.js'

const Contact = () => {
  return (
    <ConatactSection>
      <div className="container">
          <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
          <Form>
              <FormInput>
                  <InputText placeholder="Your Name" />
                  <InputEmail placeholder="Your Email" />
              </FormInput>
              <InputExp type="text" className="sub" placeholder="Your Subject" />
              <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
              <InputSubimt type="submit" value="Send Message" />
          </Form>
      </div>
      <Footer />
    </ConatactSection>
  );
}

export default Contact;
