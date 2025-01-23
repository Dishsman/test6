// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface IData {
//   make_id: string;
//   make_display: string;
//   make_is_common: string;
//   make_country: string;
// }

// const page2 =()=> {
//   const [carData, setCarData] = useState<IData[]>([]);
//   const [top5CarMakes, setTop5CarMakes] = useState<string[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchCar = async () => {
//       try {
//         const response = await axios.get(
//           'https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt'
//         );
        
//         // console.log(response.data?.Makes.slice(0, 5))
//         // console.log("API Data: ", response.data); // ดูข้อมูลที่ได้รับจาก API
      
//     //  setCarData(Object.values(response.data?.Makes));  // ใช้ Object.values เพื่อดึงค่าทั้งหมดเป็น array
//     console.log("Full API Response: ", response.data);  // ดูว่า response มีลักษณะอย่างไร
//         console.log("Makes Data: ", response.data.Makes);  // ตรวจสอบข้อมูลใน Makes
//      console.log(Array.isArray(response.data?.Makes)); 
//         // setCarData(response.data?.Makes); // บันทึกข้อมูลที่ได้รับ
//         // setLoading(false)
//       } catch (error) {
//       }
//     };
    

//     fetchCar();
//   }, []);
//   console.log(carData)
// //   useEffect(() => {
// //     console.log('carData:', carData);  // เพิ่มการตรวจสอบค่า carData ทุกครั้ง
// //     if (carData && carData.length > 0) {
// //       const top5 = carData.slice(0, 5).map((car: IData) => car.make_display);
// //       setTop5CarMakes(top5);
// //       console.log('Top 5 Car Makes:', top5);  // Log top5
// //     }
// //   }, [carData]);  // ใช้ carData เป็น dependency


// //   useEffect(() => {
// //     if (carData && carData.length > 0) {
// //       const top5 = carData.slice(0, 5).map((car: IData) => car.make_display);
// //       setTop5CarMakes(top5);
// //       console.log(top5)
// //     }
// //   }, [carData]);


// //   useEffect(() => {
// //     if (Array.isArray(carData) && carData.length > 0) {
// //       const top5 = carData.slice(0, 5).map((car: IData) => car.make_display);
// //       setTop5CarMakes(top5);
// //       console.log(top5)
// //     }
// //   }, [carData]);

// //   useEffect(() => {
// //     if (carData.length > 0) {
// //       const top5 = carData.slice(0, 5).map((car: IData) => car.make_display);
// //       setTop5CarMakes(top5);
// //       console.log('Top 5 Car Makes:', top5);
// //     }
// //   }, [carData]); 

// //   useEffect(() => {
// //     console.log("it's working");
// //   }, []);
  
// //   useEffect(() => {
// //     if (carData && carData.length > 0) {
// //       console.log("Top 5 Cars: ", carData.slice(0, 5));
// //     }
// //   }, [carData]); 

// // const top5CarMakes = carData?.slice(0, 5).map((car:IData) => car.make_display);
// //         console.log(top5CarMakes);
//   return (
//    <div id='p2bg' style={{height:'100vh', width:'100vw',display: "flex", flexDirection: 'column',
//     justifyContent: "center",
//     alignItems: "center",
//     background: 'grey',
//    }}>
//     here lies the dev
//    </div>
//   );
// };
// export default page2