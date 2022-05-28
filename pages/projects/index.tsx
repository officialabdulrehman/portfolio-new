import { useEffect } from "react";
import Project from "../../components/Project/Project";
import { featured } from "../../data/featured";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { FeaturedI } from "../../types/featuredI";
import {
  FiltersElement,
  ProjectsElement,
  ProjectsPageElement,
} from "./index.styles";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  useEffect(() => {
    alert(
      "This section of portfolio is underconstruction, but you may still view it"
    );
  }, []);
  return (
    <MainLayout pageTitle="Projects">
      <ProjectsPageElement>
        <FiltersElement>Filters</FiltersElement>
        <ProjectsElement>
          {featured.map(
            (
              {
                name,
                role,
                category,
                company,
                startedAt,
                endedAt,
                featured,
              }: FeaturedI,
              index: number
            ) => (
              <Project
                key={index}
                name={name}
                role={role}
                category={category}
                company={company}
                startedAt={startedAt}
                endedAt={endedAt}
                featured={featured}
              />
            )
          )}
        </ProjectsElement>
      </ProjectsPageElement>
    </MainLayout>
  );
};

export default Projects;
