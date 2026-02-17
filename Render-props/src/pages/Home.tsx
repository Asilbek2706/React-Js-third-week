import Input from "../components/Input.tsx";
import Kelvin from "../components/Kelvin.tsx";
import Fahrenheit from "../components/Fahrenheit.tsx";

const Home = () => {
  // return <Title
  //     render={() => (
  //       <h1>
  //         <span role={'img'} aria-label={'emoji'}>
  //           ✨
  //         </span>
  //         I am a render prop!{" "}
  //         <span role={'img'} aria-label={'emoji'}>
  //           ✨
  //         </span>
  //       </h1>
  //     )}
  //   />

 // return ( <>
 //       <Title render={() => <h1> ✨ First render prop! ✨</h1>} />
 //       <Title render={() => <h2> 🔥 First render prop! 🔥</h2>} />
 //       <Title render={() => <h3> 🚀 First render prop! 🚀</h3>} />
 //  </>
 // )


  return (
      <div className={'App'}>
        <h1>⛄ Temperature converter 🔥</h1>
        <Input
            render={(value) => (
              <>
                <Kelvin value={value} />
                <Fahrenheit value={value} />
              </>
            )}
        />
      </div>
  )
}


export default Home;
