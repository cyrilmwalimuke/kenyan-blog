import { Facebook, Instagram, MapPin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
    <div className="container px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-red-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">KP</span>
            </div>
            <span className="text-xl font-bold">Kenyan People</span>
          </div>
          <p className="text-gray-400 mb-4">
            Your premier destination for authentic Kenyan stories, news, and insights across all aspects of life.
          </p>
          <div className="flex space-x-4">
            <button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </button>
            <button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </button>
            <button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </button>
            <button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Technology
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Business
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                News
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Lifestyle
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Advertise
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>info@kenyanpeople.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>+254 795048848</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 bg-gray-800 h-1 w-full" />

      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kenya Blog. All rights reserved.</p>
        <p>Made with ❤️ in Kenya</p>
      </div>
    </div>
  </footer>)
}
