import MainLayout from "../../layouts/MainLayout/MainLayout";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <MainLayout pageTitle="About">
      <h1>Project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
    </MainLayout>
  );
};

export default Project;
