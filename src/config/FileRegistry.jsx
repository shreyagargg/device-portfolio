import { AboutCard } from "../features/about/AboutCard";
import { SessionInfo } from "../features/about/SessionInfo";
import { SnapShot } from "../features/about/SnapShot";
import { Journey } from "../features/experience/Journey";
import { EducationTimeline } from "../features/about/EducationTimeline";
import { ContactPage } from "../features/contact/ContactPage";
import { SkillsCard } from "../features/skills/SkillsCard";

export const FILE_REGISTRY = {
  introduction: AboutCard,
  session: SessionInfo,
  interests: Journey,
  snapshot: SnapShot,
  education: EducationTimeline,
  contact: ContactPage,
  skills: SkillsCard,
};
