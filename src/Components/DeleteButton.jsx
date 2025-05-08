import React from 'react'

function DeleteButton({ id, handleDelete }) {

  return (
    <button onClick={() => handleDelete(id)} className="mt-3 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition">
      Delete Job
    </button>
  )
}

export default DeleteButton
