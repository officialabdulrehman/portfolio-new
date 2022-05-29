import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { mainLayoutVariants, projectVariants } from "../../animations/global";
import { SHOW_PROJECT_MODAL } from "../../redux/reduxTypes";
import { FeaturedI } from "../../types/featuredI";
import { DateDiff, extractDate } from "../../util/common";
import { ProjectElement } from "./Project.styles";

interface ProjectProps extends FeaturedI {}

const Project: React.FC<ProjectProps> = (props) => {
  const dispatch = useDispatch();
  const { name, role, category, company, startedAt, endedAt } = props;
  return (
    <ProjectElement
      onClick={() => dispatch({ type: SHOW_PROJECT_MODAL })}
      as={motion.div}
      variants={mainLayoutVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={name}
    >
      <AnimatePresence exitBeforeEnter key={name}>
        <motion.h3
          variants={mainLayoutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={1}
        >
          {name}
        </motion.h3>
        <motion.h4
          variants={mainLayoutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={2}
        >
          {role}
        </motion.h4>
        <motion.h4
          variants={mainLayoutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={3}
          id="company"
        >
          {company}
        </motion.h4>
        <motion.h5
          variants={mainLayoutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={4}
        >
          {category}
        </motion.h5>
        <motion.p
          variants={mainLayoutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={5}
        >
          {extractDate(startedAt)} to{" "}
          {endedAt ? extractDate(endedAt) : "Present"}{" "}
          <span>({DateDiff.get(startedAt, endedAt)})</span>
        </motion.p>
      </AnimatePresence>
    </ProjectElement>
  );
};

export default Project;
