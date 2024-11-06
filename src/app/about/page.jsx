const { default: Link } = require("next/link")


 const page = async() => {
 
    const response= await fetch('https://dummyjson.com/products',{
        cache: 'no-cache',
        next:{
            revalidate: 10
        }
    })
    const data=await response.json()

    


  return (
    <div className='p-24'>
       
       {data.products.map((item)=>(

  <Link href={`/about/${item.id}`} key={item.id}>
       <div className="flex items-start mb-2 border py-2 cursor-pointer">
    <img
    src={item.images[0]}
    alt=""
    className="size-20 rounded-lg object-cover"
    />

  <div>
    <h3 className="text-lg/tight font-medium text-gray-900">{item.title}</h3>
    <h3 className='font-semibold'> price  ${item.price}</h3>
    <span>waranty: {item.warrantyInformation}</span>

    <p className="mt-0.5 text-gray-700">
       {item.description}
    </p>
  </div>
</div>
</Link>
  ))}
    </div>
  )
}


export default page