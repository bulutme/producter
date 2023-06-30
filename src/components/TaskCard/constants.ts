import user1 from "../../assets/images/user1.svg";
import user2 from "../../assets/images/user2.svg";
import user3 from "../../assets/images/user3.svg";
import low from "../../assets/images/low.svg";
import high from "../../assets/images/high.svg";
import medium from "../../assets/images/medium.svg";
import feature from "../../assets/images/feature.svg";
import bug from "../../assets/images/bug.svg";

export const loadUserIcon = (user) => {
  if (user === "user1") return user1;
  if (user === "user2") return user2;
  if (user === "user3") return user3;
  return user1;
};

export const loadPriorityIcon = (priority) => {
  if (priority === "low") return low;
  if (priority === "medium") return medium;
  if (priority === "high") return high;
  return low;
};

export const loadTicketIcon = (ticket) => {
  if (ticket === "feature") return feature;
  if (ticket === "bug") return bug;
  return bug;
};
