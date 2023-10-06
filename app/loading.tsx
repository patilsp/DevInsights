import Image from "next/image";

const Loading = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <Image
        src='/assets/icons/loader.svg' // Use an absolute path to your loader image
        width={120}
        height={120}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;



