import Image from "next/image";

const Loading = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-full'>
      <Image
        src='assets/icons/loader.svg'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;
