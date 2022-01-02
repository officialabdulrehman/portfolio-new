import Showcase from "../components/Home/Showcase/Showcase";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface HomeProps {
  theme: string;
  setTheme: (theme: string) => {};
}

const Home: React.FC<HomeProps> = ({ theme, setTheme }) => {
  return (
    <MainLayout pageTitle="Home" theme={theme} setTheme={setTheme}>
      <Showcase />
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
      <h1>NizTheDev</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quibusdam. Itaque harum iusto dolore repellendus commodi mollitia
        perferendis ad possimus esse, id, sapiente, beatae non facere veniam
        magni placeat autem!
      </p>
    </MainLayout>
  );
};

export default Home;
