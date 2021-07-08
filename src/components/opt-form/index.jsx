import React from "react";
import { Container, Input, Button, Text } from "./styles/opt-form";

function OptForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default OptForm;

OptForm.Input = function OptFormInput({ ...props }) {
  return <Input {...props} />;
};

OptForm.Button = function OptFormButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};
