import React from "react";
import Styled from './styles'
import { useForm } from "react-hook-form";
import Button from "../Button";

const DogForm = ({ onSubmit, children, button, gap }) => {
  const { handleSubmit, register, formState } = useForm();

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)} gap={gap} autoComplete="off">
      <Styled.Fields>
        {React.Children.map(children, (child) => {
          const { name } = child.props;

          if (!name) return child;

          return React.createElement(child.type, {
            ...{
              ...child.props,
              register: register,
              errors: formState.errors[name],
              key: name,
            },
          });
        })}
      </Styled.Fields>

      <Button type="submit">{button}</Button>
    </Styled.Form>
  );
};

export default DogForm;