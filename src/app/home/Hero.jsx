"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import "./styles.css"; 

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[40rem] from-[#396bdf] to-[#1e4db7] text-white bg-[url('https://res.cloudinary.com/dz5ptyifl/image/upload/v1723826237/back_xijdz6.png')] bg-cover bg-center">
      <header className="flex items-center justify-between p-4 md:px-8 bg-opacity-70 backdrop-blur-md rounded-b-xl fade-in h-15">
        <div className="flex items-center space-x-2 fade-in">
          <LogInIcon className="w-8 h-8 text-yellow-400 transition-transform duration-300 hover:scale-110" />
          <span className="text-xl font-bold transition-colors duration-300 hover:text-yellow-300">
            Vinyasahealth
          </span>
        </div>
        <nav className="hidden space-x-6 md:flex fade-in">
          <a href="#" className="transition-colors duration-300 hover:text-yellow-300 ">
            Home
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-yellow-300 ">
            About Us
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-yellow-300 ">
            Location
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-yellow-300">
            Health News
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-yellow-300 ">
            Careers
          </a>
        </nav>
        <div className="flex items-center space-x-4 fade-in">
          <a href="#" className="hidden md:block transition-colors duration-300 hover:text-yellow-300 ">
            Sign up
          </a>
          <Button variant="outline" className="bg-white text-[#1e4db7] transition-transform duration-300 hover:scale-105 fade-in">
            Login
          </Button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center p-4 text-center md:flex-row mt-8 md:text-left md:justify-between md:px-8 fade-in">
        <div className="space-y-4 md:max-w-lg">
          <Badge variant="secondary" className="animate-pulse fade-in">
            #1 Therapist focused Organisation
          </Badge>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl transition-transform duration-500 hover:translate-x-2">
            Best Of Care <br /> Close To Home
          </h1>
          <p className="text-lg transition-opacity duration-500 hover:opacity-80">
            Spend less time on admin & paperwork and more time changing lives. Deliver exceptional care while effortlessly managing your practice.
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 animate-fadeInUp">
            <Select>
              <SelectTrigger id="service" className="bg-white text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100">
                <SelectValue placeholder="Select Service" className="text-[#1e4db7]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="physician" className="text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100">
                  Physician
                </SelectItem>
                <SelectItem value="dentist" className="text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100">
                  Dentist
                </SelectItem>
                <SelectItem value="therapist" className="text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100">
                  Therapist
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="location" className="bg-white text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100">
                <SelectValue placeholder="Select Location" className="text-[#1e4db7]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="san-diego" className="text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100">
                  San Diego
                </SelectItem>
                <SelectItem value="new-york" className="text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100">
                  New York
                </SelectItem>
                <SelectItem value="los-angeles" className="text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100">
                  Los Angeles
                </SelectItem>
              </SelectContent>
            </Select>
            <Input type="date" placeholder="Select Date" className="bg-white text-[#1e4db7] transition-colors duration-300 hover:bg-gray-100" />
            <Button className="flex items-center space-x-2 animate-bounceIn">
              <SearchIcon className="w-4 h-4" />
              <span className="transition-transform duration-300 hover:translate-y-1">Search</span>
            </Button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 fade-in">
          <img
            src="https://res.cloudinary.com/dz5ptyifl/image/upload/v1723826350/sample_1_fk27o3.png"
            alt="Doctors"
            className="w-full max-w-md mt-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            width="400"
            height="400"
            style={{ aspectRatio: "1000/800", objectFit: "cover" }}
          />
        </div>
        
      </main>
    </div>
  );
}

function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
