import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Image
        src='assets/icons/loader.svg'
        width={120}
        height={120}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;
