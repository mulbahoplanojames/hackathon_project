import Image from 'next/image';
import { CoursesType, CoursesPeriodType } from '@/types/types';

export const CoursesCards = (props: CoursesType) => {
  return (
    <div className='bg-[#fff] p-2 rounded-2xl shadow-lg grid grid-rows-[1.5fr] max-w-[600px] dark:bg-sidebar'>
        <div className='pb-2'>
          <Image src={props.imageUrl} alt={props.title} width={0} height={0} style={{width: '100%', maxWidth: '600px', height: 'auto'}}/>
        </div>
        <div className='p-2'>
            <h3 className='text-blue-500 text-xl py-3'>{props.title}</h3>
            <h1 className='text-2xl font-[600] pb-2'>{props.description}</h1>
            <aside className='flex justify-between py-2 gap-4'>
              <p className='text-l text-[#8a8a8a]'>{props.date}</p>
              <p className='text-base flex items-center justify-center text-[#8a8a8a] bg-[#ddd] dark:bg-[#333] rounded-3xl px-2'>{props.views}</p>
            </aside>
        </div>
    </div>
  )
}

export const CoursePeriodCard = (props: CoursesPeriodType) => {
  return (
    <div className='border-2 rounded-2xl px-2 py-4 dark:bg-sidebar'>
        <article className='flex gap-2 items-center '>
            <Image src={props.iconUrl} alt={props.status} width={80} height={80}/>
            <h1 className='text-xl sm:text-2xl font-[600]'>{props.status}</h1>
        </article>
        <h1 className='text-2xl font-[600] pl-5'>{props.numberOfTime}</h1>
    </div>
  )
}
