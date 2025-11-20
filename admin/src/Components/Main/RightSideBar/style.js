import styled from "styled-components";

export const AppRightSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100vh;
  padding: 14px 12px;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  right: 0px;
  background: ${({ theme }) => theme.colors.sidebar};
  border-left: 1px solid ${({ theme }) => theme.colors.tableborder};

  .app_profile_logged_user {
    display: flex;
    flex-direction: row;
    margin-bottom: 14px;
    padding: 10px 12px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    .app_avt_wrapper {
      display: flex;
      flex-direction: row;

      & > span {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

        & > img {
          width: 40px;
          height: 40px;
        }
      }
      .app_avatar_info {
        display: flex;
        flex-direction: column;

        h6 {
          font-size: 15px;
          font-weight: 00;
          color: ${({ theme }) => theme.colors.black};
        }

        & > span {
          font-size: 12px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.gray};
        }
      }
    }

    .app_logout {
      width: 20px;
      height: 20px;
      transform: rotate(90deg);
      color: ${({ theme }) => theme.colors.error};

      & > span {
        width: 20px;
        height: 20px;

        & > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .app_schedule_items {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    padding: 10px 12px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    h2 {
      font-size: 15px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black};
    }

    .app_schedule_list_cover {
      width: 100%;
      position: relative;

      button {
        cursor: pointer;
        position: absolute;
        top: -20px;
        right: 0px;
        width: 18px;
        height: 18px;
        border: 0px solid transparent;
        background: transparent;

        & > span {
          width: 18px;
          height: 18px;
          display: flex;
          color: ${({ theme }) => theme.colors.balck};

          & > svg {
            width: 18px;
            height: 18px;
          }
        }
      }

      h4 {
        font-weight: 600;
        font-size: 12px;
        color: #898989ff;
      }

      & > ul {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;

        li {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .app_sch_time {
            display: flex;
            width: 70px;
            flex-direction: column;
            margin-right: 8px;
            padding-right: 8px;
            border-right: 1px solid #ecf0f4;

            & > span {
              font-weight: 600;
              font-size: 10px;
              color: #898989ff;
              line-height: 16px;
            }
          }

          .app_sch_info {
            width: calc(100% - 80px);
            display: flex;
            flex-direction: column;

            h6 {
              font-weight: 600;
              font-size: 12px;
              line-height: 15px;
              color: ${({ theme }) => theme.colors.black};
            }

            & > p {
              display: flex;
              line-height: 12px;
              margin-top: 2px;

              em {
                font-style: normal;
                padding: 2px 6px 3px;
                font-weight: 600;
                font-size: 9px;
                border-radius: 6px;

                &.app_success {
                  background: ${({ theme }) => theme.colors.successbg};
                  color: ${({ theme }) => theme.colors.success};
                }

                &.app_secure {
                  background: ${({ theme }) => theme.colors.securedbg};
                  color: ${({ theme }) => theme.colors.secured};
                }

                &.app_accept {
                  background: ${({ theme }) => theme.colors.infobg};
                  color: ${({ theme }) => theme.colors.info};
                }
              }
            }

            .app_students_row {
              display: flex;
              width: 100%;
              align-items: center;
              margin-top: 8px;
              gap: 5px;

              & > span {
                width: 10px;
                height: 10px;
                display: flex;
                color: ${({ theme }) => theme.colors.info};

                & > svg {
                  width: 10px;
                  height: 10px;
                }
              }

              & > p {
                font-weight: 600;
                font-size: 10px;
                color: ${({ theme }) => theme.colors.info};
              }
            }
          }
        }
      }
    }
  }

  .app_recent_activity {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    padding: 10px 12px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    h2 {
      width: 100%;
      font-size: 15px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black};

      & > a {
        font-size: 11px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.info};
        float: right;
        margin-top: 2px;
        text-decoration: underline;
      }
    }

    .app_inside_recent_activity {
      width: 100%;
      position: relative;

      & > ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 16px;

        li {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          margin-bottom: 14px;
          align-items: flex-start;

          &:last-child {
            margin-bottom: 0px;
          }

          & > span {
            width: 30px;
            height: 30px;
            display: flex;
            margin-right: 6px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #dfe5eb;
            color: ${({ theme }) => theme.colors.info};

            & > svg {
              width: 14px;
              height: 14px;
            }
          }

          .app_list_activity {
            display: flex;
            flex-direction: column;
            width: calc(100% - 36px);

            & > p {
              width: 100%;
              font-weight: 500;
              font-size: 10px;
              color: ${({ theme }) => theme.colors.dgray};

              & > span {
                font-weight: 600;
                color: ${({ theme }) => theme.colors.black};
              }
            }

            & > em {
              font-size: 10px;
              font-style: normal;
              font-weight: 500;
              color: #abababff;
            }
          }
        }
      }
    }
  }
`;
