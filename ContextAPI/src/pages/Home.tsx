import StatusBar from "../components/StatusBar.tsx";
import SaveButton from "../components/SaveButton.tsx";

const Home = () => {

  return (
      <div className={'App'}>
        <h1>Homepage</h1>
          <StatusBar />
          <SaveButton />
      </div>
  )
}


export default Home;
