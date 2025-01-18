import { useRef, useState } from "react"
import Avatar from "react-avatar"
import { useSelector, useDispatch } from "react-redux"
import { updateAuthor } from "../redux/features/authorSlice"

export default function Authors() {
  const authors = useSelector(state => state.authors)
  const dispatch = useDispatch()
  console.log("authors---", authors)

  const dialogRef = useRef(null)
  const [selectedAuthor, setSelectedAuthor] = useState(null)

  const handleEditClick = (author) => {
    setSelectedAuthor(author)
    dialogRef.current.showModal()
  }

  const handleCloseDialog = () => {
    dialogRef.current.close()
    setSelectedAuthor(null)
  }

  const handleSave = () => {
    console.log(selectedAuthor)
    dispatch(updateAuthor({id : selectedAuthor.id, updatedData : {...selectedAuthor}}))
    handleCloseDialog()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSelectedAuthor({ ...selectedAuthor, [name]: value })
  }

  return (
    <div className="w-full h-full bg-white my-4 p-4 rounded-lg shadow-xl">
      <p className="font-bold opacity-90">Authors Table</p>
      <table className="my-4 w-full table-auto">
        <thead>
          <tr className="border-b-2 text-xs opacity-50 text-left">
            <th className="px-8">AUTHORS</th>
            <th className="p-4">FUNCTION</th>
            <th className="p-4">STATUS</th>
            <th className="p-4">EMPLOYED</th>
          </tr>
        </thead>
        <tbody>
          {authors.authors.map((author, index) => (
            <tr className="text-md border-b-2 font-medium" key={index}>
              <td className="px-8">
                <div className="flex space-x-4 items-center">
                  <Avatar name={author.name} size="30" className="rounded-lg" alt="" />
                  <div className="flex flex-col">
                    <p className="font-bold text-sm">{author.name}</p>
                    <p className="text-xs opacity-70">{author.email}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-xs font-bold opacity-70 text-gray-700">
                {author.function}
              </td>
              <td className="p-4 text-xs font-bold">
                <button
                  className={`px-2 py-1 bg-gradient-to-br ${
                    author.status === "ONLINE" ? `from-[#81E537]` : `from-white`
                  } from-1% ${
                    author.status === "ONLINE" ? `to-[#3ACD55]` : `to-gray-600`
                  } to-99% text-white rounded-lg`}
                >
                  {author.status}
                </button>
              </td>
              <td className="p-4 text-xs font-bold opacity-70 text-gray-700">
                {author.employed}
              </td>
              <td className="p-4 text-sm font-bold opacity-70 text-gray-700">
                <button
                  onClick={() => handleEditClick(author)}
                  className="text-blue-500 underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Dialog */}
      <dialog ref={dialogRef} className="rounded-lg p-6 w-1/3 shadow-xl bg-white">
        {selectedAuthor && (
          <>
            <h2 className="font-bold text-lg mb-4">Edit Author</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedAuthor.name}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={selectedAuthor.email}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Function</label>
                <input
                  type="text"
                  name="function"
                  value={selectedAuthor.function}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleCloseDialog}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </>
        )}
      </dialog>
    </div>
  )
}
