// import React from 'react'm        

function Button() {

  const data = [
    {name: "Maahi Ve", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, itaque."},
    {name: "Tere Pyaar Mein", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, itaque."}
  ];

  const handleClickDownload = () => {
    alert("Download has been started....");
  }

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col items-center justify-center gap-4">
        {
          data.map((item, index) => (
            <div key={index} className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
                <h2 className="font-semibold text-xl">{item.name}</h2>
                <p className="text-xs mt-2">{item.description}</p>
                <button onClick={handleClickDownload} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3">Download Now</button>
            </div>
          ))
        }
     </div>
  )
}

export default Button