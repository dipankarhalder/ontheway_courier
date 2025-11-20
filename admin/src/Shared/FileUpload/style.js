import styled from "styled-components";

export const AppUploadCover = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppCoverUploadItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const AppUploadFile = styled.div`
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  margin-right: 16px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.sidebar};
  height: ${({ $multiple }) => ($multiple ? "100px" : "40px")};
  border: 1px dashed ${({ theme }) => theme.colors.tableborder};
  padding: ${({ $multiple }) => ($multiple ? "12px 20px" : "12px 16px")};

  & > p {
    width: 100%;
    font-size: 13px;
    font-weight: 600;
    text-align: ${({ $multiple }) => ($multiple ? "center" : "left")};
  }
`;

export const AppBtnItems = styled.div`
  display: flex;
  flex-direction: ${({ $multiple }) => ($multiple ? "column" : "row")};
  gap: 6px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 6px;
    border: 0px solid transparent;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.btnbg};

    & > span {
      width: 20px;
      height: 20px;

      & > svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const AppItemImage = styled.p`
  margin: 14px 0 4px;
  width: 100%;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray};
`;
