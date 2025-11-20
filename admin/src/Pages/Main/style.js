import styled from "styled-components";

export const AppMainLayoutCover = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const AppTableDataInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 0;

  .under_construction {
    display: flex;
    height: 200px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.sidebar};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    & > h3 {
      font-size: 19px;
      font-weight: 700;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.black};
    }

    & > p {
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 2px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const ApplicationCoverContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const AppMainPageHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AppContentDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.tableborder};
`;

export const AppDashboardCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 24px 0;

  .app_dashobard_heading {
    width: 100%;
    margin-bottom: 20px;

    h1 {
      font-size: 21px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.black};

      & > span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.btnbg};
      }
    }

    & > p {
      font-size: 15px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.bodytext};
    }
  }

  .app_init_dashboard {
    width: 100%;
    display: flex;

    & > ul {
      width: 100%;
      display: flex;
      gap: 16px;

      & > li {
        width: 19%;

        .app_child_inside {
          position: relative;
          background: ${({ theme }) => theme.colors.sidebar};
          border: 1px solid ${({ theme }) => theme.colors.exborder};
          box-shadow: ${({ theme }) => theme.colors.boxshadow};
          border-radius: 6px;
          padding: 10px 16px;
          overflow: hidden;

          & > span {
            position: absolute;
            top: 50%;
            right: -40px;
            width: 100px;
            height: 100px;
            opacity: 0.36;
            color: white;
            transform: translateY(-50%);

            & > svg {
              width: 100px;
              height: 100px;
            }
          }

          & > p {
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .app_icontext {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;

            & > h6 {
              font-size: 19px;
              font-weight: 700;
              line-height: 20px;
            }

            & > span {
              font-size: 12px;
              font-weight: 600;
              line-height: 20px;
              color: ${({ theme }) => theme.colors.dgray};
            }
          }

          &.app_collection {
            background: #e3c9f9;
            border: 1px solid #7c38b6;

            .app_icontext h6 {
              color: #7c38b6;
            }
          }

          &.app_expense {
            background: #f6e2c9;
            border: 1px solid #9f6214;

            .app_icontext h6 {
              color: #9f6214;
            }
          }

          &.app_teacher {
            background: #ffe7e7;
            border: 1px solid #bb0a0a;

            .app_icontext h6 {
              color: #bb0a0a;
            }
          }

          &.app_non_teacher {
            background: #b5f2ff;
            border: 1px solid #0a7890;

            .app_icontext h6 {
              color: #0a7890;
            }
          }

          &.app_student {
            background: #def8c9;
            border: 1px solid #42870a;

            .app_icontext h6 {
              color: #42870a;
            }
          }
        }
      }
    }
  }

  .app_overview_graph {
    display: flex;
    width: 100%;
    margin-top: 30px;
    gap: 16px;

    .app_revenue_overview {
      width: 50%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      .app_rev_heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;

        h3 {
          font-size: 14px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.black};
        }

        select {
          height: 26px;
          padding: 0 7px 0 6px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          border: 1px solid ${({ theme }) => theme.colors.tableborder};
        }
      }
    }
  }

  .app_payroll_graph {
    display: flex;
    width: 100%;
    margin-top: 16px;
    gap: 16px;

    .app_dept_graph {
      width: 50%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .app_dept_graph_full {
      width: 100%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .app_doug_graph_first {
      width: 33.3%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .app_doug_graph {
      width: 33.3%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  .app_analisys_heading {
    display: flex;
    width: 100%;

    & > h2 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: -16px;
    }
  }

  .app_more_btns {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;

    a {
      font-weight: 600;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const AppOnlineAdmissionForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  width: 100%;

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const AppFormApplication = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  .app_btn_form {
    display: flex;
    width: auto;
    margin-left: 30%;
    margin-top: 40px;
  }

  .app_form_online_wrap {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .app_form_heading {
      width: 30%;

      & > p {
        font-size: 13px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.bodytext};
      }
    }

    .app_form_online_content {
      width: 70%;
      margin-bottom: 20px;

      .full_row {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
      }

      .half_row {
        display: flex;
        width: 100%;
        gap: 10px;
        margin-bottom: 10px;

        .inside {
          display: flex;
          flex-direction: column;
          width: 100%;

          & > p {
            font-size: 14px;
            margin-bottom: 3px;
          }

          & > select {
            width: auto;
            height: 42px;
            padding: 0 16px;
            border-radius: 6px;
            font-weight: 500;
            font-size: 15px;
            border: 1px solid ${({ theme }) => theme.colors.tableborder};
          }
        }
      }

      .all_form_field {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-bottom: 10px;

        & > p {
          font-size: 14px;
          margin-bottom: 3px;
        }

        .app_form_grup {
          display: flex;
          width: 100%;
          gap: 10px;

          & > select {
            width: auto;
            height: 42px;
            padding: 0 16px;
            border-radius: 6px;
            font-weight: 500;
            font-size: 15px;
            border: 1px solid ${({ theme }) => theme.colors.tableborder};
          }
        }
      }
    }
  }
`;

