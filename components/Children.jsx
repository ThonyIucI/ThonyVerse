import React from "react";
import { contacts } from "./Content/contact";
import { experience } from "./Content/experience";
import { interests } from "./Content/interests";
import { education, projects } from "./Content/projects";
import {
  skillsBackend,
  skillsEngineering,
  skillsFrontend,
} from "./Content/skills";
import ExperienceModel from "./ExperienceModel";
import InterestModel from "./InterestModel";
import ProjectModel from "./ProjectModel";
import SkillModel from "./SkillModel";
import SkillSection from "./SkillSection";
import SvgModel from "./SvgModel";

function Children(p) {
  // console.log(p);
  switch (p.id) {
    case "contact":
      return contacts?.map((e, i) => (
        <SvgModel
          key={i}
          {...e}
          active={p.active}
          setActive={p.setActive}
          language={p.language}
        />
      ));
    case "projects":
      return projects?.map((e, i) => (
        <ProjectModel
          key={i}
          {...e}
          active={p.active}
          setActive={p.setActive}
          language={p.language}
        />
      ));
    case "skills":
      // const sills = [
      //   { array: skillsBackend, colorRing: "#ffbc42", radius: 10 },
      //   { array: skillsEngineering, colorRing: "#BA18EA", radius: 25 },
      //   { array: skillsFrontend, colorRing: "#FD0114", radius: 40 },
      // ];
      const sills = [
        { array: skillsBackend, colorRing: "#FD0114", radius: 10 },
        { array: skillsEngineering, colorRing: "#FD0114", radius: 25 },
        { array: skillsFrontend, colorRing: "#FD0114", radius: 40 },
      ];
      return sills?.map((e, i) => (
        <SkillSection
          key={i}
          {...e}
          active={p.active}
          setActive={p.setActive}
          language={p.language}
        />
      ));
    case "education":
      return education?.map((e, i) => (
        <ProjectModel
          key={i}
          {...e}
          active={p.active}
          setActive={p.setActive}
          language={p.language}
        />
      ));
    case "experience":
      return experience?.map((e, i) => (
        <ExperienceModel
          key={i}
          {...e}
          active={p.active}
          setActive={p.setActive}
          language={p.language}
        />
      ));
    case "interests":
      return interests?.map((e, i) => (
        <InterestModel
          key={i}
          {...e}
          active={p.active}
          setActive={p.setActive}
          language={p.language}
        />
      ));

    default:
      break;
  }
}

export default Children;
