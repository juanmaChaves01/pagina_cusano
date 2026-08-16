import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";


export default function SocialLinks() {
 return (
   <div className="flex items-center gap-4">
     <a
       href="https://www.facebook.com/YeseniaThenOficial"
       target="_blank"
       rel="noopener noreferrer"
       className="text-blue-500 transition hover:text-blue-400"
       aria-label="Facebook"
     >
       <FaFacebookF className="h-6 w-6" />
     </a>


     <a
       href="https://www.tiktok.com/@TU_USUARIO"
       target="_blank"
       rel="noopener noreferrer"
       className="text-white transition hover:text-gray-300"
       aria-label="TikTok"
     >
       <FaTiktok className="h-6 w-6" />
     </a>


     <a
       href="https://www.youtube.com/@TU_USUARIO"
       target="_blank"
       rel="noopener noreferrer"
       className="text-red-500 transition hover:text-red-400"
       aria-label="YouTube"
     >
       <FaYoutube className="h-6 w-6" />
     </a>
   </div>
 );
}