export const AppItemViewCover = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100dvh;
  z-index: 12;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;

  .internalDetailsContent {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-right: 16px;
    width: 800px;
    border-radius: 8px;
    padding: 20px 24px;
    position: relative;
    overflow-y: auto;
    height: calc(100dvh - 32px);
    background: ${({ theme }) => theme.colors.white};

    .app_close {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 12px;
      top: 12px;
      cursor: pointer;

      & > span {
        width: 20px;
        height: 20px;

        & > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    h2 {
      width: 100%;
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.gray};
    }

    .app_detailsSection {
      width: 100%;
      margin-bottom: 26px;

      h3 {
        width: 100%;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 3px;
        color: ${({ theme }) => theme.colors.black};
      }

      .app_details_course {
        width: 100%;
        padding: 12px 19px;
        border-radius: 6px;
        background: ${({ theme }) => theme.colors.sidebar};
        border: 1px solid ${({ theme }) => theme.colors.tableborder};

        & > ul {
          display: flex;
          width: 100%;
          flex-direction: column;

          & > li {
            display: flex;
            width: 100%;
            gap: 10px;
            margin-bottom: 4px;
            font-size: 15px;

            & > span {
              font-weight: 500;
              color: ${({ theme }) => theme.colors.gray};
            }

            & > p {
              font-weight: 600;
              color: ${({ theme }) => theme.colors.black};
            }
          }
        }

        .app_sub_list {
          width: 100%;
          display: flex;
          gap: 10px;
          margin-top: 20px;
          margin-bottom: 10px;

          & > span {
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            padding: 5px 12px 4px;
            border-radius: 6px;
            background: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.tableborder};

            &.actv_item_sub {
              background: ${({ theme }) => theme.colors.infobg};
              color: ${({ theme }) => theme.colors.hblue};
              border: 1px solid ${({ theme }) => theme.colors.hblue};
            }
          }
        }

        .details_elem_cover {
          width: 100%;
          display: flex;

          .main_sub_wrap {
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 10px;

            .details_cover {
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 10px;
              padding: 10px 16px;
              border-radius: 8px;
              background: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.tableborder};

              & > p {
                font-size: 16px;
                font-weight: 600;
                color: ${({ theme }) => theme.colors.black};
              }

              .details_table {
                display: flex;
                flex-direction: column;

                .details_row {
                  display: flex;
                  flex-wrap: wrap;

                  & > span {
                    font-size: 12px;
                    font-weight: 700;
                    margin-bottom: 4px;
                    text-transform: uppercase;
                    color: #acacac;

                    &:nth-child(1) {
                      width: 12%;
                    }
                    &:nth-child(2) {
                      width: 64%;
                    }
                    &:nth-child(3) {
                      width: 12%;
                    }
                    &:nth-child(4) {
                      width: 12%;
                    }
                  }

                  & > p {
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 4px;
                    color: ${({ theme }) => theme.colors.black};

                    &:nth-child(1) {
                      width: 12%;
                    }
                    &:nth-child(2) {
                      width: 64%;
                    }
                    &:nth-child(3) {
                      width: 12%;
                    }
                    &:nth-child(4) {
                      width: 12%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
