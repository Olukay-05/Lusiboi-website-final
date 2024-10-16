import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button, useToast } from "@chakra-ui/react"; // Chakra UI toast for notifications

import billboard from "../assets/contact-us-image.svg";
import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";

function ContactUs() {
  const [articleRef, isVisible] = useAnimateOnScroll(0.2);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const toast = useToast();

  const sendEmail = async (data) => {
    const fullName = `${data.firstName} ${data.lastName}`;
    const formData = {
      from_name: fullName,
      user_email: data.email,
      user_phone: data.phone,
      message: data.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSuccess(true);
      toast({
        title: "Email sent successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to send email.",
        description: error.text,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <section
        id="contact"
        className="  relative z-0 mt-20 pt-10  bg-yellow-50 border-b-2  text-slate-800 "
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex text-[#a86a33] flex-col items-center justify-center py-14  lg:pb-[4rem]">
            <h2 className=" text-lg md:text-2xl font-bold lg:text-3xl xl:text-4xl">
              Get in Touch
            </h2>
            <p className=" text-xs sm:text-sm md:text-base text-[#9d6c40] lg:text-lg">
              Any question or remarks? Just write us a message
            </p>
          </div>
          <div
            ref={articleRef}
            className={`flex opacity-0 items-center justify-center pb-[15rem] ${
              isVisible
                ? "animate__animated animate__fadeIn animate__delay-1s opacity-5"
                : ""
            }`}
          >
            <div
              className={`hidden xl:block hover:shadow-md rounded-l-lg border border-[#9d6c40] border-r-0 ${
                Object.keys(errors).length > 0 ? "w-[28.2rem]" : "w-[25.2rem]"
              }`}
            >
              <img
                src={billboard}
                alt="image"
                className="w-full rounded-l-lg"
              />
            </div>
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="block border border-[#9d6c40] lg:border-l-0  bg-yellow-50 sm:grid rounded-lg lg:rounded-r-lg lg:rounded-l-none grid-cols-2 items-center gap-4 p-4 py-12 md:p-8 sm:px-8  md:px-8 mx-0 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-0 lg:px-[4rem] lg:py-[3rem] hover:shadow-md "
            >
              {/* First Name */}
              <div className="flex flex-col w-72 sm:w-80 md:w-[23rem] lg:w-80 pb-4 sm:pb-0">
                <label
                  htmlFor="firstName"
                  className="block text-[#9d6c40] mb-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  // ref={(el) => (inputRefs.current[0] = el)}
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  className={`border rounded-lg p-2 sm:p-2 md:p-2
              text-sm sm:text-base md:text-lg bg-yellow-50
              w-full sm:w-[80%] md:w-[80%] lg:w-full
              ${errors.firstName ? "border-red-500" : "border-[#9d6c40]"}
              focus:ring-2 focus:ring-opacity-50
              ${
                errors.firstName ? "focus:ring-red-500" : "focus:ring-green-500"
              }
              placeholder-gray-400 
              transition duration-300 ease-in-out
              focus:outline-none focus:bg-white
              focus:border-green-500 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col w-72 sm:w-80 md:w-[23rem] lg:w-80 pb-4 sm:pb-0">
                <label
                  htmlFor="lastName"
                  className="block text-[#9d6c40] mb-2 text-xs sm:text-sm font-bold md:text-base lg:text-lg"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  // ref={(el) => (inputRefs.current[1] = el)}
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className={`border bg-yellow-50 rounded-lg p-2 sm:p-2 md:p-2
              text-sm sm:text-base md:text-lg
              w-full sm:w-[80%] md:w-[80%] lg:w-full ${
                errors.lastName ? "border-red-500" : "border-[#9d6c40]"
              } focus:ring-2 focus:ring-opacity-50 ${
                    errors.lastName
                      ? "focus:ring-red-500"
                      : "focus:ring-green-500"
                  } placeholder-gray-400
              transition duration-300 ease-in-out
              focus:outline-none focus:bg-white
              focus:border-green-500 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col w-72 sm:w-80 md:w-[23rem] lg:w-80 pb-4 sm:pb-0">
                <label
                  htmlFor="email"
                  className="text-[#9d6c40] mb-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  // ref={(el) => (inputRefs.current[2] = el)}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className={`border rounded-lg p-2 sm:p-2 md:p-2
              text-sm sm:text-base bg-yellow-50 md:text-lg
              w-full sm:w-[80%] md:w-[80%] lg:w-full  ${
                errors.email ? "border-red-500" : "border-[#9d6c40]"
              } focus:ring-2 focus:ring-opacity-50 ${
                    errors.email ? "focus:ring-red-500" : "focus:ring-green-500"
                  }placeholder-gray-400
              transition duration-300 ease-in-out
              focus:outline-none focus:bg-white
              focus:border-green-500 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="w-72 flex flex-col sm:w-80 md:w-[23rem] lg:w-80 pb-4 sm:pb-0">
                <label
                  htmlFor="phone"
                  className="text-[#9d6c40] mb-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  // ref={(el) => (inputRefs.current[3] = el)}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Enter a valid 11-digit phone number",
                    },
                  })}
                  className={`border bg-yellow-50 rounded-lg p-2 sm:p-2 md:p-2
              text-sm sm:text-base md:text-lg
              w-full sm:w-[80%] md:w-[80%] lg:w-full ${
                errors.phone ? "border-red-500" : "border-[#9d6c40]"
              } focus:ring-2 focus:ring-opacity-50 ${
                    errors.phone ? "focus:ring-red-500" : "focus:ring-green-500"
                  } placeholder-gray-400
              transition duration-300 ease-in-out
              focus:outline-none focus:bg-white
              focus:border-green-500 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div className=" col-span-2 row-span-2">
                <label
                  htmlFor="message"
                  className="block text-[#9d6c40] mb-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  // ref={(el) => (inputRefs.current[4] = el)}
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className={`border bg-yellow-50 rounded-lg p-2 sm:p-2 md:p-3
              text-sm sm:text-base md:text-lg
              w-full sm:w-[99%] md:w-[98%] lg:w-full ${
                errors.message ? "border-red-500" : "border-[#9d6c40]"
              } focus:ring-2 focus:ring-opacity-50 ${
                    errors.message
                      ? "focus:ring-red-500"
                      : "focus:ring-green-500"
                  } placeholder-gray-400
              transition duration-300 ease-in-out
              focus:outline-none focus:bg-white
              focus:border-green-500 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base`}
                  placeholder="Write your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="col-span-2">
                {/* <Button type="small_black" onSubmit="submit">
                Submit
              </Button> */}

                <Button
                  type="submit"
                  bg="#9d6c40"
                  color="#fefce8"
                  _hover={{ bg: "#b37c4d" }}
                  variant="solid"
                  size="md"
                  disabled={isSubmitting}
                  width="100%"
                  mt={{ base: "10px", md: "0" }}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>

                {/* <Button type="small_black">Submit</Button> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
