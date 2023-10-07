import Link from "next/link";
import { Button } from "@/components/ui/button";
import  Upload  from "@/components/UploadDnD";
import { Textarea } from "@/registry/new-york/ui/textarea";
import { Input } from "@/registry/new-york/ui/input";
import DatePickerWithRange from "@/registry/new-york/date-picker-with-range";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Label } from "@/registry/new-york/ui/label"

const Form = ({ type, post, setPost, submitting, handleSubmit, imagePath, fileUrl }) => {
  return (
    <section className='flex-center mb-5 w-full max-w-full flex-col'>
      <h1 className='head_text text-center'>
        <span className='fs-36 green_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-center max-w-md'>
        {type} and share amazing posts with the world.
      </p>
     
      <form
        onSubmit={handleSubmit}
        className='bg-slat-900 mt-10 flex w-full max-w-2xl flex-col gap-7 rounded-xl border p-4 text-card-foreground shadow'
      >

          <label>             
            <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
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
          <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
            Post Description
          </span>

          <Textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea'
            maxLength={300}
          />
        </label>


        <div className="grid gap-2">
            <Label htmlFor="area">Post Category</Label>
              <select
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              required
              className='form_input border   bg-transparent'
            >
              <option value=''>Select a category</option>
              <option value='AI-Tool'>AI Tool</option>
              <option value='programming'>Programming Language</option>
              <option value='Database'>Database</option>
              <option value='Library'>Library</option>
              <option value='Framework'>Framework</option>
              <option value='Extension'>Extension</option>
              <option value='other'>Other</option>
          
            </select>
            
          </div>

        <div className="w-full rounded-md border shadow">
          <Upload onImageUpload={(fileUrl) => {
          
            setPost({ ...post, imagePath: fileUrl });
          }} />
        </div>
          <label>
            <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
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

          {/* <label>
            <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Pick a date
            </span>

            <DatePickerWithRange 
            value={post.createdDate}
            onChange={(e) => setPost({ ...post, createdDate: e.target.value })}
            type='date'
            placeholder='Date'
            className="[&>button]:w-[260px]" />
             
          </label> */}

          <label>
            <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Created Date
            </span>
            <Input
              value={post.createdDate}
              onChange={(e) => setPost({ ...post, createdDate: e.target.value })}
              type='text'
              placeholder='Created Date'
              
              className='form_input'
            />
          </label>


          <label>
            <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
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
          <Link href='/' className='btn-default'>
            Cancel
          </Link>

          <Button
            type='submit'
            disabled={submitting}
            className='btn-primary'
          >
            {submitting ? `${type}ing...` : type}
          </Button>
        </div>
      </form>

    </section>
  );
};

export default Form;
