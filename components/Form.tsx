import Link from "next/link";
import { Button } from "@/components/ui/button";
import  Upload  from "@/components/UploadDnD";
import { Textarea } from "@/registry/new-york/ui/textarea";
import { Input } from "@/registry/new-york/ui/input";

const Form = ({ type, post, setPost, submitting, handleSubmit, imagePath, fileUrl }) => {
  return (
    <section className='w-full max-w-full flex-center flex-col mb-5'>
      <h1 className='head_text text-center'>
        <span className='fs-36 green_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-center max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7'
      >

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Post Title
            </span>
            <Input

              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              type='text'
              placeholder='Post Title'
              required
              className='form_input p-2'
              
            />
          </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Post Description
          </span>

          <Textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <select
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            className='form_input border'
          >
            <option value=''>Select a category</option>
            <option value='aitool'>AI Tool</option>
            <option value='programming'>Programming Language</option>
            <option value='Database'>Database</option>
        
          </select>
        </label>

        <div className="w-full">
          <Upload onImageUpload={(fileUrl) => {
          
            setPost({ ...post, imagePath: fileUrl });
          }} />
        </div>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Image Path
            </span>
            <Input

              value={post.imagePath}
              onChange={(e) => setPost({ ...post, imagePath: e.target.value })}
              type='text'
              placeholder='Image Path'
              required
              className='form_input'
              
            />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Post Link
            </span>
            <Input

              value={post.link}
              onChange={(e) => setPost({ ...post, link: e.target.value })}
              type='text'
              placeholder='Post Link'
              required
              className='form_input'
              
            />
          </label>



      
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <Button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-black text-white'
          >
            {submitting ? `${type}ing...` : type}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
