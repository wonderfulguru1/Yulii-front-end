// // useAuth.ts
// import { auth } from '@/firebase';
// import { useEffect, useState } from 'react';
// import firebase from 'firebase/app';

// const useAuth = () => {
//   const [user, setUser] = useState<firebase. | null>(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         setUser(authUser);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return { user };
// };

// export default useAuth;
