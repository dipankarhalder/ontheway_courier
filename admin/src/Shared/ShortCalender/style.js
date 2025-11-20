import styled from "styled-components";

export const AppShortCalendarContainer = styled.div`
  width: 100%;
  padding: 12px 11px 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.tableborder};

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 700;
      font-size: 15px;
      margin-left: 8px;
    }

    .cal_arrow {
      display: flex;
      gap: 6px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        cursor: pointer;
        background: transparent;
        border: 0px solid transparent;

        & > span {
          width: 18px;
          height: 18px;
          opacity: 0.6;

          & > svg {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 18px;
  }

  .calendar-day-name,
  .calendar-day {
    text-align: center;
    padding: 0;
  }

  .calendar-day-name {
    font-weight: 600;
    font-size: 12px;
    color: #898989ff;
  }

  .calendar-day {
    font-weight: 600;
    font-size: 14px;
    height: 38px;
    line-height: 38px;
    background: white;
  }

  .calendar-day.today {
    background-color: #0d37a3;
    color: white;
    border-radius: 6px;
  }
`;
