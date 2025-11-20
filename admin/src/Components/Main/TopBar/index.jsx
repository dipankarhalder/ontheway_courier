import { Info, Notification } from "../../../Shared/Icons";
import {
  AppMainTopCover,
  AppLoginTime,
  AppMainLeftArea,
  AppMainRightArea,
} from "./style";

export const TopBar = () => {
  return (
    <AppMainTopCover>
      <AppMainLeftArea>
        <AppLoginTime>
          <span>Last login: 23-04-2025, 12:30 PM</span>
        </AppLoginTime>
      </AppMainLeftArea>
      <AppMainRightArea>
        <ul>
          <li>
            <Info />
          </li>
          <li>
            <Notification />
          </li>
        </ul>
      </AppMainRightArea>
    </AppMainTopCover>
  );
};
