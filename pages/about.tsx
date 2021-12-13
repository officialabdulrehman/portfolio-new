import MainLayout from "../layouts/Main/Main"

interface AboutProps {}

const About: React.FC <AboutProps> = () => {
  return (
    <MainLayout pageTitle="About">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam. Itaque harum
          iusto dolore repellendus commodi mollitia perferendis ad possimus esse, id, sapiente,
          beatae non facere veniam magni placeat autem!
        </p>
    </MainLayout>
  )
}

export default About