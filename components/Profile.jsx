import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full p-10'>
      <h1 className='text-left text-3xl'>{name} Profile</h1>
      <p className='mt-6 max-w-3xl text-left text-lg text-slate-600 dark:text-slate-400'>{desc}</p>

      <div className='prompt_layout mt-10'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
