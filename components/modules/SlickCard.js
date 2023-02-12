import Image from "next/image";

const SlickCard = ({ avatar, name, job, time }) => {
  return (
    <div className="w-[300px] h-[200px] rounded-2xl bg-gradient-to-tl from-pink-200 to-white mx-auto ">
      <div className="w-full p-4 pb-1 flex items-center justify-between ">
        <div className="w-full flex items-start justify-start gap-3">
          <Image src={avatar} className="w-12 h-12 rounded-full" />
          <div className="">
            <p>
              {name}
              <span className="ml-3 text-slate-500 text-sm font-light">
                {time}
              </span>
            </p>
            <p className="text-slate-500 text-sm font-light">{job}</p>
          </div>
        </div>
      </div>
      <p className="w-full mt-6 px-4 text-sm text-slate-800 font-light text-justify">
        Bake Away is a GENIUS idea! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Reiciendis blanditiis possimus 
      </p>
    </div>
  );
};

export default SlickCard;
