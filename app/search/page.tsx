// Since the existing code was omitted for brevity and the updates indicate undeclared variables,
// I will assume the variables are used within the component's logic and declare them at the top
// of the component function scope.  Without the original code, this is the safest approach.
// If the variables are meant to be imported, the import statement would need to be added instead.

"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Search() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = "/dashboard/products"

  const [search, setSearch] = useState("")

  useEffect(() => {
    setSearch(searchParams.get("search") || "")
  }, [searchParams])

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set("search", term)
    } else {
      params.delete("search")
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Search invoices..."
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        value={search}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}

