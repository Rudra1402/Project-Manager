import React, { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import '../css/pagination.css'

function Pagination({
    totalPages,
    totalUsers,
    users,
    setUsers,
    className
}) {

    const [selectedPage, setSelectedPage] = useState(0)

    const setUsersBasedOnPageNo = () => {
        if (selectedPage != totalPages - 1)
            setUsers(users?.slice(selectedPage * 10, (selectedPage * 10) + 10))
        else
            setUsers(users?.slice(selectedPage * 10, totalUsers))
    }

    const handleLeft = () => {
        if (selectedPage != 0)
            setSelectedPage(selectedPage - 1)
    }

    const handleRight = () => {
        if (selectedPage != totalPages - 1)
            setSelectedPage(selectedPage + 1)
    }

    useEffect(() => {
        setUsersBasedOnPageNo()
    }, [selectedPage])

    return (
        <div className={'pagination ' + className}>
            <AiOutlineLeft
                className={'page-icon ' + (selectedPage == 0 ? 'disabled' : '')}
                onClick={handleLeft}
            />
            <div className='page-nos'>
                {Array(totalPages).fill()?.map((page, index) => (
                    <p
                        key={index}
                        onClick={() => setSelectedPage(index)}
                        style={selectedPage == index
                            ? { backgroundColor: "lightblue", color: "#0008" }
                            : {}
                        }
                    >
                        {index + 1}
                    </p>
                ))}
            </div>
            <AiOutlineRight
                className={'page-icon ' + (selectedPage == totalPages - 1 ? 'disabled' : '')}
                onClick={handleRight}
            />
        </div>
    )
}

export default Pagination