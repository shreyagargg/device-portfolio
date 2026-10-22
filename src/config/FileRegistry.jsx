import { AboutCard } from "../features/about/AboutCard";
import { SessionInfo } from "../features/about/SessionInfo";
import { Journey } from "../features/about/Journey";
import { EducationTimeline } from "../features/about/EducationTimeline";
import { ContactPage } from "../features/contact/ContactPage";
import { SkillsCard } from "../features/skills/SkillsCard";
import { Experience } from "../features/experience/Experience";
import { ProjectScreen } from "../features/project/ProjectScreen";
import { SyAiScreen } from "../features/project/SyAi"

export const FILE_REGISTRY = {
  introduction: AboutCard,
  session: SessionInfo,
  timeline: Journey,
  education: EducationTimeline,
  contact: ContactPage,
  skills: SkillsCard,
  experience: Experience,
  overview: ProjectScreen,
  syai: SyAiScreen,
  finance: ProjectScreen
};
