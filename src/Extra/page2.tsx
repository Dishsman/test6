import { useEffect, useState } from 'react';
import axios from 'axios';

interface IData {
  make_id: string;
  make_display: string;
  make_is_common: string;
  make_country: string;
}



const Page2 = () => {
    const [carData, setCarData] = useState<IData[]>([]);
    const [countryData, setCountryData] = useState<Map<string, string[]>>(new Map()); //มี key เป็น string (ชื่อประเทศ) และ value เป็น string[] (array ของ string) (ยี่ห้อ)  มีค่าเริ่มเป็น new mapไว้เก็บข้อมูล
  
    useEffect(() => {
      const fetchCar = async () => {
        try {
          const response = await axios.get(
            'https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt'
          );
  
          // ลบ ?( และ ) ออกจาก string ก่อน
          let cleanedData = response.data.replace(/^\?\(/, '').replace(/\)$/, '');
  
          // ลบข้อมูลที่ไม่เกี่ยวข้องหลังจาก JSON
          const jsonEndIndex = cleanedData.indexOf(']}');
          if (jsonEndIndex !== -1) {
            cleanedData = cleanedData.substring(0, jsonEndIndex + 2);
          }
  
          // แปลงข้อมูลที่ถูกล้างเป็น JSON
          let jsonResponse;
          try {
            jsonResponse = JSON.parse(cleanedData);
          } catch (err) {
            console.error("Error parsing cleaned data: ", err);
            return;
          }
  
          // ตั้งค่า carData  check1 ไม่ null/undefied check2 เป็นarrayไหม
          if (jsonResponse.Makes && Array.isArray(jsonResponse.Makes)) {
            setCarData(jsonResponse.Makes);
  
            // สร้างข้อมูลประเทศ (country) สำหรับโจทย์ a-d
            const countryMap = new Map<string, string[]>();
  
            jsonResponse.Makes.forEach((car: IData) => {
              if (car.make_country && car.make_display) {
                const country = car.make_country;
                const display = car.make_display;
  
                if (!countryMap.has(country)) {
                  countryMap.set(country, []);
                }
                countryMap.get(country)?.push(display);
              }
            });
  
            setCountryData(countryMap);
          } else {
            console.error("Makes is undefined or not an array", jsonResponse);
          }
        } catch (error) {
          console.error("Error fetching or parsing data: ", error);
        }
      };
  
      fetchCar();
    }, []);
  
    
    // โจทย์ a: แต่ละประเทศผลิตรถกี่ยี่ห้อ
    const carMakesCountByCountry = () => {
      const result: { [key: string]: number } = {};
      countryData.forEach((makes, country) => {
        result[country] = makes.length;
      });
      return result;
    };
  
    // โจทย์ b: แต่ละประเทศมีรถยี่ห้ออะไรบ้าง
    const carMakesByCountry = () => {
      const result: { [key: string]: string[] } = {};
      countryData.forEach((makes, country) => {
        result[country] = makes;
      });
      return result;
    };
  
    // โจทย์ c: USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
    // const usaCarMakes = () => { 
    //   return countryData.get("USA") || [];
    // };
    const usaCarMakes=()=>{
      const usaMakes = countryData.get("USA") || [];
      // const usaCount = usaMakes.length
      const usaCount = `${usaMakes.length}ยี่ห้อ`;
      const result = [usaCount, usaMakes]
    return result;
    }
    // โจทย์ d: รถยุโรป มีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
    const europeanCarMakes = () => {
    //   const europeanCountries = [
    //     "UK", "Germany", "France", "Italy", "Sweden", "Spain", "Czech Republic", "Netherlands", "Switzerland", "Russia", "Austria", "Belgium"
    //   ];
    const europeanCountries = [
        "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium",
    "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece",
    "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia",
    "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro",
    "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia",
    "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
    "Ukraine", "UK", "Vatican City"
     ];
      // let europeanMakes: string[] = [];
      // europeanCountries.forEach(country => {
      //   const makes = countryData.get(country);
      //   if (makes) {
      //     europeanMakes = europeanMakes.concat(makes);
      //   }
      // });
      // return europeanMakes;
      
    //   const europeanMakes: string[] = [];  
    //   europeanCountries.forEach(country => {
    //     const makeDisplay = countryData.get(country);
    //     if (makeDisplay) {
    //       europeanMakes.push(...makeDisplay);  
    //     }
    //   });
    //   return europeanMakes;
    // };

    const europeanMakes: string[] = [];  
    europeanCountries.forEach(country => {
      const makeDisplay = countryData.get(country);
      if (makeDisplay) {
        europeanMakes.push(...makeDisplay);  
      }
    });
    const europeanCount = `${europeanMakes.length}ยี่ห้อ`;
    const result = [europeanCount, europeanMakes]
    //ใช้แบบobject ก็ได้ // const result = {
//   count: europeanCount,
//   makes: europeanMakes
// };    
    return result;
  };
  
    useEffect(() => {
      console.log('Car Makes Count By Country: ', carMakesCountByCountry());
      console.log('Car Makes By Country: ', carMakesByCountry());
      console.log('USA Car Makes: ', usaCarMakes());
      console.log('European Car Makes: ', europeanCarMakes());
    }, [countryData]);
  
    return (
        <div id='bg' style={{
          height: "100vh", width: "100vw",
          // display: "flex", flexDirection: 'column',
          // justifyContent: "center",
          // alignItems: "center",
          background: 'grey',
          overflow: 'auto',
          padding: '2%'
        }}
        >
          <h1>Car Data</h1>
          {/* โจทย์ a: แต่ละประเทศผลิตรถกี่ยี่ห้อ */}
          {/* <h2>Count of Car Makes by Country</h2> */}
          <h2>A: แต่ละประเทศผลิตรถกี่ยี่ห้อ</h2>
          <p className='whiteText w80'>{JSON.stringify(carMakesCountByCountry(), null, 2)}</p>
      
          {/* โจทย์ b: แต่ละประเทศมีรถยี่ห้ออะไรบ้าง */}
          {/* <h2>Car Makes by Country</h2> */}
          <h2>B: แต่ละประเทศมีรถยี่ห้ออะไรบ้าง</h2>
          <p className='whiteText w80'>{JSON.stringify(carMakesByCountry(), null, 2)}</p>
      
          {/* โจทย์ c: USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง */}
          {/* <h2>USA Car Makes</h2> */}
          <h2>C: USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง</h2>
          <p className='whiteText w80'>{JSON.stringify(usaCarMakes(), null, 2)}</p>
          {/* <pre className='whiteText'> {usaCarMakes().toString()}</pre>
       */} 
       {/* pre จะแสงข้อมูลแบบรักษา formatเดิม */}
          {/* โจทย์ d: รถยุโรป มีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง */}
          {/* <h2>European Car Makes</h2> */}
          <h2>D: รถยุโรป มีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง</h2>
          <p className='whiteText w80'>{JSON.stringify(europeanCarMakes(), null, 2)}</p>
        </div>
      );
  };
