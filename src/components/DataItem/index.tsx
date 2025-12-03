import React from "react";
import styled from "styled-components";

const Item = styled.p`
  color: #ffffffcc;
  font-size: 1.1rem;
  font-family: Montserrat;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  padding-bottom: 0.4rem;

  strong {
    margin-right: 0.3rem;
  }
`;

type DataItemProps = {
  label: string;
  value?: string | number;
};

const DataItem = ({ label, value }: DataItemProps) => {
  if (!value) return null;
  return (
    <Item>
      <strong>{label}:</strong> {value}
    </Item>
  );
};

export default DataItem;
