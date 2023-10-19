import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as Yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
  
  const AddPackage = () => {

    return (
      <p>test</p>
    );
    // const validationSchema = Yup.object().shape({
    //     Image: Yup.string().required("Image is required"),
    //     Title: Yup.string().required("Title is required"),
    //     Duration: Yup.string().required("Duration is required"),
    //     City: Yup.string().required("City is required"),
    //     Country: Yup.string().required("Country is required"),
    //     Amount: Yup.string().required("Amount is required"),
    //     Offer: Yup.string().required("Offer is required"),
    //     OfferDuration: Yup.string().required("Offer Duration is required"),
    //     Pickup: Yup.string().required("Pickup is required"),
    //     Minmember: Yup.string().required("Minmember is required"),
    //     Maxmember: Yup.string().required("Experience is required"),
    //     Languagefortour: Yup.string().required("Languagefortour is required"),
    //     Tourguidename: Yup.string().required("Tourguidename is required"),
    //     Tourguideimage: Yup.string().required("Tourguideimage is required"),
    // });
  
    // // const {
    // //   register,
    // //   handleSubmit,
    // //   formState: { errors },
    // // } = useForm({
    // //   resolver: yupResolver(validationSchema),
    // // });
  
    // const onSubmit = (data: any) => {
    //   // Display form data on success
    //   alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    // };
  
    // return (
    //   <div className="w-full">
    //     {/* Button */}
    //     <div className="w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between">
    //       <div className="text-[#029e9d] text-sm">
    //         <a href="#" className="anchor-tag">
    //           Dashboard
    //         </a>{" "}
    //         / <span className="text-[#7987a1]">Add Package</span>
    //       </div>
  
    //       <div className="">
    //         <button className="Export-button">
    //           <Link to="/allpackagelist">
    //             <span>
    //               <FontAwesomeIcon icon={faArrowLeft} />
    //             </span>
    //             <span className="pl-[10px]">Back to List</span>
    //           </Link>
    //         </button>
    //       </div>
    //     </div>
  
    //     {/* Add candidate form */}
    //     <div className="py-4 add-vacancy-form px-[3.5rem]">
    //       <div className="mt-5">
    //         <span className="text-[16px] font-bold">Add Package</span>
    //       </div>
  
    //       <form
    //         className="w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-10 gap-y-10 mt-10"
    //         onSubmit={handleSubmit(onSubmit)}
    //       >
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Image">Image</label>
    //           <input
    //             type="file"
    //             id="Image"
    //             {...register("Image")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Image?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Title">Title</label>
    //           <input
    //             type="text"
    //             id="Title"
    //             {...register("Title")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Title?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Duration">Duration</label>
    //           <input
    //             type="time"
    //             id="Duration"
    //             {...register("Duration")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Duration?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="City">City</label>
    //           <input
    //             type="text"
    //             id="City"
    //             {...register("City")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.City?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Country">Country</label>
    //           <input
    //             type="text"
    //             id="Country"
    //             {...register("Country")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Country?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Amount">Amount</label>
    //           <input
    //             type="number"
    //             id="Amount"
    //             {...register("Amount")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Amount?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Offer">Offer</label>
    //           <input
    //             type="number"
    //             id="Offer"
    //             {...register("Offer")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Offer?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="OfferDuration">Offer Duration-days</label>
    //           <input
    //             type="number"
    //             id="OfferDuration"
    //             {...register("OfferDuration")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.OfferDuration?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Pickup">Pickup</label>
    //           <input
    //             type="boolean"
    //             id="Pickup"
    //             {...register("Pickup")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Pickup?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Minmember">Min member</label>
    //           <input
    //             type="number"
    //             id="Minmember"
    //             {...register("Minmember")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Minmember?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Maxmember">Max member</label>
    //           <input
    //             type="number"
    //             id="Maxmember"
    //             {...register("Maxmember")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Maxmember?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Languagefortour">Language for tour</label>
    //           <input
    //             type="text"
    //             id="Languagefortour"
    //             {...register("Languagefortour")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Languagefortour?.message}
    //           </div>
    //         </div>
  
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Tourguidename">Tour guide name</label>
    //           <input
    //             type="text"
    //             id="Tourguidename"
    //             {...register("Tourguidename")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Tourguidename?.message}
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full gap-2">
    //           <label htmlFor="Tourguideimage">Tour guide Image</label>
    //           <input
    //             type="file"
    //             id="Tourguideimage"
    //             {...register("Tourguideimage")}
    //             className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
    //           />
    //           <div className="invalid-feedback text-red-700 text-[12px]">
    //             {errors.Tourguideimage?.message}
    //           </div>
    //         </div>
              
    //         <div className="flex justify-center mt-9">
    //           <button type="submit" className="Export-button">
    //             <span className="text-[15px]">Submit</span>
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // );
  };
  
  export default AddPackage;
  