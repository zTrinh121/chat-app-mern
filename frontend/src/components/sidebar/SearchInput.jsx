import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from './../../zustand/useConversation';
import useGetConversations from './../../hooks/useGetConversations';
import { toast } from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("No users found matching the search term");
    }
  }
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input className="input input-bordered rounded-full" type="text" placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)} />
        <button className="btn btn-circle bg-sky-500 text-white" type="submit">
        <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput