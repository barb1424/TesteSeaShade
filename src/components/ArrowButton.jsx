import { ChevronDown } from 'lucide-react';

const ArrowButton = ({children}) => {
   return (
    <button
      className="
        text-slate-50
        lg:mx-24 md:mx-25
        cursor-pointer
        md:text-xl text-2xl
        my-4
        pl-8 md:pl-0
        flex items-center justify-center gap-2
        group                                
        transition-all duration-300          
      "
    >
      <span>{children}</span>

      <ChevronDown 
        size={24}
        className="
          opacity-0 
          -translate-y-full
          transition-all duration-300 ease-in-out
          group-hover:opacity-100 
          group-hover:-translate-y-0
        "
      />
    </button>
  );
};

export default ArrowButton;