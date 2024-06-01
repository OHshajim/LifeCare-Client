import Swal from 'sweetalert2';

const SweetAlert = () => {
  // success
  Swal.fire({
    title: 'Successfully',
    text: '...',
    icon: "success"
  });

  // error
  Swal.fire({
    title: 'Something Wrong',
    text: 'Please, Try Again...!',
    icon: "error"
  });


  // ask to delete
  Swal.fire({
    title: "Log out now?",
    text: " Are you sure you want to delete?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it"
  }).then((result) => {
    if (result.isConfirmed) {
      // sweetAlert
      Swal.fire({
        title: "Successfully deleted",
        text: "......",
        icon: "success"
      });
    }
  })
}

export default SweetAlert;