"use client"
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [blogs,setBlogs] = useState([])
  console.log(blogs)

  useEffect(
    ()=>{
      const fetchBlogs = async () =>{
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4d161ff488b54a45baf181aafac97951')
        const data = await res.json()
        console.log(data)
        setBlogs(data)
      }
      fetchBlogs()
    }


  ,[])




  return (


        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>

<div className="container flex h-16 items-center justify-between px-4">
      <div className="flex items-center space-x-4">        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-red-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">KP</span>
          </div>
          <span className="text-xl font-bold">KenyanPeople</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-6 ">
        <Link href="#" className="">
         News
        </Link>
        <Link href="#" className=" ">
          Business
        </Link>
        <Link href="#" className="">
          Jobs
        </Link>
        <Link href="#" className="">
          Technology
        </Link>

        <Link href="#" className="">
          Education
        </Link>

        
        <Link href="#" className="">
          Lifestyle
        </Link>

      </nav>

      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block border-gray-500 rounded-sm border-[1.2px] py-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input placeholder="Search articles..." className="pl-10 w-64 focus:outline-none" />
        </div>
        <button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </div>

            

        </header>




  )
}
