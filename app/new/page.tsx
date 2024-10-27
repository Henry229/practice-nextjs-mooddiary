'use client';

import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { redirect, useRouter } from 'next/navigation';

export default function NewPage() {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date || !content.trim()) return;

    console.log(date, content);
    router.push('/');
  };

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold'>Add New Diary</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <Calendar
            mode='single'
            selected={date}
            onSelect={(date) => setDate(date || new Date())}
            className='rounded-md border'
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Write your diary here...'
            className='min-h-[300px] rounded-md border'
          />
          <div className='flex justify-end gap-4'>
            <Button
              type='button'
              variant='outline'
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
