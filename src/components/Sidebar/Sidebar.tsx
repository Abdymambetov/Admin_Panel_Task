import { Avatar } from "@radix-ui/themes";
import cls from "./Sidebar.module.css";
import AvatarFallback from "../../assets/icons/avatar_fallback.svg?react";
import AnaliticIcon from "../../assets/icons/analitic_icon.svg?react";
import ProfileIcon from "../../assets/icons/profile.svg?react";
import BannerIcon from "../../assets/icons/banners.svg?react";
import BlogIcon from "../../assets/icons/blog.svg?react";
import ComandsIcon from "../../assets/icons/comands.svg?react";
import ExitIcon from "../../assets/icons/exit.svg?react";
import ModerationIcon from "../../assets/icons/moderation.svg?react";
import ChatIcon from "../../assets/icons/chats.svg?react";
import CoinIcon from "../../assets/icons/coin.svg?react";
import DollarIcon from "../../assets/icons/dollar.svg?react";
import { Link } from "react-router-dom";


const listLinks = [
    {
      icon: <AnaliticIcon />,
      link: "/not_ready",
    },
    {
      icon: <ProfileIcon />,
      link: "/not_ready",
    },
    {
      icon: <ModerationIcon />,
      link: "/not_ready",
    },
    {
      icon: <ChatIcon />,
      link: "/not_ready",
    },
    {
      icon: <BannerIcon />,
      link: "/not_ready",
    },
    {
      icon: <ComandsIcon />,
      link: "/not_ready",
    },
    {
      icon: <BlogIcon />,
      link: "/not_ready",
    },
    {
      icon: <DollarIcon/>,
      link: "/not_ready",
    },
    {
      icon: <CoinIcon />,
      link: "/not_ready",
    },
    {
      icon: <ExitIcon />,
      link: "/not_ready",
    },
];


const Sidebar = () => {
    return (
      <div className={cls.sidebar}>
        <div className={cls.sidebar_content}>
          {/* <img src="/logo.svg" /> */}
          <Avatar
            className={cls.avatar}
            radius="full"
            fallback={<AvatarFallback />}
          />
          <nav className={cls.nav}>
            {listLinks.map((item, i) => (
              <Link key={i} to={item.link}>
                <div className={cls.icon_wrapper}>{item.icon}</div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );
};
  
export default Sidebar;