import Image from "next/image";
import banner from "@/public/404-Error.svg";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="">
        <h3 className="text-5xl mb-16"> Seems Like You Are Lost </h3>
        <Link className="text-pink-500 underline mx-auto mt-8" href={"/"}>
          Back To Home
        </Link>
      </div>
      <Image src={banner} />
    </div>
  );
};

export default ErrorPage;
