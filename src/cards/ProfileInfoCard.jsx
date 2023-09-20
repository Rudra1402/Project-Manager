function ProfileInfoCard({ label, value }) {
    return (
        <div className='box'>
            <div className='label'>{label}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

export default ProfileInfoCard