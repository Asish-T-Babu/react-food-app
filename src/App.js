// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt='do nothing'/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
)

// inline style for RestaurentCard

const styleCard = {
  backgroundColor: '#f0f0f0'
}
// inline style must be an js object and the js code is executed inside {}
// this is not a prefered way, we can provide an the object directly inside {}
const RestaurentCard = () =>{
  return (
    <div className='res-card' style={styleCard}>
      <img className='res-logo' src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" alt='res-logo'></img>
      <h3>Meghana Foods</h3>
      <h5>Biryani, North Indian, Asian</h5>
      <h5>4.4 stars</h5>
      <h5>38 minutes</h5>
    </div>
  )
}

const Body = () =>{
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {/* RestaurentCard */}
        <RestaurentCard/>
        <RestaurentCard/>
        <RestaurentCard/>
        <RestaurentCard/>
        <RestaurentCard/>
        <RestaurentCard/>
        <RestaurentCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      {Header()}
      <Body></Body>
    </div>
  )
}
export default AppLayout;