export default Page2

//ล่าสุด
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface IData {
//   make_id: string;
//   make_display: string;
//   make_is_common: string;
//   make_country: string;
// }

// const Page2 = () => {
//   const [carData, setCarData] = useState<IData[]>([]);
//   const [countryData, setCountryData] = useState<Map<string, string[]>>(new Map());

//   useEffect(() => {
//     const fetchCar = async () => {
//       try {
//         const response = await axios.get(
//           'https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt'
//         );

//         // ลบ ?( และ ) ออกจาก string ก่อน
//         let cleanedData = response.data.replace(/^\?\(/, '').replace(/\)$/, '');

//         // ลบข้อมูลที่ไม่เกี่ยวข้องหลังจาก JSON
//         const jsonEndIndex = cleanedData.indexOf(']}');
//         if (jsonEndIndex !== -1) {
//           cleanedData = cleanedData.substring(0, jsonEndIndex + 2);
//         }

//         // แปลงข้อมูลที่ถูกล้างเป็น JSON
//         let jsonResponse;
//         try {
//           jsonResponse = JSON.parse(cleanedData);
//         } catch (err) {
//           console.error("Error parsing cleaned data: ", err);
//           return;
//         }

//         // ตั้งค่า carData
//         if (jsonResponse.Makes && Array.isArray(jsonResponse.Makes)) {
//           setCarData(jsonResponse.Makes);

//           // สร้างข้อมูลประเทศ (country) สำหรับโจทย์ a-d
//           const countryMap = new Map<string, string[]>();

//           jsonResponse.Makes.forEach((car: IData) => {
//             if (car.make_country && car.make_display) {
//               const country = car.make_country;
//               const make = car.make_display;

//               if (!countryMap.has(country)) {
//                 countryMap.set(country, []);
//               }
//               countryMap.get(country)?.push(make);
//             }
//           });

//           setCountryData(countryMap);
//         } else {
//           console.error("Makes is undefined or not an array", jsonResponse);
//         }
//       } catch (error) {
//         console.error("Error fetching or parsing data: ", error);
//       }
//     };

//     fetchCar();
//   }, []);  // useEffect จะทำงานแค่ครั้งเดียวเมื่อ component mount

//   // โจทย์ a: แต่ละประเทศผลิตรถกี่ยี่ห้อ
//   const carMakesCountByCountry = () => {
//     let result: { [key: string]: number } = {};
//     countryData.forEach((makes, country) => {
//       result[country] = makes.length;
//     });
//     return result;
//   };

//   // โจทย์ b: แต่ละประเทศมีรถยี่ห้ออะไรบ้าง
//   const carMakesByCountry = () => {
//     let result: { [key: string]: string[] } = {};
//     countryData.forEach((makes, country) => {
//       result[country] = makes;
//     });
//     return result;
//   };

//   // โจทย์ c: USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
//   const usaCarMakes = () => {
//     return countryData.get("USA") || [];
//   };

//   // โจทย์ d: รถยุโรป มีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
//   const europeanCarMakes = () => {
//     const europeanCountries = [
//       "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium",
//       "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
//       "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece",
//       "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia",
//       "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro",
//       "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia",
//       "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
//       "Ukraine", "UK", "Vatican City"
//     ];

//     let europeanMakes: string[] = [];
//     europeanCountries.forEach(country => {
//       const makes = countryData.get(country);
//       if (makes) {
//         europeanMakes = europeanMakes.concat(makes);
//       }
//     });
//     return europeanMakes;
//   };

//   // การคำนวณจำนวนยี่ห้อรถในยุโรป
//   const europeanCarMakesCount = europeanCarMakes().length;

//   // useEffect เพื่อตรวจสอบและแสดงผล
//   useEffect(() => {
//     console.log('Car Makes Count By Country: ', carMakesCountByCountry());
//     console.log('Car Makes By Country: ', carMakesByCountry());
//     console.log('USA Car Makes: ', usaCarMakes());
//     console.log('European Car Makes: ', europeanCarMakes());
//     console.log('European Car Makes Count: ', europeanCarMakesCount);
//   }, [countryData]);

//   return (
//     <div>
//       <h1>Car Data</h1>

//       {/* โจทย์ a: แต่ละประเทศผลิตรถกี่ยี่ห้อ */}
//       <h2>Count of Car Makes by Country</h2>
//       <pre>{JSON.stringify(carMakesCountByCountry(), null, 2)}</pre>

//       {/* โจทย์ b: แต่ละประเทศมีรถยี่ห้ออะไรบ้าง */}
//       <h2>Car Makes by Country</h2>
//       <pre>{JSON.stringify(carMakesByCountry(), null, 2)}</pre>

//       {/* โจทย์ c: USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง */}
//       <h2>USA Car Makes</h2>
//       <pre>{JSON.stringify(usaCarMakes(), null, 2)}</pre>

//       {/* โจทย์ d: รถยุโรป มีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง */}
//       <h2>European Car Makes</h2>
//       <pre>{JSON.stringify(europeanCarMakes(), null, 2)}</pre>
      
//       {/* จำนวนยี่ห้อรถที่ผลิตในยุโรป */}
//       <h2>European Car Makes Count</h2>
//       <pre>{europeanCarMakesCount}</pre>
//     </div>
//   );
// };

// export default Page2;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// interface IData {
//   make_id: string;
//   make_display: string;
//   make_is_common: string;
//   make_country: string;
// }
// const Page2 = () => {
//   const [carData, setCarData] = useState<IData[]>([]);

//   useEffect(() => {
//     const fetchCar = async () => {
//       try {
//         const response = await axios.get(
//           'https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt'
//         );

//         // ตรวจสอบโครงสร้างของข้อมูล
//         console.log("Full API Response: ", response.data);  // ดูว่า response มีลักษณะอย่างไร
//         console.log("Makes Data: ", response.data.Makes);  // ตรวจสอบข้อมูลใน Makes

//         // ตรวจสอบว่า Makes เป็น array หรือไม่
//         if (Array.isArray(response.data?.Makes)) {
//           setCarData(response.data.Makes);  // ถ้าเป็น array ก็สามารถ set ได้เลย
//         } else {
//           console.error('Makes is not an array:', response.data?.Makes);
//         }
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchCar();
//   }, []);  // useEffect จะทำงานแค่ครั้งเดียวเมื่อ component mount

//   useEffect(() => {
//     console.log('carData:', carData);  // ตรวจสอบ carData ทุกครั้งที่มีการเปลี่ยนแปลง

//     if (carData && carData.length > 0) {
//       // คัดเลือก 5 ยี่ห้อแรก
//       const top5 = carData.slice(0, 5).map((car: IData) => car.make_display);
//       console.log('Top 5 Car Makes:', top5);  // Log top5
//     }
//   }, [carData]);  // ใช้ carData เป็น dependency เพื่อทำงานเมื่อ carData เปลี่ยนแปลง
// };

// export default Page2;


// const page2 =()=> {
//     const [carData, setCarData] = useState<IData[]>([]);
//     const [top5CarMakes, setTop5CarMakes] = useState<string[]>([]);
//     useEffect(() => {
        
//         const fetchCars = async () => {
//             try {
//               const response = await fetch(
//                 'https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt'
//               );
              
//               if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//               }
          
//               // ดึงข้อมูลเป็น text ก่อน
//               const textData = await response.text();
//               console.log('Data from API:', textData); // ดูข้อมูล raw
          
//               // แปลงข้อมูลจาก text เป็น JSON
//               const data = JSON.parse(textData); // แปลงจาก text เป็น JSON
          
//               // ตรวจสอบว่า `Makes` มีอยู่ใน data และอัพเดตสถานะ carData
//               if (data?.Makes) {
//                 setCarData(data.Makes);
//               } else {
//                 console.error("No 'Makes' found in data");
//               }
//             } catch (error) {
//               console.error("Error fetching data:", error);
//             }
//           };
//         fetchCars(); // เรียกใช้ฟังก์ชันเมื่อ component ถูก mount
//       }, []);
//       useEffect(() => {
//         console.log("it's working");
//       }, []);

// return (
//        <div id='p2bg' style={{height:'100vh', width:'100vw',display: "flex", flexDirection: 'column',
//         justifyContent: "center",
//         alignItems: "center",
//         background: 'grey',
//        }}>
//         here lies the dev
//        </div>
//       );
//     };
//     export default page2