import React from "react";
import { cn } from "@bem-react/classname";
import { observer } from "mobx-react-lite";
import { Badge } from "@material-ui/core";
import "./OnlineStatus.css";

interface OnlineStatusProps {
  isOnline: boolean;
}

const OnlineStatus: React.FC<OnlineStatusProps> = observer(
  ({ isOnline }: OnlineStatusProps) => {
    const onlineStatus = cn("OnlineStatus");
    const Status = isOnline ? "Online" : "Offline";
    return (
      <Badge
        className={onlineStatus({ online: isOnline })}
        overlap="circular"
        badgeContent={
          <div className={onlineStatus("OnlineBadge", Status)}></div>
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
    );
  }
);
export default OnlineStatus;
