import "./Sidebar.scss"

const Sidebar = ({sidebarTitle}) => {
    return(
        <div className="sidebar">
            <h2>{sidebarTitle}</h2>
        </div>
    )
}

export default Sidebar;