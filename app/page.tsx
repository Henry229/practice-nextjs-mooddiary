import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className='container mx-auto py-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>List of Diaries</h1>
        <Link href='/new'>
          <Button>
            <PlusCircle /> Add New Diary
          </Button>
        </Link>
      </div>
    </div>
  );
}
