

// const Extra = () => {
//   const handleDelete = (id) => {
//     console.log(id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(http://localhost:5000/myJobs/${id}, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", "Your file has been deleted.", "success");

//               setMyJobs(myJobs.filter((myJob) => myJob._id !== id));
//             }
//           });
//       }
//     });
//   };






//   const handleDelete = id => {
//         const proceed = confirm('Are You sure you want to delete');
//         if (proceed) {
//             fetch(`https://car-doctor-server-topaz-one.vercel.app/bookings/${id}`, {
//                 method: 'DELETE'
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     if (data.deletedCount > 0) {
//                         alert('deleted successful');
//                         const remaining = bookings.filter(booking => booking._id !== id);
//                         setBookings(remaining);
//                     }
//                 })
//         }
//     }
//     return (
//       <div>
       
       
//       </div>
//     );
// };

// export default Extra;