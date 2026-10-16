import { AboutCard } from "../features/about/AboutCard";
import { SessionInfo } from "../features/about/SessionInfo";
import { SnapShot } from "../features/about/SnapShot";
import { Journey } from "../features/about/Journey";
import { EducationTimeline } from "../features/about/EducationTimeline";
import { ContactPage } from "../features/contact/ContactPage";
import { SkillsCard } from "../features/skills/SkillsCard";
import { Experience } from "../features/experience/Experience";
import { ProjectScreen } from "../features/projects/ProjectScreen";

export const FILE_REGISTRY = {
  introduction: AboutCard,
  session: SessionInfo,
  timeline: Journey,
  snapshot: SnapShot,
  education: EducationTimeline,
  contact: ContactPage,
  skills: SkillsCard,
  experience: Experience,
  overview: ProjectScreen
};
