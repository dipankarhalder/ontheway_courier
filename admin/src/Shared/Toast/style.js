import styled, { keyframes, css } from "styled-components";
import { fontFamily, textColor } from "../../styles/mixins";

const typeColors = {
  success: { bg: "successbg", fg: "success" },
  info: { bg: "infobg", fg: "info" },
  error: { bg: "errorbg", fg: "error" },
  warning: { bg: "warningbg", fg: "warning" },
};

const slideIn = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;
const slideOut = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
`;

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  pointer-events: none;

  ${({ $show }) =>
    $show
      ? css`
          animation: ${slideIn} 0.4s ease forwards;
          pointer-events: auto;
        `
      : css`
          animation: ${slideOut} 0.4s ease forwards;
        `}
`;

export const ToastCover = styled.div`
  background: ${({ theme }) => theme.colors.white};
  max-width: 460px;
  padding: 14px 50px 14px 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;

  ${({ type }) => {
    if (!typeColors[type]) return null;
    const { fg } = typeColors[type];
    return css`
      border-left: 3px solid ${({ theme }) => theme.colors[fg]};
      h5 {
        ${textColor(fg)};
      }
    `;
  }}
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h5 {
    ${fontFamily};
    font-size: 14px;
    margin: 0;
  }

  & > p {
    ${fontFamily};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    ${textColor("gray")};
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  border: none;
  background: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > span {
    width: 16px;
    height: 16px;

    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`;
