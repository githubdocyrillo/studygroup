import styled from "styled-components";

export type Color = "red" | "green" | "yellow";

export const Light = styled.button<{ color: Color; actived?: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  background: ${({ color, actived }) => (actived ? color : "gray")};
`;

export const TraficLight = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;
