import MainLayout from "../layouts/MainLayout/MainLayout"

interface HomeProps {}

const Home: React.FC <HomeProps> = () => {
  return (
    <MainLayout pageTitle="Home">
        <h1>NizTheDev</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam. Itaque harum
          iusto dolore repellendus commodi mollitia perferendis ad possimus esse, id, sapiente,
          beatae non facere veniam magni placeat autem!
        </p>
    </MainLayout>
  )
}

export default Home