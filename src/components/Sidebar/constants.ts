import Dashboard from "../../assets/images/dashboard.svg";
import Changelog from "../../assets/images/changelog.svg";
import Feedback from "../../assets/images/feedback.svg";
import Help from "../../assets/images/help.svg";
import Invite from "../../assets/images/invite.svg";
import Notifications from "../../assets/images/notifications.svg";
import Roadmap from "../../assets/images/roadmap.svg";
import Task from "../../assets/images/task.svg";

export const navLinks = [
  {
    path: "/noContent?section=Dashboard",
    icon: Dashboard,
    name: "Dashboard",
    id: 1,
  },
  {
    path: "/noContent?section=Feedback",
    icon: Feedback,
    name: "Feedback",
    id: 2,
  },
  {
    path: "/",
    icon: Task,
    name: "Task",
    id: 3,
  },
  {
    path: "/noContent?section=Roadmap",
    icon: Roadmap,
    name: "Roadmap",
    id: 4,
  },
  {
    path: "/noContent?section=Changelog",
    icon: Changelog,
    name: "Changelog",
    id: 5,
  },
];

export const platformLinks = [
  {
    path: "/noContent?section=Invite",
    icon: Invite,
    name: "Invite People",
    id: 6,
  },
  {
    path: "/noContent?section=Help",
    icon: Help,
    name: "Help & Community",
    id: 7,
  },
  {
    path: "/noContent?section=Notifications",
    icon: Notifications,
    name: "Notifications",
    id: 8,
  },
];
