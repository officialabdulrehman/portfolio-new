import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Project from "../../components/Project/Project";
import { companies, featured as featuredData } from "../../data/featured";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { GlobalStateI, SET_PROJECTS } from "../../redux/reduxTypes";
import { FeaturedI } from "../../types/featuredI";
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
    console.log("RERENDER");
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
          Filters
          <ul>
            {companies.map((company: string) => {
              return (
                <li onClick={() => setCompanyFilter(company)}>{company}</li>
              );
            })}
          </ul>
        </FiltersElement>
        <ProjectsElement>
          <AnimatePresence exitBeforeEnter>
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
                }: FeaturedI,
                index: number
              ) => (
                <Project
                  key={name}
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
          </AnimatePresence>
        </ProjectsElement>
      </ProjectsPageElement>
    </MainLayout>
  );
};

export default Projects;
