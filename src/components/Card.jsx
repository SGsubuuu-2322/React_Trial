// import React from 'react'

function Card() {

    const data = [
        {image: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Amazon", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, aspernatur quae atque quaerat deserunt officia dignissimos possimus porro distinctio dolor?", inStock: true},
        {image: "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Flipkart", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, aspernatur quae atque quaerat deserunt.", inStock: false},
        {image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Apple", description: "Lorem ipsum dolor sit amet consectetur.", inStock: false}
    ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200" >
        {
            data.map((item, index) => (
                <div key={index} className=" w-52 bg-zinc-100 rounded-md overflow-hidden">
                    <div className="w-full h-32 bg-zinc-300">
                        <img className="w-full h-full object-cover" src={item.image} alt="" />
                    </div>
                    <div className="w-full px-3 py-4" >
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-xs mt-4">{item.description}</p>
                        <button className={`px-4 py-1 text-xs ${item.inStock ? "bg-blue-600" : "bg-red-600"} rounded text-zinc-100 mt-3`}>
                            {item.inStock ? "In Stock" : "Out Of Stock"}
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Card