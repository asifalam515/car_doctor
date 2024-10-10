import Swal from "sweetalert2";

const BookingRow = ({ booking }) => {
  const { service_id, _id, service, price, img, email, date, customerName } =
    booking;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // Everything  will be done from here
      console.log(id);
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <tr>
        <th>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn btn-sm btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                {img && <img src={img} alt="" />}
              </div>
            </div>
            <div>
              <div className="font-bold"> {customerName} </div>
            </div>
          </div>
        </td>
        <td> {service} </td>
        <td> {price} </td>
        <th>
          <button className="btn btn-ghost btn-xs"> {date} </button>
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
