import Image from "next/image";

const Loading = () => {
  return (
    <div className='flex-center w-full'>
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
