import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../components/Dropdown/Dropdown";
import Project from "../../components/Project/Project";
import { companies, featured as featuredData } from "../../data/featured";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { GlobalStateI, SET_PROJECTS } from "../../redux/reduxTypes";
import { FeaturedI } from "../../types/featuredI";
import { generateRandomInteger } from "../../util/common";
import {
  FiltersElement,
  ProjectsElement,
  ProjectsPageElement,
} from "./index.styles";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
  const projects = useSelector((state: GlobalStateI) => state.projects);
  const [companyFilter, setCompanyFilter] = useState("All");
  const dispatch = useDispatch();
  useEffect(() => {
    alert(
      "This section of portfolio is underconstruction, but you may still view it"
    );
  }, []);
  useEffect(() => {
    let projects = [];
    if (companyFilter == "All") {
      projects = featuredData;
    } else {
      projects = featuredData.filter(
        (featured) => featured.company === companyFilter
      );
    }
    dispatch({
      type: SET_PROJECTS,
      payload: projects,
    });
  }, [companyFilter]);
  return (
    <MainLayout pageTitle="Projects">
      <ProjectsPageElement>
        <FiltersElement>
          <Dropdown
            label="Company"
            items={companies}
            defaultCompany="All"
            setCompanyFilter={setCompanyFilter}
          />
        </FiltersElement>
        <ProjectsElement>
          <AnimatePresence
            exitBeforeEnter
            key={generateRandomInteger(0, 1000000)}
          >
            {projects.map(
              (
                {
                  name,
                  role,
                  category,
                  company,
                  startedAt,
                  endedAt,
                  featured,
                  url,
                }: FeaturedI,
                index: number
              ) => (
                <Project
                  key={generateRandomInteger(0, 1000000)}
                  name={name}
                  role={role}
                  category={category}
                  company={company}
                  startedAt={startedAt}
                  endedAt={endedAt}
                  featured={featured}
                  url={url}
                />
              )
            )}
          </AnimatePresence>
        </ProjectsElement>
      </ProjectsPageElement>
    </MainLayout>
  );
};

export default Projects;
