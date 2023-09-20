export const getUser = () => {
    const pm = localStorage.getItem('project-manager')
    const parsedPm = JSON.parse(pm)
    const isUser = parsedPm?.user
    return isUser
}