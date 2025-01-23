// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Car {
//   make_id: string;
//   make_display: string;
//   make_is_common: string;
//   make_country: string;
// }

// const App: React.FC = () => {
//   const [carData, setCarData] = useState<Car[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchCarData = async () => {
//       try {
//         const response = await axios.get(
//           'https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt'
//         );
//         console.log("API Data: ", response.data); // ดูข้อมูลที่ได้รับจาก API
//         setCarData(response.data.Makes); // บันทึกข้อมูลที่ได้รับ
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchCarData();
//   }, []);

//   // ฟังก์ชันที่ใช้ในการกรองข้อมูลจากประเทศ
//   const getCountryBrandsCount = (country: string): number => {
//     const filteredData = carData?.filter(car => car.make_country.toLowerCase() === country.toLowerCase());
//     console.log(`Filtered Data for ${country}: `, filteredData); // เช็คข้อมูลที่กรอง
//     return filteredData?.length ?? 0;
//   };

//   const getCountryBrands = (country: string): string[] => {
//     const filteredData = carData?.filter(car => car.make_country.toLowerCase() === country.toLowerCase());
//     console.log(`Brands from ${country}: `, filteredData?.map(car => car.make_display)); // เช็คข้อมูลแบรนด์
//     return filteredData?.map(car => car.make_display) ?? [];
//   };

//   const getUSAData = (): string[] => {
//     const usaData = carData?.filter(car => car.make_country.toLowerCase() === 'usa');
//     console.log("USA car brands: ", usaData?.map(car => car.make_display)); // ดูข้อมูลของ USA
//     return usaData?.map(car => car.make_display) ?? [];
//   };

//   const getEuropeanCars = (): string[] => {
//     const europeanCountries = [
//       'uk', 'germany', 'italy', 'france', 'czech republic', 'sweden', 'austria', 'switzerland', 'spain', 'belgium'
//     ];
//     const europeanCars = carData?.filter(car => europeanCountries.includes(car.make_country.toLowerCase()));
//     console.log("European car brands: ", europeanCars?.map(car => car.make_display)); // ดูข้อมูลของ European cars
//     return europeanCars?.map(car => car.make_display) ?? [];
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Car Brands Data</h1>

//       <div>
//         <h2>Number of car brands by country:</h2>
//         <p>Italy: {getCountryBrandsCount('Italy')}</p>
//         <p>USA: {getCountryBrandsCount('USA')}</p>
//         <p>Germany: {getCountryBrandsCount('Germany')}</p>
//         <p>UK: {getCountryBrandsCount('UK')}</p>
//       </div>

//       <div>
//         <h2>Car brands by country:</h2>
//         <h3>Italy:</h3>
//         <ul>
//           {getCountryBrands('Italy').map((brand, index) => (
//             <li key={index}>{brand}</li>
//           ))}
//         </ul>

//         <h3>USA:</h3>
//         <ul>
//           {getCountryBrands('USA').map((brand, index) => (
//             <li key={index}>{brand}</li>
//           ))}
//         </ul>

//         <h3>Germany:</h3>
//         <ul>
//           {getCountryBrands('Germany').map((brand, index) => (
//             <li key={index}>{brand}</li>
//           ))}
//         </ul>

//         <h3>UK:</h3>
//         <ul>
//           {getCountryBrands('UK').map((brand, index) => (
//             <li key={index}>{brand}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2>USA car brands:</h2>
//         <p>Number of brands from USA: {getUSAData().length}</p>
//         <ul>
//           {getUSAData().map((brand, index) => (
//             <li key={index}>{brand}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2>European car brands:</h2>
//         <p>Number of European brands: {getEuropeanCars().length}</p>
//         <ul>
//           {getEuropeanCars().map((brand, index) => (
//             <li key={index}>{brand}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;
