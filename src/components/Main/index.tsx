import React from "react";

import * as S from "./styles";

const Main = ({ description = "CRA, TypeScript e Styled Components" }) => (
  <S.Wrapper>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
