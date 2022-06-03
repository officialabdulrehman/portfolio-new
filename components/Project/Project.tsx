import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { mainLayoutVariants, projectVariants } from "../../animations/global";
import { SHOW_PROJECT_MODAL } from "../../redux/reduxTypes";
import { FeaturedI } from "../../types/featuredI";
import {
  DateDiff,
  extractDate,
  generateRandomInteger,
} from "../../util/common";
import { ProjectElement } from "./Project.styles";

interface ProjectProps extends FeaturedI {}

const Project: React.FC<ProjectProps> = (props) => {
  const dispatch = useDispatch();
  const { name, role, category, company, startedAt, endedAt, url } = props;
  return (
    <Link href={url ? url : "/"}>
      <ProjectElement
        // onClick={() => dispatch({ type: SHOW_PROJECT_MODAL })}
        href={url ? url : "/"}
        target="_blank"
        as={motion.a}
        variants={mainLayoutVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={generateRandomInteger(0, 1000000)}
      >
        <AnimatePresence
          exitBeforeEnter
          key={generateRandomInteger(0, 1000000)}
        >
          <motion.h3
            variants={mainLayoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={generateRandomInteger(0, 1000000)}
          >
            {name}
          </motion.h3>
          <motion.h4
            variants={mainLayoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={generateRandomInteger(0, 1000000)}
          >
            {role}
          </motion.h4>
          <motion.h4
            variants={mainLayoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={generateRandomInteger(0, 1000000)}
            id="company"
          >
            {company}
          </motion.h4>
          <motion.h5
            variants={mainLayoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={generateRandomInteger(0, 1000000)}
          >
            {category}
          </motion.h5>
          <motion.p
            variants={mainLayoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={generateRandomInteger(0, 1000000)}
          >
            {extractDate(startedAt)} to{" "}
            {endedAt ? extractDate(endedAt) : "Present"}{" "}
            <span>({DateDiff.get(startedAt, endedAt)})</span>
          </motion.p>
        </AnimatePresence>
      </ProjectElement>
    </Link>
  );
};

export default Project;
