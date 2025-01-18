
export default function ActivityCard({Icon, data}) {
  return (
    <div className="w-full h-full bg-zinc-800 text-white rounded-lg p-4">
        <Icon className="text-5xl bg-white text-zinc-800 p-3 rounded-full" />
        <div className="mt-2 flex justify-between items-center">
            <p className="text-lg font-bold">{data.total}</p>
            <p className="text-sm">{data.growth}+%</p>
        </div>
        <p className="text-sm">{data.label}</p>
    </div>
  )
}
