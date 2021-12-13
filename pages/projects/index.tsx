import MainLayout from "../../layouts/Main/Main"

interface ProjectsProps {}

const Projects: React.FC <ProjectsProps> = () => {
  return (
    <MainLayout pageTitle="Projects">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam. Itaque harum
          iusto dolore repellendus commodi mollitia perferendis ad possimus esse, id, sapiente,
          beatae non facere veniam magni placeat autem!
        </p>
    </MainLayout>
  )
}

export default Projects