import React from "react";
import { useNavigate   } from "react-router-dom";
import {logout} from "./store";
import { useDispatch } from "react-redux";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import logo from "./assets/img/profile.jpg";

 
// profile menu component
const profileMenuItems = [
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-blue-500 p-0.5"
            src={logo}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                localStorage.removeItem("username");
                dispatch(logout());
                navigate('/');
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
export default function ComplexNavbar() {
  return (
    <Navbar className="max-w-screen-xl p-2 mx-auto mt-10 lg:rounded-full lg:pl-6">
      <div className="relative flex items-center mx-auto text-blue-gray-900">
        <Typography
          as="a"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
        >
          CRM
        </Typography>
        <div className="absolute font-bold text-purple-900 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 lg:block">
          <span className="text-base font-normal">Welcome</span> {localStorage.getItem('username')}
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="w-6 h-6" />
        </IconButton>
        <ProfileMenu />
      </div>
    </Navbar>
  );
}