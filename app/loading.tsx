import Image from "next/image";

const Loading = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <Image
        src='/assets/icons/loader.svg'
        width={50}
        height={50}
        alt='loader'
        className='text-blue-700 object-contain'
      />
    </div>
  );
};

export default Loading;



