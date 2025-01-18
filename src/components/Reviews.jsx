
export default function Reviews() {

    const reviews =[
      {
        type : "Positive Reviews",
        percentage : 60
      },
      {
        type : "Neutral Reviews",
        percentage : 20
      },
      {
        type : "Negative Reviews",
        percentage : 10
      }
    ] 

    return (
      <div className="w-full h-full p-4 text-md bg-white rounded-lg shadow-xl">
          <p className="text-lg font-medium">Reviews</p>
          {reviews.map((data, index) => (
            <div className="mt-4" key={index}>
              <div className="flex justify-between">
                <p className="text-sm font-medium">{data.type}</p>
                <p>{data.percentage}%</p>
              </div>
              <div className="flex items-center rounded-full overflow-hidden">
                <div
                  className="h-2 bg-orange-500 rounded-full"
                  style={{ width: `${data.percentage}%` }}
                ></div>
                <div
                  className="h-1 bg-gray-300 rounded-full"
                  style={{ width: `${100 - data.percentage}%` }}
                ></div>
              </div>
          </div>
          ))}
          <div className="w-full flex">
            <div className="w-2/4 p-4 text-sm">
              <p className="opacity-70">
                More than <b>1,500,000</b> developers used Creative Tim&apos;s products and over <b>700,000</b> projects were created.
              </p>
            </div>
            <div className="w-2/4 flex justify-end items-center">
              <button className="px-4 py-3 bg-zinc-800 text-white text-sm font-medium rounded-lg">View all reviews</button>
            </div>
          </div>
      </div>  
    )
  }
  