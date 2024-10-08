'use client';

import React from 'react';
import type { TaskStatus } from '@/types/task';
import { SearchIcon } from './ui/icons/SearchIcon';
import { SpinnerIcon } from './ui/icons/SpinnerIcon';

function SearchStatus({ searching }: { searching: boolean }) {
  return (
    <div aria-hidden className="absolute left-4 top-[41px]">
      {searching ? (
        <div className="h-fit w-fit animate-spin">
          <SpinnerIcon width={16} height={16} className="text-gray" />
        </div>
      ) : (
        <SearchIcon width={16} height={16} className="text-gray" />
      )}
    </div>
  );
}

export default function Search() {
  return (
    <form className="relative flex w-full flex-col gap-1 sm:w-fit" key={'' as TaskStatus}>
      <label className="font-semibold uppercase" htmlFor="search">
        Search
      </label>
      <input
        id="search"
        className="w-full pl-10 sm:w-96"
        name="q"
        placeholder="Search in task title or description..."
        type="search"
      />
      <SearchStatus searching={false} />
    </form>
  );
}

export function SearchSkeleton() {
  return <input className="mt-7 w-full sm:w-96" placeholder="Loading..." disabled />;
}
