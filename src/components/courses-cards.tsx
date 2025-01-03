import Image from 'next/image';
import { CoursesType, CoursesPeriodType } from '@/types/types';

export const CoursesCards = (props: CoursesType) => {
  return (
    <div className='  bg-[#fff] p-2 rounded-2xl shadow-lg grid grid-rows-[1.5fr] max-w-[600px] dark:bg-[#131313]'>
        <div className='' pb-2>
          <Image src={props.imageUrl} alt={props.title} width={0} height={0} style={{width: '100%', maxWidth: '600px', height: 'auto'}}/>
        </div>
        <div className='p-2'>
            <h3 className='text-blue-500 text-xl'>{props.title}</h3>
            <h1 className='text-2xl font-[600]'>{props.description}</h1>
            <aside className='flex justify-between py-2 '>
              <p className='text-xl text-[#8a8a8a]'>{props.date}</p>
              <p className='text-xl text-[#8a8a8a] bg-[#ddd] dark:bg-[#333] rounded-3xl px-2'>{props.views}</p>
            </aside>
        </div>
    </div>
  )
}

export const CoursePeriodCard = (props: CoursesPeriodType) => {
  return (
    <div className='border-2 rounded-2xl p-4'>
        <article className='flex gap-2 items-center '>
            <Image src={props.iconUrl} alt={props.status} width={80} height={80}/>
            <h1 className='text-2xl font-[600]'>{props.status}</h1>
        </article>
        <h1 className='text-2xl font-[600] pl-5'>{props.numberOfTime}</h1>
    </div>
  )
}
