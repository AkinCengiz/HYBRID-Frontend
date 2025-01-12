import Counter from "./components/Counter";
import ImageList from "./components/ImageList";
import CardState from "./components/CardState";



function StateManagement() {
    
  return (
    <>
        <h1>State Management</h1>
        <CardState/>
        <Counter/>
        <hr />
        <br />
        <ImageList/>
        <CardState/>
        <CardState/>
        <CardState/>
        <CardState/>
        <CardState/>
        <CardState/>
    </>
  )
}

export default StateManagement