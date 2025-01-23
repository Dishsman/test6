// import { useState } from 'react'
import './App.css'
import Page1 from './Extra/page1'
import Page2 from './Extra/page2'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center',gap: '10%', backgroundColor:'grey', paddingLeft:"90%"}}>
      <Link to="/" style={{
          // position: 'absolute',
          // position:'sticky',
          fontSize: '16px', 
          textDecoration: 'none',
          color: 'white',
          backgroundColor: 'green',
          width:"5%",
           height:'3%',
           minWidth:57,
           minHeight:24,
           maxWidth:94,
           maxHeight:24,
           display: 'flex',
           justifyContent: 'center'
        }}>Page1</Link>
         
       <Link to="/page2" style={{
          // position: 'absolute',
          // position:'sticky',
          fontSize: '16px', // กำหนดขนาดฟอนต์ที่ไม่เปลี่ยน
          textDecoration: 'none',
          color: 'white',
           backgroundColor: 'green',
           width:"5%",
           height:'3%',
           minWidth:57,
           minHeight:24,
           maxWidth:94,
           maxHeight:24,
           display: 'flex',
           justifyContent: 'center'
        }}>page2</Link>
       </div>
      <Routes>
        <Route path="/" element={<Page2 />} />
        <Route path="/page2" element={<Page1 />} />
      </Routes>
    </Router>

  );
}

export default App;
// <div id='bg' style={{
    //   height: "100vh", width: "100vw",
    //   display: "flex", flexDirection: 'column',
    //   justifyContent: "center",
    //   alignItems: "center",
    //   background: 'grey',
    // }}>
    //   <div id='all' style={{
    //     display: "flex", flexDirection: 'column', height: "65%", width: "70%",
    //     justifyContent: "center",
    //     alignItems: "center",
    
    //   }} className='fill'>

    //     <div id='main_top' className='main fill'>

    //       <div id='left_mt' className='fill' style={{ height: '100%', width: "30%" }}>

    //       </div>
    //       <div id='right_mt' className='fill2' style={{ height: '100%', width: "70%" }}>
    //         <div id='1collumn' className='fill topBar'></div>
    //         <div id='2collumn' className='fill topBar'></div>
    //         <div id='3collumn' className='fill topBar'>
    //           <div id='option' style={{ display: "flex", flexDirection: 'row' }}>

    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //     <div id='main_buttom' className='main fill'>

    //       <div id='left_mb' style={{ height: "100%", width: "70%", display: "flex", flexDirection: 'column', }}
    //         className='fill2'>
    //         <div id='left_mb_top' className='fill' style={{ height: "33.33%", width: "100%" }}>

    //         </div>
    //         <div id='left_mb_buttom' className='fill' style={{ height: "66.66%", width: "100%", display: "flex", flexDirection: 'row', }}>
    //           <div id='box1' className='fill buttomBox'></div>
    //           <div id='box2' className='fill buttomBox'></div>
    //           <div id='box3' className='fill buttomBox'></div>
    //         </div>
    //       </div>

    //       <div id='right_mb' className='fill' style={{ height: "100%", width: "30%" }}>
    //         <div id='right_mb_top' className='fill' style={{ height: "16.665%", width: "100%" }}>

    //         </div>
    //         <div id='right_mb_buttom' className='fill' style={{ height: "82.335%", width: "100%", display: "flex", flexDirection: 'column', }}>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


//     import './App.css'
// import Page1 from './Extra/page1'
// import Page2 from './Extra/page2'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// function App() {
//   return (
    
//     <Router>
//       <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center',gap: '10%',}}>
//       <Link to="/" style={{
//           // position: 'absolute',
//           fontSize: '16px', 
//           textDecoration: 'none',
//           color: 'white',
//           backgroundColor: 'green',
//           width:"5%",
//            height:'3%'
//         }}>หน้าแรก</Link>
         
//        <Link to="/page2" style={{
//           // position: 'absolute',
//           fontSize: '16px', // กำหนดขนาดฟอนต์ที่ไม่เปลี่ยน
//           textDecoration: 'none',
//           color: 'white',
//            backgroundColor: 'green',
//            width:"5%",
//            height:'3%'
//         }}>หน้าที่ 2</Link>
//        </div>
//       <Routes>
//         <Route path="/" element={<Page1 />} />
//         <Route path="/page2" element={<Page2 />} />
//       </Routes>
//     </Router>

//   );
// }