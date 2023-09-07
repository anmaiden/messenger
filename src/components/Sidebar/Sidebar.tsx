import React, { useState } from "react";

// функция для классов
import { cn } from "@bem-react/classname";

// Импорт своих стилей-настроек для Drawer
import { DrawerMui } from "./DrawerMUI";

import "./Sidebar.css";

//svg icons
import { DialogsIcon } from "../../assets/img/icons/dialogs.svg";
import { SettingsIcon } from "../../assets/img/icons/settings.svg";
import { UserStatusIcon } from "../../assets/img/icons/userStatus.svg";
import { ChevronRightIcon } from "../../assets/img/icons/chevronRight.svg";
import { ChevronLeftIcon } from "../../assets/img/icons/chevronLeft.svg";

// material ui компоненты
import {
  Avatar,
  Typography,
  MenuList,
  ListItemIcon,
  MenuItem,
  ListItemText,
  Box,
  SvgIcon,
} from "@material-ui/core";

// импорт фотографии пользователя
import userAvatars from "../../data/userAvatars";

const Sidebar: React.FC = () => {
  //логика открытия и закрытия боковой панели
  const [open, setOpen] = useState(false);
  const handleMenuToggle = () => {
    setOpen(!open);
  };

  //class for block
  const sidebar = cn("Sidebar");

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerMui variant="permanent" anchor="left" open={open}>
        <Box className={sidebar()}>
          <Box className={sidebar("User-header")}>
            {/* Аватар пользователя и информация о статусе */}
            {open ? (
              <>
                <Avatar
                  className={sidebar("Avatar")}
                  src={userAvatars.mainUser}
                  style={{ width: 74, height: 74 }}
                />
                <Box className={sidebar("User")}>
                  <Typography variant="h1">Иван Иванов</Typography>
                  <Box className={sidebar("User-Status")}>
                    <SvgIcon component={UserStatusIcon} viewBox="0 0 8 8" />
                    <Typography variant="h2">online</Typography>
                  </Box>
                </Box>
              </>
            ) : (
              <Avatar
                className={sidebar("Avatar")}
                src={userAvatars.mainUser}
                style={{ width: 46, height: 46 }}
              />
            )}
            <MenuList className={sidebar("Menu-header")}>
              <MenuItem className={sidebar("Menu_Item")} selected>
                <ListItemIcon className={sidebar("Menu_Item-Icon")}>
                  <SvgIcon component={DialogsIcon} viewBox="0 0 24 24" />
                </ListItemIcon>
                <ListItemText>ДИАЛОГИ</ListItemText>
              </MenuItem>
              <MenuItem className={sidebar("Menu_Item")} disabled>
                <ListItemIcon className={sidebar("Menu_Item-Icon")}>
                  <SvgIcon component={SettingsIcon} viewBox="0 0 24 24" />
                </ListItemIcon>
                <ListItemText>НАСТРОЙКИ</ListItemText>
              </MenuItem>
            </MenuList>
          </Box>
          <Box className={sidebar("Toggle_Button")} onClick={handleMenuToggle}>
            {/* Стрелка, позволяющая открыть и закрыть меню */}
            {open ? (
              <SvgIcon component={ChevronRightIcon} viewBox="0 0 24 24" />
            ) : (
              <SvgIcon component={ChevronLeftIcon} viewBox="0 0 24 24" />
            )}
          </Box>
        </Box>
      </DrawerMui>
    </Box>
  );
};

export default Sidebar;
