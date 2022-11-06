import React from 'react'

function RepoStats() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="flex items-center flex-col min-h-screen p-10" onSubmit={handleSubmit}>
            <form className='flex flex-col gap-3 md:flex-row'>
                <input spellCheck={false} title="Repository Name" className="bg-gray-50 p-3 rounded-md focus:outline-gray-200" type={'text'} name='reponame' placeholder="Repository Name" />
                <input spellCheck={false} title="Username" className="bg-gray-50 p-3 rounded-md focus:outline-gray-200" type={'text'} name='username' placeholder="Username" />
                <button type={"submit"} className="p-3 text-white bg-blue-500 rounded-md focus:outline-blue-700">Submit</button>
            </form>
        </div>
    )
}

export default RepoStats