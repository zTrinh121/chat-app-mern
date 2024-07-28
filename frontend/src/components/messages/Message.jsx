const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
            </div>
        </div>

        <div className={`chat-bubble text-white bg-blue-500`}>Hi!What is up?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">11:11</div>
    </div>
  )
}

export default Message