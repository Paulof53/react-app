import React from "react";
import { useParams } from "react-router-dom";
import PromotionForm from "Components/Promotion/Form/Form";
import UIContainer from "Components/UI/Container/Container";

const PagesPromotionForm = () => {
  const { id } = useParams();

  return (
    <UIContainer>
      <PromotionForm id={id ? Number.parseInt(id, 10) : null} />
    </UIContainer>
  );
};
export default PagesPromotionForm;
