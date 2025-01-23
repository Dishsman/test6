// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Car {
//   make_id: string;
//   make_display: string;
//   make_is_common: string;
//   make_country: string;
// }

// const examplepage2 =()=> {
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
// return( xd
//)
// export default examplepage2;